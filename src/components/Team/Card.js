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
      <div className="card">
        <div className="imgbox">
          <img src={prop.src} alt="" />
        </div>
        <div className="content">
          <div class="details">
            <h2>
              {prop.name} <br />
              <span className="description" style={{fontWeight:"700",fontSize: "1rem" }}>
                {prop.post} <br />
                </span>
                <span className="description">
                {prop.dom} <br />
              </span>
            </h2>
            <div className="data">
              <p>{prop.desc}</p>
              <div className="Media_icons">
                <ul>
                  <li className="Icon Gmail">
                    <a href={prop.mail} target="_blank" rel="noreferrer">
                      <SiGmail />
                    </a>
                  </li>
                  <li className="Icon linkedin">
                    <a href={prop.linkedIn} target="_blank" rel="noreferrer">
                      <img src={linkedin} alt="https://www.linkedin.com" />
                    </a>
                  </li>
                  <li className="Icon Github">
                    <a href={prop.gitHub} target="_blank" rel="noreferrer">
                      <img src={github} alt="https://www.github.com" />
                    </a>
                  </li>
                  <li className="Icon Website">
                    <a href={prop.instagram} target="_blank" rel="noreferrer">
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
