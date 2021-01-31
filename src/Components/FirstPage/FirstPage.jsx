import React from "react";
import FirstPageCard from "../FirstPageCard/FirstPageCard";
import "./firstPage.css";
import sidePic from "./Mask Group 1.png";

function FirstPage() {
  return (
    <div className="firstpage">
      <div className="firstpage_top">
        <div className="firstpage_intro">
          <h4 className="firstpage_smallhead">Welcome On Board..</h4>
          <div className="firstpage_mainhead">
            <h3>
              Let's Drive To The
              <span style={{ display: "block" }}>Desired Destination!!</span>
            </h3>
          </div>
          <div className="firstpage_smallintro">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              unde numquam nesciunt odit, explicabo nihil neque ipsum
              repellendus, corporis tempora totam? Dolore maiores iste officia
              odio beatae non quae doloremque.
            </p>
          </div>
        </div>
        <div className="firstpage_sidepic">
          <img className="firstpage_sidepic" src={sidePic} alt="sidepic" />
        </div>
      </div>
      <div className="firstpage_bottom">
          <FirstPageCard
             smallhead="Are you a"
             bighead="Fresher?"
             background="rgb(241, 176, 54)"
             buttonColor="orange"
          />
          <FirstPageCard
             smallhead="Are you looking for a"
             bighead="Job Upgrade"
             background="white"
             buttonColor="rgb(92, 91, 91)"
          />
          <FirstPageCard
             smallhead="Are you an"
             bighead="Employer"
             background="rgb(241, 176, 54)"
             buttonColor="orange"
          />
      </div>
    </div>
  );
}

export default FirstPage;
