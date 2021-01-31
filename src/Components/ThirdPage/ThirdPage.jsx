import React from "react";
import "./thirdpage.css";
import leftpic from "./Asset 3@2x.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import cardpic1 from "./Group 666.png";
import cardpic2 from "./Group 225.png";
import cardpic3 from "./Group 227.png";
import cardpic4 from "./Group 871.png";
import cardpic5 from "./Group 233.png";
import cardpic6 from "./Group 255.png";

function ThirdPage() {
  return (
    <div className="thirdpage">
      <div className="thirdpage_top">
        <div className="leftpic_div">
          <img src={leftpic} alt="" className="leftpic" />
        </div>
        <div className="thirdpage_intro">
          <p className="minihead">Welcome Onboard...</p>
          <p className="mainhead">Let's Drive To The Desired Destination!!</p>
          <p className="smallintro">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            veritatis fuga voluptas, officiis ratione rem assumenda natus nam
            sequi exercitationem laudantium, quas corporis doloremque sunt
            accusamus facere corrupti quia mollitia.
          </p>
          <button className="thirdpageintro_button">Read More</button>
        </div>
      </div>
      <div className="thirdpage_services">
        <h4 className="h4">MAJOR SERVICES</h4>
        <div className="service_cards">
          <ServiceCard cardimage={cardpic1} />
          <ServiceCard cardimage={cardpic2} classname="center" />
          <ServiceCard cardimage={cardpic3} />
          <ServiceCard cardimage={cardpic4} />
          <ServiceCard cardimage={cardpic5} classname="center"/>
          <ServiceCard cardimage={cardpic6} />
        </div>
        <div className="servicebutton_div">
          <button className="servicebutton">
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
