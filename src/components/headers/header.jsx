import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {baseUrl} from '../../services/api'

// import  mlogo from process.env.PU,BLIC_URL+'/app/myspace-l.svg'
const Headers = (props) => {
  const [isSearchOn, changeSeachStatus] = useState(false);
  console.log(props, process.env.PUBLIC_URL);
const userDetail = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{}
  const imagePath = userDetail.img ?baseUrl+userDetail.img:process.env.PUBLIC_URL + "/elements/user.svg";
  return (
    <header id="Header">
      <div className="header-1half">
        <img
          onClick={() => props.history.push("/")}
          src={process.env.PUBLIC_URL + "/app/myspace-s.svg"}
          className="l-icon pointer"
          alt="fgf"
        />
      </div>

      {/* <h1>Headers</h1> */}
      <div className="header-2half">
        <div>{isSearchOn && <input type="text" />}</div>

        <img
          onClick={() => {
            console.log(isSearchOn);
            changeSeachStatus(!isSearchOn);
          }}
          src={process.env.PUBLIC_URL + "/elements/search.svg"}
          alt=""
          className="sm-icon pointer"
        />
        <img
          src={imagePath}
          alt=""
          className="l-icon pointer"
        />
        <img
          src={process.env.PUBLIC_URL + "/elements/logout.png"}
          onClick={() => {
            localStorage.removeItem("user");
            props.history.push("/login");
          }}
          alt=""
          className="l-icon pointer"
        />
      </div>
    </header>
  );
};
export default withRouter(Headers);
