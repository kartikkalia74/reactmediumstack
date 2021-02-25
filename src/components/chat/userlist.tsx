import React  from 'react'
import UserCard from '../chat/userCard'

const Userlist = function (props:any){

let array =[1,2,3,4,5,6,7,8]

    return(
        <div className="userlist">
            <div className="checklist">
            {array.map((each,index)=><li onClick={()=>props.changetohistory(true)} key={index}><UserCard/></li>)}
            </div>
           
        </div>
    )
}

export default Userlist;