import React ,{useState} from 'react';
import SkillComponent from './clip'
import {skill} from '../../types/commonTypes'
import { connect } from 'react-redux';

interface IOwnProps  {slectedSkills:skill[] , searching:boolean; SelectedFunc:(skill:skill) => void} 
  
  interface IMappedProps {
    skill:skill[]
  }
export interface IFooProps extends IMappedProps, IOwnProps { }

const Skill = (props:IFooProps) => {
    // {id:1,name:"Node",selected:0},{id:2,name:"React",selected:0},
    //     {id:3,name:"Angular",selected:0},{id:4,name:"Deno",selected:0},
    //     {id:5,name:"Mongodb",selected:0},{id:6,name:"Mysql",selected:0},
    //  {id:7,name:"Html",selected:0},{id:8,name:"css",selected:0},
    //  {id:9,name:"Javascript",selected:0}
    let [skills,changeSkills] =  useState<skill[]>(props.skill)
     let [skillText, changeText ] = useState('')

     const filterSkills = () => {
        return skills.filter((each)=>{
            let re = new RegExp(skillText,'gi')
              return re.test(each.name)
        })
     }

     const handleSelect = (selectedSkill:skill) => {
       const index =  skills.findIndex((each)=> each.id===selectedSkill.id)
       selectedSkill.selected = selectedSkill.selected?0:1
        skills.splice(index,1,selectedSkill)
        props.SelectedFunc(selectedSkill)
     }

return (<div className="skill_Tab">
<input type="text" name="" onChange={(event)=> changeText(event.target.value)} value={skillText} id=""/>
    <div className="skillset">
    {/*  */}
    {props.searching  ?   !!skillText.length && filterSkills().map((each:skill)=><div className="pointer" onClick={()=>handleSelect(each)} ><SkillComponent skill={each}/></div>):( filterSkills().map((each:skill)=><div className="pointer" onClick={()=>handleSelect(each)} ><SkillComponent skill={each}/></div>))}

    </div>
</div>
    
)

}

const mapStateToProps = (state:any)=>{
    console.log(state);
    return state
} 
export default connect<IMappedProps, null,IOwnProps>(mapStateToProps)(Skill);