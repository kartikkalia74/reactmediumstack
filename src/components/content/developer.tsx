import React, { useState } from "react";
import { privateApi, publicApi, baseUrl } from "../../services/api";
type props = {
    sendRequest:(sendTo:string)=> void;
  user: {
      _id:string;
    img: string;
    about: string;
    firstName: string;
    lastName: string;
    skills: { name: string }[];
  };
};
const Developer = function (props: props) {
  console.log(props);
  const [tags, change_tag] = useState(["nodejs", "reactjs", "mongodb"]);

  const profilePath = props.user.img
    ? baseUrl + props.user.img
    : process.env.PUBLIC_URL + "/elements/user.svg";
  return (
    <table
      style={{
        width: "20vw",
        background: "#FAEBD7",
        boxShadow: "2px 3px 14px 2px royalblue",
        margin: "3%",
        // "box-shadow": '2px 3px 14px 2px royalblue'
      }}
    >
      <thead>
        <tr>
          <th>
            <img src={profilePath} alt="" className="sm-icon" />
          </th>
        </tr>
        <tr>{props.user.firstName + props.user.lastName}</tr>
      </thead>
      {/* <thead> </thead> */}
      <tbody>
        <tr>
          {" "}
          <td>
            <p> {props.user.about}</p>
          </td>
        </tr>
        <tr style={{ display: "flex", justifyContent: "space-evenly" }}>
          {props.user.skills.map((tag, index) => (
            <td key={index} style={{ color: "blue" }}>
              #{tag.name}
            </td>
          ))}
        </tr>
        <tr style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <td>
            <button onClick={() => props.sendRequest(props.user._id)} className="pointer">
              follow button
            </button>
          </td>{" "}
        </tr>
      </tbody>
    </table>
    // <div className="developer_card">
    //     <div><img src={process.env.PUBLIC_URL+'/elements/user.svg'} alt="" className="sm-icon" /></div>

    //     <div  className="card_name">
    //         <p> write blog solve on nodejs reactjs and solve problems in respective technology</p>
    //         <div className="f l fw even">{tags.map((tag,index)=><li key={index} style={{color:"blue"}}> #{tag}</li>)}</div>

    //         <div className="center-bttn">
    //        <button className="pointer">follow button</button>
    //     </div>
    //     </div>

    // </div>
  );
};

export default Developer;
