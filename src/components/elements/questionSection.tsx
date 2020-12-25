import React from 'react'
import Acknowledge from './acknowledge'
import {Editor,EditorState,convertFromRaw,ContentState} from 'draft-js';

interface props  {
id:number;
content:{question:string,content:any,skills:string[]}
}
const QuestionSection  = (props:props) =>{
        console.log(props)
       const editorState = EditorState.createWithContent(convertFromRaw(props.content.content))
//  const state =convertFromRaw(props.content.content);
//  const editorstate =EditorState.createWithContent(props.content.content);
return (<div key={props.id} className="question_section">
<div className="question">
        {props.content.question}
</div>
<Editor editorState={editorState} onChange= {()=>{}} readOnly/>

<div className="content">
    for solving issue you need to refer internet for finding the issue.otherwise asks expert to solve the issue.
</div>
<div className="keywords">
        {props.content.skills.map((each)=>each +'')}
</div>
<Acknowledge/>

</div>)

}
export default QuestionSection