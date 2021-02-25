import React from 'react'
import {Link} from 'react-router-dom';

const TopSkills  = () => {
   let skills = [
        {id:1,name:"Node",selected:0},{id:2,name:"React",selected:0},
        {id:3,name:"Angular",selected:0},{id:4,name:"Deno",selected:0},
        {id:5,name:"Mongodb",selected:0},{id:6,name:"Mysql",selected:0},
     {id:7,name:"Html",selected:0},{id:8,name:"css",selected:0},
     {id:9,name:"Javascript",selected:0}]
return (
<div className="topSkills">

    {skills.map((each,i)=><li key={i}> <Link to={"/"+each.name}>{each.name}</Link> </li>)}


</div>
);

}


export default TopSkills;