import React from 'react';
import {EditorState,Editor,convertFromRaw} from 'draft-js';
import Acknowledge from '../elements/acknowledge';
import {typeState} from '../../reducers/article';

type props = {
    key:number;
    content:typeState
} 

const Article = (props:props)=>{

let date =  new Date()
const editorState = EditorState.createWithContent(convertFromRaw(props.content.content))

console.log(date,typeof date)
    return (
        <div className="article">
            <div>
    <h1>{props.content.title}</h1>
            </div>
            <div>
            <Editor editorState={editorState} onChange= {()=>{}} readOnly/>
                
            </div>
            <div className="l">
               <li>kartik kalia</li>
               <li>{date.toDateString()}</li> 
                
            </div>
            <Acknowledge/>
        </div>
    )
}

export default Article;