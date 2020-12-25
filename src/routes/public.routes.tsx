

import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Header from '../components/headers/header'
import Navbar from '../components/navbar/navbar'
import chat_Page from '../navpages/chatPage'
import  Homepage from '../navpages/homePage'
import Ask from '../navpages/Askscreen'


interface props {
    match:{path:string}
}
interface state {
    nema:string
}
 class PublicRoutes extends Component<props> {

render(){
    console.log(this.props)
    let {path}=this.props.match
    return (
        <React.Fragment>
        
        <Header/>
        <Navbar/>
        
              <div id="content" className="content">
              
              
              <Route path= {path+'/'}  component={Homepage}/>
              <Route path={path+"/chat"} component={chat_Page}/>
              <Route path={path+"/ask"} component={Ask}/>


              {/* <Recomended_developer/>
              < Article_list/> */}
            
              </div>
            
        </React.Fragment>
        
            )
}
    
}

export default PublicRoutes