import React from 'react';

import DeveloperCard from './../content/developer';
const Recomended_developer = function (){
let array = [1,2,3,4,5,6,7]

    return (
        <div  className="recommended_developer">
            <div>
                <h1>Recommended Developer</h1>
            </div>
            <div className="developer_list">
            {array.map((elem,index)=> < DeveloperCard key={index}/>)}
            </div>
            
            

        </div>
    )
}
export default Recomended_developer;