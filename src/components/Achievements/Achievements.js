import React, { Component } from "react";
import "./Achievements.css";
import Navbar from "../navbar/Navbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BnB from "../Images/Achievements/BnB.png";
import S from "../Images/Achievements/S.png";
import AWS from "../Images/Achievements/AWS.png";
import AM from "../Images/Achievements/AM.png";
import CTF from "../Images/Achievements/CTF.png";
import HTB from "../Images/Achievements/HTB.png";
import MC from "../Images/Achievements/MC.png";
import OH from "../Images/Achievements/OH.png";
import WC from "../Images/Achievements/WC.png";
import M from "../Images/Achievements/M.png";
import HackArmr from "../Images/Achievements/HackArmr.png";
import CYSCL from "../Images/Achievements/CYSCL.png";
import Uda from "../Images/Achievements/Uda.png";
import Dmcn from "../Images/Achievements/Dmcn.png";
// import winja from "../Images/Achievements/winja.png";
import GC from "../Images/Achievements/GC.png";
import YU from "../Images/Achievements/YU.png";
import UAWS from "../Images/Achievements/UAWS.png";
import TC from "../Images/Achievements/TC.png";
import IN from "../Images/Achievements/IN.png";

class Achievements extends Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1
      },
      660: {
        items: 2
      },
      990: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };

  render() {
    return (
      <>
        <div className="AchievementsContainer">
          <h2 className="titleac">ACHIEVEMENTS</h2>
          <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={9}
            responsive={this.state.responsive}
          >
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={AWS} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to the team</span>
                    <br />
                    Project : Genie
                    A Deep learning powered image credibility checker
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={AM} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">
                      Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)
                    </span>
                    recipient of Summer Research Internship at IIT Delhi 🎓
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={BnB} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations 🎊</span> to Team Bits' n Bytes for winning the Caterpillar Code-a-thon! All the teams received four potential issue statements, and Team Bits' n Bytes selected Fleet Management System as their problem statement and won 🎓.
                    We would like to express our gratitude to the team mentor Dr. Aasha Nandhini, for her unwavering support and guidance during the Code-a-thon.
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={CTF} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations 💫 to the team</span> <br />A
                    heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for
                    your great support and guidance
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={CYSCL} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations 💫 to the team</span> <br />A
                    heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for
                    your great support and guidance
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={Dmcn} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations 💫 to the team</span> <br />A
                    heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for
                    your great support and guidance
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={GC} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    Heartiest Congratulations to ✨ Tejendra Saradhi (II yr
                    CYS), Shraddha Chopra (II yr CYS), Venkatakrishnan (II yr
                    CSE-AI), Sanjai Siddharthan (III yr CSE)
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={HackArmr} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">
                      Heartiest Congratulations to Tejendra Saradhi (III yr CYS)
                      For Getting 1st Position in hackARMOur CTF
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={HTB} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations 💫 to the team</span> <br />A
                    heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for
                    your great support and guidance
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={IN} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations 💫 to the team</span> <br /> TechKrafters
                    Who Won The 1st Position in the Hackathon.The Team Consists of
                    Abhinandhan S(III yr CSE), Aparna J(III yr CSE), Shandilyathithyaa Ma(III yr CSE), Yurekan(III yr CSE)
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={M} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Heartiest Congratulations to Manasa (CSE 4th Year) </span> <br/>for securing the Education Outreach scholarship by GirlScript Foundation 💫
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={MC} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨</span>
                    <br />
                    Mr. Mukesh K. of Third Year B.Tech CSE(Artificial Intelligence)
                    has emerged as the winner in the Call for Good Hackathon by
                    JP Morgan & Chase (May -July 2022).
                    The selected candidates Through The Coding Competition & Interview
                    were invited to the hackathon
                    which consists of a total of 114 teams this year from India.
                    Mr. MUKESH and Team chose the problem statement
                    provided by the NGO “Saday Sadev”.
                    {/*The team came up with a website*/}
                    {/*where the underprivileged*/}
                    {/*people could connect with a mental health professional,*/}
                    {/*book a video appointment, see appointments*/}
                    {/*on calendar, listen to podcasts*/}
                    {/*& playlists and buy mental health care*/}
                    {/*products with support for over 12+ regional languages.*/}
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={OH} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨</span>
                    <br />
                    To The OctoHacks Winners

                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={S} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨</span>Our club president Mr. Sanjay
                    T (CSE 4th Year) was among the top 15 in a commercial
                    CMS/CRM contest organised by HubSpot.
                    <br /> <br />
                    The project: AgroAssist.
                    <br />
                    AgroAssist is a deep learning based crop disease classifier
                    deployed on the cloud with Heroku powered with ONNX and
                    PyTorch. The project is made exclusively for diseases of
                    Apple trees.
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={TC} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span className="hil">Congratulations!✨</span>
                    <br/> to Cyber0ids For Securing 40th Pos in
                    TamilCTF, The Team Members are:
                    <br /> Dhanvinesh K (III yr CYS) <br /> Aghilan A (III yr
                    ECE) <br /> Sanjai Siddharthan (IV yr CSE) <br /> Shraddha
                    Chopra (III yr CYS) <br /> Jyothika Nambiar (III yr CYS)
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={UAWS} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <center>
                      <span className="hil">Congratulations!✨</span>
                      <br/> To
                      <br /> Naresh Kumar B (IV yr CSE)
                      <br /> Sanjay T (IV yr CSE)
                      <br /> Aparna J (III yr CSE)
                    </center>
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={Uda} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨</span>
                    <br />
                     For Getting The Udacity-Bertelsmann Scholarship
                    <br /> <br />
                    Naresh Kumar B (III yr CSE)


                    <br />

                    Sanjay T (III yr CSE)
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={WC} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations 💫 to the team</span> <br />A
                    heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for
                    your great support and guidance
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={YU} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to the Runner ups!</span>
                    <br />
                    Sanjay T (IV yr CSE)
                    <br />
                    Jayanth Vikash S (IV yr CSE)

                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default Achievements;
