import React from "react";
import "./servicecard.css";
import arrow from "./Group -2@2x.png";

function ServiceCard({ cardimage, classname }) {
  return (
    <div className="servicecard">
      <div className={`servicecard_box  ${classname}`}>
        <div className="servicecard_image_div">
          <img src={cardimage} alt="" className=".servicecard_image" />
        </div>
        <h5 className="box_head">Hand Holding Job Seekers</h5>
        <p className="box_intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          praesentium minima consequuntur fuga? Tenetur dolor repellendus
          voluptates quo aspernatur, aut itaque vel, vitae repudiandae
          accusantium voluptatibus excepturi! Quasi, amet nam!
        </p>
        <div className="arrow_div">
            <img src={arrow} alt="" className="arrow"/>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
