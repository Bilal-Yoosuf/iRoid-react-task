import React from "react";
import "./firstPageCard.css";

function FirstPageCard({ smallhead, bighead, background, buttonColor }) {
  return (
    <div className="firstpagecard" style={{ backgroundColor: `${background}` }}>
      <div className="firstpagecard_box">
        <div className="firstpagecard_head">
          <p className="firstpagecard_smallhead">{smallhead}</p>
          <p className="firstpagecard_bighead">{bighead}</p>
          <p className="firstpagecard_intro">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, fuga. Quia reprehenderit
          </p>
        </div>
        <div className="firstpagecard_button_div">
          <button
            className="firstpagecard_button"
            style={{ border: `2px solid ${buttonColor}` }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstPageCard;
