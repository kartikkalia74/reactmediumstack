import React ,{useState} from 'react'

const Developer = function (){
    const [tags,change_tag] = useState(["nodejs", "reactjs","mongodb"])
    return (
        <div className="developer_card">
            <div><img src={process.env.PUBLIC_URL+'/elements/user.svg'} alt="" className="sm-icon" /></div>
            
            <div  className="card_name">
                <p> write blog solve on nodejs reactjs and solve problems in respective technology</p>
                <div className="f l fw even">{tags.map((tag,index)=><li key={index} style={{color:"blue"}}> #{tag}</li>)}</div>
                
                <div className="center-bttn">
               <button className="pointer">follow button</button> 
            </div>
            </div>
           
        </div>
    )
}

export default Developer;