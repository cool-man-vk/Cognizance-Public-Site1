import React, { Component } from "react";
import "./Achievements.css";
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
import cloudHero from '../Images/Achievements/cloud-hero.jpg';
import psg from '../Images/Achievements/psg.jpeg';
import gsoc from '../Images/Achievements/gsoc.jpeg';
import hackTheGalaxy from '../Images/Achievements/hack-the-galaxy.jpeg';
import mitacs from '../Images/Achievements/mitacs.jpeg';
import deepDive from '../Images/Achievements/deep-dive.jpg';
import volatality from '../Images/Achievements/volatality.jpeg';
import fractal1 from '../Images/Achievements/fractal-1.jpg';
import fractal2 from '../Images/Achievements/fractal-2.jpg';
import fidelity from '../Images/Achievements/fidelity.jpg';
import jpMorgan from '../Images/Achievements/jp-morgan.jpeg';
import upagraha1 from '../Images/Achievements/upagraha-1.jpg';
import upagraha2 from '../Images/Achievements/upagraha-2.jpg';

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
      1320: {
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
                  <img src={cloudHero} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Kavi Kumar</span>
                    <br />
                    Kavi Kumar from 2nd Year CSE has secured 2nd place in the Cloud Hero Hackathon 
                    conducted by Google Cloud at Infosys Chennai. We congratulate him for his future endeavors.
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={psg} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Team Bit'n Bytes</span>
                    <br />
                    We are happy to inform that the team Bits'n Bytes
                    have emerged as the second runners-up and have won a cash prize of Rs.25000.
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={gsoc} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Naresh Kumar</span>
                    <br />
                    Mr. Naresh's Open Source Project Topic and Organization:
                    Organization : INCF
                    Project : Developing a Latex to XML pipeline and exploring a standalone 
                    platform for NBDT Journal.
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={hackTheGalaxy} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to the team</span>
                    <br />
                    The team won under the track "Build the Best Super App" in Hack the Galaxy 2022. 
                    The team proposed an idea to have an auction platform along with a crowdfunding platform such that 
                    the base auction amount of the auction will be directly transfered to the crowdfunding activity . 
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={mitacs} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Sanjay Thiyagarajan</span>
                    <br />
                    He has successfully obtained the prestigious "Mitacs Globalink Research Internship".
                    Sanjay undertook research in the subject of DNA methylation and aging under 
                    the supervision of Professor Hosna Jabbari. His research 
                    primarily focussed on implication of DNA methylation on biological aging and disease progression.
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={deepDive} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to team Bits'n Bytes</span>
                    <br />
                    Congratulations to Team Bits n Bytes for
                    winning Deep Dive hacks organised by MLH .
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={volatality} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Tejendra Saradhi</span>
                    <br />
                    Tejandra Saradhi put in over months of diligent effort on the"Volshell-A CLI tool for 
                    working with memory" project and has significantly improved the 
                    Volshell documentation that will be utilised by many people across the world.
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={fractal1} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Sudiptha</span>
                    <br />
                   
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={fractal2} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Jyothika Nambiar.</span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={fidelity} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Aparna.</span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={jpMorgan} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Mukesh.</span>
                    <br />
                    Mr. MUKESH’s Team chose the problem statement provided by the NGO "Saday Sadev" and was 
                    based on their mental health initiative. It was 'It's Okay Not to Be Okay" which connects 
                    the clients with the mental health professionals forming a one stop solution for all mental health problems. 
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={upagraha1} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Dharshana.</span>
                    <br />
                    We are happy to share that Darshana D of 3rd year CSE has secured first place in the CRTL + ALT + CODE 
                    event of UPAGRAHA'22 and won a cash prize of Rs. 1000 + winners certificate. 
                  </p>
                </div>
              </div>
            </div>
            <div class="Achievement_card">
              <div class="Achievement_card_inner">
                <div class="Achievement_front_face">
                  <img src={upagraha2} alt="" />
                </div>
                <div class="Achievement_back_face">
                  <p>
                    <span class="hil">Congratulations!✨ to Kishore Kumar.</span>
                    <br />
                    We are happy to share that Kishore Kumar AV of 3rd year CSE has secured 1st runner up position in 
                    the CRTL + ALT + CODE event of UPAGRAHA'22 and won a cash prize of Rs. 750 + Runner-up certificate.
                  </p>
                </div>
              </div>
            </div>
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
