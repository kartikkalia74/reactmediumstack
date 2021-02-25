import React from 'react'


const chatpage = function (props:any){
    const messageList = ["hello","how are you","iam fine & you", "iam also good","hello","how are you","iam fine & you", "iam also good"]
    console.log(props)
    return (<div className="chatPage ">

       <div className="chatcontent">
       
       {!props.openhistory?<div className="startChatHeading">
            
        <h1>Welcome to chat service, hope you enjoy our service</h1>
        </div>:
            <>
            <div className="chating">
                {messageList.map((each,i)=>
                    <p className={`message ${i%2===0?'left':'right'}`}>{each}</p>
                )}
                
            </div>
            </>}
       
        </div>
        {props.openhistory && 
        <div className="enter_send f">
            <input type="text" className ="typing" name="" id=""/>
        <button>send</button>
        </div>
        
    
        }
    </div>)
}

export default chatpage