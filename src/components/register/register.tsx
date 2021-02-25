import React ,{useState, useEffect} from 'react'
import {RouteComponentProps} from 'react-router-dom'

import SkillComponent from '../elements/clip'
 type skill ={
     id:number;
     name:string;
     selected:number;
 }
const Register = (props:RouteComponentProps)=>{
    let [skills,changeSkills] =  useState([
        {id:1,name:"Node",selected:0},{id:2,name:"React",selected:0},
        {id:3,name:"Angular",selected:0},{id:4,name:"Deno",selected:0},
        {id:5,name:"Mongodb",selected:0},{id:6,name:"Mysql",selected:0},
     {id:7,name:"Html",selected:0},{id:8,name:"css",selected:0},
     {id:9,name:"Javascript",selected:0}])
     let [filteredSkills ,filterSkils]= useState([{id:1,selected:0,name:"jkfshjk"}])
   
        useEffect(()=>{
            console.log("jjj")
            filterSkils(skills)
        },[])

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
    //  if(slectedClone[index].selected){
    //      slectedClone[index]
    //  }  

    //     changeSkills()
        
    //     if(check){
    //         slectedClone.push({...skill,selected:1})
    //     }else{
           
    //     }
            changeSkills(slectedClone)


    }
    const filterSkills = (event:React.ChangeEvent<HTMLInputElement>)=>{
        let inputString = event.target.value
        console.log(inputString)
        filterSkils(skillFilter(inputString))
        
    }

    return(
        
        <div className="register">
            <h1>Register</h1>
            <div className="form">
                <fieldset>
                    <legend>name</legend>
                    <label htmlFor="name">
                        <input type="text" name="firstname" id=""/>
                        <input type="text" name="lastname" id=""/>
                    </label> 
                </fieldset>
                <fieldset>
                    <legend>password</legend>
                    <label htmlFor="password">
                        <label htmlFor="">password</label> <input type="password" name="" id=""/><br/>
                         <label htmlFor="">confirm</label> <input type="text" name="" id=""/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <label htmlFor="email">
                        <input type="email" name="" id=""/>
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
               <button className="g_bc pointer" onClick={()=>props.history.push("/login") }>signup</button>
               </div>
             
            </div>

        </div>
)


}


export default Register