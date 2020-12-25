import React from 'react'
import {Link,withRouter} from 'react-router-dom'

interface props {
match:{path:string}
}
const Navbar = function(props:props){
    
console.log(props)
    return (
        <div  id ="navbar" className="navbar f l">
            <li> <Link to={props.match.path+"/"}>Home </Link> {'>>'} </li>
            <li> <Link to={props.match.path+"/chat"}>Chat </Link> {'>>'}</li>
            <li><Link to={props.match.path+"/ask"}>Ask Issuie</Link>  </li>
        </div>
    )
}

export default withRouter(Navbar);