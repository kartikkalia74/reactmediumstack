import React , {useEffect} from 'react'
import User_card from '../chat/userCard'

const Userlist = function (props:any){

let array =[1,2,3,4,5,6,7,8]
// useEffect(()=>{
    // let head = document.getElementById('Header')?document.getElementById('Header').clientHeight:0
    // console.log(head*0.65)
    // console.log(document.getElementById('navbar')?.clientHeight * 0.65)
    // console.log(document.getElementById('content')?.clientHeight *.65)
// })

    return(
        <div className="userlist">
            <div className="checklist">
            {array.map((each,index)=><li onClick={()=>props.changetohistory(true)} key={index}><User_card/></li>)}
            </div>
           
        </div>
    )
}

export default Userlist;