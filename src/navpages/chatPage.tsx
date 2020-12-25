import React  ,{useState} from 'react'
import UserList from '../components/chat/userlist'
import ChatScreen from '../components/chat/chatpage'

type states = {
    openhistory:Boolean,

}


const ChatPage = function (){

     let [openhistory,changetohistory]= useState(false)


    return( <div className="chat f">
        <UserList changetohistory={changetohistory}/>
        <ChatScreen openhistory={openhistory}/>
    </div>)

}

export default ChatPage;