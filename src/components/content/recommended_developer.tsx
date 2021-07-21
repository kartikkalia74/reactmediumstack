import React, { useEffect, useState } from 'react';
import {privateApi,publicApi} from '../../services/api'

import DeveloperCard from './../content/developer';
const Recomended_developer = function (){

    const [developerlist,changeDeveloperList] = useState([])

    

    const  getUser = async () =>{
        try{
          const userDetail = JSON.parse(localStorage.getItem('user')||'{}')
          const user=  await privateApi.Userlist({userId:userDetail._id}) 
          console.log(user.data)
          changeDeveloperList(user.data)    
        }catch(err){
          console.log(err);
        }
           
      }
    const sendRequest = async (sendTo:string) =>{
    try{
        const userDetail = JSON.parse(localStorage.getItem('user')||'{}')
        await privateApi.sendFollowRequest({sendBy:userDetail._id,sendTo})
       await getUser()
    }catch(err){
        console.log(err);
    }
    } 

    useEffect(()=>{
    
        getUser()
    },[])
    return (
        <div  className="recommended_developer">
            <div>
                <h1>Recommended Developer</h1>
            </div>
            <div className="developer_list">
            {developerlist.map((elem:{img:string,about:string,_id:string, firstName:string,lastName:string,skills:{name:string}[]},index)=> < DeveloperCard sendRequest={sendRequest} user={elem} key={index}/>)}
            </div>
            
            

        </div>
    )
}
export default Recomended_developer;