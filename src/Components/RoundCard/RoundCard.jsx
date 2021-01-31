import React from "react";
import "./roundcard.css";
import corner from './Path 722.png'

function RoundCard({ title, avatar }) {
  return (
    <div className="roundcard">
      <div className="avatar_div">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <img src={corner} alt="" className="corner"/>
      <p>{title}</p>
    </div>
  );
}

export default RoundCard;
