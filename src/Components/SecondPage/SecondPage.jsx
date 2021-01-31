import React from "react";
import SecondPageCard from "../SecondPageCard/SecondPageCard";
import "./secondPage.css";
import userPic from "./user (1)@2x.png";
import accountant from "./accounting@2x.png";
import bpo from "./operator@2x.png";
import dataentry from "./folder@2x.png";
import sales from "./shopping@2x.png";
import reception from "./reception@2x.png";
import hospitality from "./entrepeneur@2x.png";
import delivery from "./gift@2x.png";
import cook from "./chef@2x.png";
import spa from "./herbal@2x.png";
import driver from "./steering-wheel@2x.png";
import RoundCard from "../RoundCard/RoundCard";

function SecondPage() {
  return (
    <div className="secondpage">
      <div className="secondpage_top">
        <SecondPageCard
          userImage={userPic}
          mainhead="500 +"
          subhead="Freshers"
        />
        <SecondPageCard
          userImage={userPic}
          mainhead="458 +"
          subhead="Experienced"
        />
        <SecondPageCard
          userImage={userPic}
          mainhead="394 +"
          subhead="Employers"
        />
      </div>
      <div className="secondpage_bottom">
        <h4 className="secondpage_h4">Top Job Roles</h4>
        <div className="secondpagebottom_grid">
          <RoundCard
            className="avatar_card"
            avatar={accountant}
            title="Accountant"
          />
          <RoundCard avatar={bpo} title="BPO/Customer Care" />
          <RoundCard avatar={dataentry} title="Data Entry/Back Office" />
          <RoundCard avatar={sales} title="Sales/Marketing" />
          <RoundCard avatar={reception} title="Receptionist/Front Office" />
          <RoundCard avatar={hospitality} title="Hospitality Executives" />
          <RoundCard avatar={delivery} title="Delivery" />
          <RoundCard avatar={cook} title="Cook/Chef" />
          <RoundCard avatar={spa} title="Beauticians/Spa" />
          <RoundCard avatar={driver} title="Driver" />
          <div className="secondpage_button_div">
          <button className="secondpage_button">View All Roles</button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default SecondPage;
