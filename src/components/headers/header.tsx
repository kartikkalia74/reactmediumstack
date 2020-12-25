import React,{useState,useEffect} from 'react';

// import  mlogo from process.env.PUBLIC_URL+'/app/myspace-l.svg'
 const headers = function (){
console.log(process.env.PUBLIC_URL)
    return (
        <header id="Header" >
            <div className="header-1half">
            <img src={process.env.PUBLIC_URL+'/app/myspace-s.svg'} className="l-icon" alt="fgf" />
            </div>
            
            {/* <h1>Headers</h1> */}
            <div className="header-2half">
            <img src={process.env.PUBLIC_URL+'/elements/search.svg'} alt="" className="sm-icon"/>
            <img src={process.env.PUBLIC_URL+'/elements/user.svg'} alt="" className="l-icon" />
            </div>
            
            
        </header>
            )

    


}
export default headers
