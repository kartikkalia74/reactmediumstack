import React ,{useEffect}from 'react'
import {Link,RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
import {Dispatch as dispatch} from 'redux'
import {reducerType} from '../../reducers'
import {typeState} from '../../reducers/skills';
import {privateApi,publicApi} from '../../services/api'
import {Add} from '../../actions/skill'
import {skill} from '../../types/commonTypes'
type StateProps = {skill:typeState[]}
 type Dispatch = {
    Add:(skill:typeState[]) =>void;
 } 
 type Props = Dispatch & RouteComponentProps  & StateProps;
const TopSkills  = (props:Props) => {
    useEffect(()=>{
        const  getSkill =async () =>{
            const result:{data:typeState[]} = await privateApi.SkillList()
            console.log(result)
            props.Add(result.data)
            }
            getSkill()
    },[])
   let skills = []
return (
<div className="topSkills">

    {props.skill.map((each,i)=><li key={i}> <Link to={"/home/skill/"+each.name}>{each.name}</Link> </li>)}


</div>
);

}

const mapStateToProps = (state: reducerType) =>{
    console.log(state)
    return {skill:state.skill}
}
const mapDispatchToProps = (dispatch:dispatch) =>{
    return {Add:(payload:typeState[]) => dispatch(Add(payload))}
}

export default connect(mapStateToProps,mapDispatchToProps)(TopSkills);