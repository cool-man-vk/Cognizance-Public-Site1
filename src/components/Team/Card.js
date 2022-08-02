import React from "react";
import "./Card.css";

// Importing Social ICONS
import { SiGmail } from "react-icons/si";
import github from "../Images/Logo/github.png";
import linkedin from "../Images/Logo/linkedin.png";
import instagram from "../Images/Logo/instagram.png";

const Card = (prop) => {
  return (
    <>
      <div class="card">
        <div class="imgbox">
          <img src={prop.src} alt="" />
        </div>
        <div class="content">
          <div class="details">
            <h2>
              {prop.name} <br />
              <span>
                {prop.post} <br />
              </span>
            </h2>
            <div class="data">
              <p>{prop.desc}</p>
              <div class="Media_icons">
                <ul>
                  <li class="icon Gmail">
                    <a href="mailto:{prop.mail}" target="_blank">
                      <SiGmail />
                    </a>
                  </li>
                  <li class="icon linkedin">
                    <a href={prop.linkedIn} target="_blank">
                      <img src={linkedin} alt="https://www.linkedin.com" />
                    </a>
                  </li>
                  <li class="icon Github">
                    <a href={prop.gitHub} target="_blank">
                      <img src={github} alt="https://www.github.com" />
                    </a>
                  </li>
                  <li class="icon Website">
                    <a href={prop.instagram} target="_blank">
                      <img src={instagram} alt="https://www.instagram.com" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
