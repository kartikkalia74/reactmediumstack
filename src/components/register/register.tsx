import React ,{useState, useEffect} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {connect } from 'react-redux';
import {Dispatch as dispatch} from 'redux'
import {reducerType} from '../../reducers'
import {typeState} from '../../reducers/skills';
import {privateApi,publicApi} from '../../services/api'
import {Add} from '../../actions/skill'
import {skill} from '../../types/commonTypes'
import SkillComponent from '../elements/clip'
import joi from 'joi';
import {  toast } from 'react-toastify';
 
type StateProps = {skill:typeState[]}
 type Dispatch = {
    Add:(skill:typeState[]) =>void;
 } 
 type Props = Dispatch & RouteComponentProps  & StateProps;

const Register = (props:Props)=>{
    console.log(props.skill)

    let [userProfilemage, changeUserProfile] = useState()
    let [userFields, changeUserFields] = useState({});
    let [skills,changeSkills] =  useState<skill[]>([])
     let [filteredSkills ,filterSkils]= useState([{id:'1',selected:0,name:"jkfshjk"}])
   
        useEffect(()=>{
          const  getSkill =async () =>{
           const result:{data:typeState[]} = await privateApi.SkillList()
           console.log(result)
           props.Add(result.data)
           }
           getSkill()
            console.log("jjj")
            filterSkils(skills)
        },[])

        useEffect(()=>{

            changeSkills(props.skill.map((each)=>({...each,id:each._id, selected:0})))
        },[props.skill])
    const skillFilter = (text:string)=>{
        let sillSet = [...skills]
        return sillSet.filter((each)=>{
            let re = new RegExp(text,'gi')
              return re.test(each.name)
        })
    } 
    const SelectedFunc = (skill:skill):void=>{
        let slectedClone = [...skills]
     let index =   slectedClone.findIndex((each)=>each.id=== skill.id)
     console.log(index,skill.id)
     slectedClone[index].selected= slectedClone[index].selected===1?0:1
            changeSkills(slectedClone)


    }
    const filterSkills = (event:React.ChangeEvent<HTMLInputElement>)=>{
        let inputString = event.target.value
        console.log(inputString)
        filterSkils(skillFilter(inputString))
        
    }
    const handleInput = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        changeUserFields({...userFields,[e.target.name]:e.target.value})
        
    }

    const handleSubmit = async() =>{
        const schema = joi.object({
            firstName:joi.string()
            .alphanum()
            .min(3)
            .max(10)
            .required(),
            lastName:joi.string()
            .alphanum()
            .min(3)
            .max(10)
            .required(),
            about:joi.string()
            .max(70),
            password:joi.string()
            .alphanum()
            .min(3)
            .max(10)
            .required(),
            confirm:joi.string()
            .alphanum()
            .min(3)
            .max(10)
            .required(),
            email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()

        })

      const {error,value}=  schema.validate(userFields)
      if(error){
        toast.error(error.toString())
      }
     if(!error){
         try{
            const formdata= new FormData()
            formdata.append('data',JSON.stringify({...userFields,skills:skills.map((each)=>each.id)}))
           if(userProfilemage){
            formdata.append('file',userProfilemage)
           }
            
            const result= await publicApi.register(formdata)

            toast.success(result.message)
            props.history.push('/login')
         }catch(err){
             console.log(err.response)
             if(err.response){
                toast.error(err.response.data.err)
             }else{
                 toast.error("something went wrong.")
             }
            
         }
     }
        console.log(userFields,error,value,filteredSkills)
    }

    const handleFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        // let image_as_files = e.target.files[0];
        console.log(e.target)
        if(e && e.target&&e.target.files){
            changeUserProfile(e.target.files[0])
        }
       
    }

    return(
        
        <div className="register">
            <h1>Register</h1>
            <div className="form">
                <fieldset>
                    <legend>name</legend>
                    <label htmlFor="name">
                        <input type="text" onChange={handleInput} placeholder="firstName" name="firstName" id="firstName_id"/>
                        <input type="text" onChange={handleInput} placeholder="lasttName" name="lastName" id="lastName_id"/>
                    </label> 
                </fieldset>
                <fieldset>
                    <legend>password</legend>
                    <label htmlFor="password">
                        <label htmlFor="">password</label> <input onChange={handleInput} type="password" name="password" id="password_id"/><br/>
                         <label htmlFor="">confirm </label> <input onChange={handleInput} type="text" name="confirm" id="text_id"/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Bio</legend>
                    <textarea id="noter-text-area" name="about"  onChange={handleInput} />
                </fieldset>
                <fieldset>
                    <legend>profileImage</legend>
                    <input onChange={handleFile} type="file" name="profile" id="text_id"/>
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <label htmlFor="email">
                        <input type="email" onChange={handleInput} name="email" id="email_id"/>
                        {/* <input type="text" name="" id=""/> */}
                    </label>
                </fieldset>
                
               <fieldset>
                   <legend>skills</legend>
                   <input type="text" name="" onChange={filterSkills} id=""/>
    <div>{skills.filter(each=>each.selected===1).map((each:skill)=>each.name).join(" ")}</div>
                  <div className="skillset">
                  {/*  */}
                  {filteredSkills.map((each:skill)=><div className="pointer" onClick={()=>SelectedFunc(each)} ><SkillComponent skill={each}/></div>)}

                  </div>
                   
                   {/* <select name="" id="">
                   
                   {filteredSkills.map((each)=><option value={each.name}>{each.name}</option>)}
                

                   </select> */}
               </fieldset>
               {/* <select name="" id="">
                   <optgroup label="javascript">
                    <option value="1">Nodejs</option>
                    <option value="1">React</option>
                    <option value="1">Angular</option>
                    <option value="1">vue</option>
                    <option value="">Deno</option>                       
                   </optgroup>
                   <optgroup label="python">
                       <option value="">Django</option>
                       <option value="1">flask</option>
                   </optgroup>
                   <optgroup label="Java">
                       <option value="">spring</option>
                       <option value="1">Hibernate</option>
                   </optgroup>
                   <optgroup label="Android"></optgroup>
                   <optgroup label="kotlin"></optgroup>
                   <optgroup label="flutter"></optgroup>
                   <optgroup label="swift"></optgroup>
                   <optgroup label="c#"></optgroup>
                   <optgroup label="c"></optgroup>
                   <optgroup label="c++"></optgroup>
               </select> */}
     
               <div className="submit_button">
               <button className="g_bc pointer" onClick={handleSubmit }>signup</button>
               </div>
             
            </div>

        </div>
)


}
const mapStateToProps = (state: reducerType) =>{
    console.log(state)
    return {skill:state.skill}
}
const mapDispatchToProps = (dispatch:dispatch) =>{
    return {Add:(payload:typeState[]) => dispatch(Add(payload))}
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)