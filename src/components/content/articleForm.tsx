import React ,{useState,createRef}  from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {connect}  from 'react-redux';
import {Dispatch} from 'redux';
import { EditorState ,convertToRaw} from 'draft-js';
import {typeState} from '../../reducers/article'
import Skill from '../elements/skills';
import {skill} from '../../types/commonTypes';
import {Add} from '../../actions/article';
import Editor from '../elements/editor';



type props ={
    Add(typeState:typeState):void;

} & RouteComponentProps;

const ArticleForm = (props:props) => {    
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
    const handleSubmit = () =>{
        console.log(title,content,title.current?.value);
        if(title.current){
            console.log(title.current.value);
        }
        props.Add({id:1,title:title.current?.value||'',content:convertToRaw(content.getCurrentContent()),skills:slectedSkills.map((each)=>each.name)})
        props.history.push('/home/');
    }

    return (
            <div className="articleForm">
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

const mapStateToProps = (state:any) =>{
    console.log(state);
return state;
}

const mapDispachToprops = (dispatch:Dispatch) =>{
    return {
        Add:(payload:typeState)=> dispatch(Add(payload)) 
    }
}
export default connect(mapStateToProps,mapDispachToprops)(ArticleForm);