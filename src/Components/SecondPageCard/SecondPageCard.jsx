import React from "react";
import "./secondPageCard.css";

function SecondPageCard({ userImage, subhead, mainhead }) {
  return (
    <div className="secondpagecard">
      <img className="card_image" src={userImage} alt="avatar" />

      <div className="card_intro">
        <p className="card_mainhead">{mainhead}</p>
        <p className="card_subhead">{subhead}</p>
      </div>
    </div>
  );
}

export default SecondPageCard;
