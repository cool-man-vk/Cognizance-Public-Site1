import React from "react";
import "./Footer.css";
import logo from "./Images/logo.png";
import mail from './Images/mail.png';
import github from "./Images/github.png";
import linkedin from "./Images/linkedin.png";
import instagram from "./Images/instagram.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <img src={logo} alt="https://www.instagram.com" />
        </div>
        <div className="copyright">copyright © 2022 - <br/>cognizance.amrita</div>
        <div className="SMediaGroup">
            <div className="Smedia1">
                <a href="mailto:contact@cognizance-amrita.in" target="_blank"><img className="mail icon" src={mail} /></a>
            </div>
            <div className="Smedia1">
                <a href="https://www.instagram.com/cognizance.amrita" target="_blank"><img className="instagram icon" src={instagram} /></a>
            </div>
            <div className="Smedia1">
                <a href="https://github.com/cognizance-amrita" target="_blank"><img className="github icon" src={github} /></a>
            </div>
            <div className="Smedia1">
                <a href="https://www.linkedin.com/company/cognizance-amrita/" target="_blank"><img className="linkedin icon" src={linkedin} /></a>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
