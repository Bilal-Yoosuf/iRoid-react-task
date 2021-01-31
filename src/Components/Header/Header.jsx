import React from "react";
import "./header.css";
import logo from "./Image 1.png";
import homePic from "./Icon feather-home.png";
import headPhone from "./Icon feather-headphones@2x.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header_image" />

      <div className="header_nav">
        <div className="header_homePic header_nav_options">
          <img className="header_homepic_pic" src={homePic} alt="" />
        </div>

        <div className="header_nav_options">
          <a href="">Services</a>
        </div>
        <div className="header_nav_options">
          <a href="">Job Roles</a>
        </div>

        <div className="header_nav_options">
          <a href="">About Us</a>
        </div>

        <div className="header_nav_options">
          <a href="">Contact Us</a>
        </div>

        <div className="header_nav_options">
          <img src={headPhone} alt="" className="header_headphone_pic"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
