import React from 'react';
import {Link} from 'react-router-dom'

const login = ()=>{
return (
<div className="login">

<div className="login_box">
   <label htmlFor="login"> Login</label>
   
   
   <input type="text" name="email" id=""/>
   <input type="password" name="" id=""/>
   <Link to="/home">Login</Link>
   {/* <button>  Login</button> */}
   </div> 


</div>
)

}

export default login