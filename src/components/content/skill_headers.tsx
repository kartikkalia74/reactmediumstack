import React,{useState} from 'react';

const Skill_headers = function(){
   let [techstack,change_techstack] = useState(['Nodejs','Reactjs','Angularjs','Typescript']);
return (
    <div>
        {techstack.map((tech,index)=><span key={index}>{tech} </span>)}
    </div>
)



}

export default Skill_headers;