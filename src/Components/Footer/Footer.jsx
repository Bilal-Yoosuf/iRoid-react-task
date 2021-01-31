import React from "react";
import "./footer.css";
import footerImg from "./Group 648.png";
import fblogo from "./fb_logo.png";
import instalogo from "./instagram-512.png";
import twitter from "./twitter_circle-512.png";
import linkedin from "./social-linkedin-circle-512.png";
import arrow from "./arrow.png";
import mrlogo from "./Group 726.png";
import footerlogo from "./Image 4.png";
import weblogo from "./weblogo.png";
import globe from './globe.png';
import phone from './phone-call.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <p className="footer_top_intro">
          We are determined to be a global job player by aligning our groeth to
          the needs of industry of job-ready work force. We put the jobless to
          Work.
        </p>
        <img src={footerImg} alt="" className="footerimage" />
      </div>
      <div className="footer_bottom">
        <div className="footerbottom_container">
          <div class="footerbottom_left">
            <img src={footerlogo} alt="" className="footerlogo" />
            <p>
              33/725 A,Rak Towers,Near Mother Opticals,NH 544-Aluva <br></br>
              Road,Edapally Kochi-682024
            </p>

            <p>
              <span>
                <img src={weblogo} alt="" className="smalllogo" />
              </span>
              info@thejobabank.in
            </p>
            <p>
              <span>
                <img src={phone} alt="" className="smalllogo" />
              </span>
              0484-406922
            </p>
            <p>
              <span>
                <img src={globe} alt="" className="smalllogo" />
              </span>
              www.thejobabank.in
            </p>
          </div>
          <div class="center_bottom">
            <ul>
              <p>
                <b>Useful Links</b>
              </p>
              <li>
                <i>
                  <img src={arrow} alt="" />
                </i>
                Home
              </li>
              <li>
                <i>
                  <img src={arrow} alt="" />
                </i>
                Services
              </li>
              <li>
                <i>
                  <img src={arrow} alt="" />
                </i>
                Job Roles
              </li>
              <li>
                <i>
                  <img src={arrow} alt="" />
                </i>
                About Us
              </li>
              <li>
                <i>
                  <img src={arrow} alt="" />
                </i>
                Contact Us
              </li>
            </ul>
          </div>
          <div class="footerbottom_right">
            <img src={mrlogo} alt="" className="mrlogo" />

            <div>
              <img class="social_media fb" src={fblogo} alt="" />
              <img class="social_media twitter" src={twitter} alt="" />
              <img class="social_media linkedn" src={linkedin} alt="" />
              <img class="social_media insta" src={instalogo} alt="" />
            </div>
          </div>
        </div>
        <footer>
          <p>&copy;&nbsp;Copyright 2019 The Job Bank</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
