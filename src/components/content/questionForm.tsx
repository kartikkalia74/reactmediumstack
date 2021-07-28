import React , {useState,createRef} from 'react';
import {connect}  from 'react-redux';
import Editor from '../elements/editor';
import Skill from '../elements/skills';
import {skill} from '../../types/commonTypes';
import { EditorState ,convertToRaw} from 'draft-js';
import {typeState} from '../../reducers/question'
import {Dispatch} from 'redux'
import {Add} from '../../actions/question'
import { RouteComponentProps } from 'react-router-dom';
import {privateApi,publicApi,baseUrl} from '../../services/api'

type props ={
    Add(typeState:typeState):void;
} & RouteComponentProps;

const QuestionForm = (props:props) => { 
    const title = createRef<HTMLInputElement>();
    const [slectedSkills,AddOrRemoveSkill] = useState<skill[]>([])
    const [content , changeContent] = useState<EditorState>(EditorState.createEmpty())
    const SelectedFunc = (currentskill:skill) => {
        if(slectedSkills.find((each)=> each.id ===currentskill.id)){
            AddOrRemoveSkill(slectedSkills.filter((each)=> each.id !==currentskill.id));
        }else {
            AddOrRemoveSkill([...slectedSkills,currentskill]);
        }
    }
    const addQuestion = async (data:any) =>{
        try{
           const result = await privateApi.addquestion(data);
           return result['data'];
        }catch(err){
            throw err;
        }
    }
    const handleSubmit = async () =>{
        try {
            debugger;
            console.log(title,content,title.current?.value);
            if(title.current){
                console.log(title.current.value);
                // title.current.focus()
            }
            const user  = JSON.parse(localStorage.getItem('user')||'{}')

          const result =  await addQuestion({id:'1',title:title.current?.value||'',content:JSON.stringify(convertToRaw(content.getCurrentContent())),postedBy:user._id,skills:slectedSkills.map((each)=>each.name)});  
          console.log(result);
          // props.Add()
            props.history.push('/home/ask');
        }catch(err){
            console.log(err)
        }
       
    }
    return (
        <div className="questionform">
            <fieldset>
                title
                <input ref={title} type="text"/>
            </fieldset>
            <fieldset>
                content
                <Editor  changeContent={changeContent}/>
            </fieldset>
            <fieldset>
                keywords <br/>
                {slectedSkills.map((each:skill)=>each.name).join(" ")}
                <Skill slectedSkills={slectedSkills} searching={true} SelectedFunc = {SelectedFunc}/>
            </fieldset>

            <button  type="submit" onClick={handleSubmit}>Add Question</button>

        </div>
    )
}

const mapStateToProps = (state:any)=>{
    console.log(state);
    return state
} 
const mapDispachToprops = (dispatch:Dispatch) =>{
    return {
        Add:(payload:typeState)=> dispatch(Add(payload)) 
    }
}

export default connect (mapStateToProps,mapDispachToprops)(QuestionForm);