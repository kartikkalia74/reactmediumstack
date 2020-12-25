import React from 'react'
import {Route,Switch} from  'react-router-dom'
import Ask  from '../components/ask/askscreen'
import TopSkills from '../components/topSkills/topskill'
import QuestionForm from '../components/content/questionForm'

const Askscreen = (props)=>{

console.log(props.location.pathname+"/")
    return (
        <div className="f">
           
    <TopSkills />
    <div className="askContent">
    <Switch>
    <Route path={props.match.path+"/"} exact={true} component={Ask}/>
    <Route path={props.match.path+"/new/"} component={QuestionForm}/>
    </Switch>
    </div>
    <div className="ads_section"></div>
    
 
        </div>
        
    )
}

export default Askscreen;