// TEAM LIST
import React from "react";
import '../css/myTeam.css';

const MyTeam = ({ img, name , deleted}) => {
    const onDelete = (q) => {
      deleted(q);
    };
  return (
    <div className="row listTeam">
      <div className="col-md-12">
        <div className="row ">
          <div className="col-md-2"></div>
          <div className="col-md-2 imgList">
            <img src={img} onClick={(e) => onDelete(e.target.src)} className="image_team"/>
            <div className="middle">
            <i className="material-icons delete_icon" >delete_forever</i>
            </div>
          </div>
          <div className="col-md-8 nameList">{name}</div>
        </div>
      </div>
    </div>
  );
};
export default MyTeam;