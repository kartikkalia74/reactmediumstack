import React, { useState } from 'react';
import {Link, RouteComponentProps} from 'react-router-dom'
import {publicApi} from '../../services/api'
import {  toast } from 'react-toastify';

type Props = RouteComponentProps;
const Login = ({history}:Props)=>{
 const [credentials, changeCredenta] =  useState({email:'',password:''})

 const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
      changeCredenta({...credentials,[e.target.name]:e.target.value})
 }

 const handleSubmit = () =>{
   console.log(credentials)
   publicApi.login(credentials).then((result)=>{
     debugger;
    localStorage.setItem('user',JSON.stringify(result['data'])) 
    history.push('/home')}).catch((err)=>{
      console.log(err.response)
      toast.error(err.response.data.err)
    })
 }
return (
<div className="login">
<h1>Developer Tool</h1>
<div className="login_box">
   <label htmlFor="login"> Login</label>
   <input type="text" onChange={handleChange} name="email" id="email_id"/>
   <input type="password" onChange={handleChange} name="password" id="password_id"/>
   <button onClick={()=>handleSubmit()}>Login</button>
   <Link to="/signup">create Account</Link>
   </div> 


</div>
)

}

export default Login;