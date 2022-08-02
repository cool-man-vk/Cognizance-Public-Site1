import React from "react";
import "./Footer.css";
import fmail from '../Images/Logo/mail.png';
import fgithub from "../Images/Logo/github.png";
import flinkedin from "../Images/Logo/linkedin.png";
import finstagram from "../Images/Logo/instagram.png";
const Footer = () => {
  return (
    <>
      <footer>
        {/* <div className="logo">
          <img src={logo} alt="https://www.instagram.com" />
        </div> */}

        <div className="FMediaGroup">
          <div className="Fmedia1">
            <a href="mailto:contact@cognizance-amrita.in" target="_blank">
              <img className="fmail icon" src={fmail} />
            </a>
          </div>
          <div className="Fmedia1">
            <a
              href="https://www.instagram.com/cognizance.amrita"
              target="_blank"
            >
              <img className="finstagram icon" src={finstagram} />
            </a>
          </div>
          <div className="Fmedia1">
            <a href="https://github.com/cognizance-amrita" target="_blank">
              <img className="fgithub icon" src={fgithub} />
            </a>
          </div>
          <div className="Fmedia1">
            <a
              href="https://www.linkedin.com/company/cognizance-amrita/"
              target="_blank"
            >
              <img className="flinkedin icon" src={flinkedin} />
            </a>
          </div>
        </div>
        <div className="copyright">copyright © 2022 - cognizance.amrita</div>
      </footer>
    </>
  );
};

export default Footer;
