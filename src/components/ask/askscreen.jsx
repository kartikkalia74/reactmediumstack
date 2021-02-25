import React from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import QuestionSection from '../elements/questionSection';


const Askscreen = (props) => {
    console.log(props)
    const movetoQuestionScreen = ()=>{
        props.history.replace(props.location.pathname+"/new")
    }
return (
    <div className = "askscreen">
       <div> <button onClick={movetoQuestionScreen}>Ask Question</button></div>
       {props.questions.map((each,i)=> <QuestionSection key={i} content={each} id={i}/>)} 
    </div>
)
}

const mapStateToprops = (state) => {
console.log(state);
return {questions:state.question};
}
export default connect(mapStateToprops,null)(withRouter(Askscreen)) ;