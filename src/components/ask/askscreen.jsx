import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import QuestionSection from '../elements/questionSection';
import {privateApi,publicApi,baseUrl} from '../../services/api'


const Askscreen = (props) => {
   const [questionArray ,changeQuestionArray]= useState([])
    console.log(props)
    const movetoQuestionScreen = ()=>{
        props.history.replace(props.location.pathname+"/new")
    }
    useEffect(()=>{

        getQuestionList()
    },[])
    const getQuestionList = async () =>{
        try {
            const  list  = await privateApi.listquestion()
            changeQuestionArray(list['data']);
        }catch(err){
            console.log(err)
        }
    }
return (
    <div className = "askscreen">
       <div> <button onClick={movetoQuestionScreen}>Ask Question</button></div>
       {questionArray.map((each,i)=> <QuestionSection key={i} content={each} id={i}/>)} 
    </div>
)
}

const mapStateToprops = (state) => {
console.log(state);
return {questions:state.question};
}
export default connect(mapStateToprops,null)(withRouter(Askscreen)) ;