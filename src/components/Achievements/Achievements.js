import React, { Component } from 'react';
import './Achievements.css';
import Navbar from '../navbar/Navbar';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BnB from './Images/BnB.png';
import S from './Images/S.png';
import AWS from './Images/AWS.png';
import AM from './Images/AM.png';
import CTF from './Images/CTF.png';
import HTB from './Images/HTB.png';
import MC from './Images/MC.png';
import OH from './Images/OH.png';
import WC from './Images/WC.png';
import M from './Images/M.png';
import HackArmr from './Images/HackArmr.png';
import CYSCL from './Images/CYSCL.png';
import Uda from './Images/Uda.png';
import Dmcn from './Images/Dmcn.png';
import winja from './Images/winja.png';
import GC from './Images/GC.png';
import YU from './Images/YU.png';
import UAWS from './Images/UAWS.png';
import TC from './Images/TC.png';
import IN from './Images/IN.png';

class Achievements extends Component {
    render() {
        return (
            <>
                <div className="AchievementsContainer">
                    <OwlCarousel className='owl-theme' loop={true} margin={9}>
                        <div class='item A1'>
                            <img className="BnB" src={BnB} />
                            <div className="A1Text">
                                <p><span>Congratulations 🎊</span> to Team Bits' n Bytes for winning the Caterpillar Code-a-thon! All the teams received four potential issue statements, and Team Bits' n Bytes selected Fleet Management System as their problem statement and won 🎓.
                                    We would like to express our gratitude to the team mentor Dr. Aasha Nandhini, for her unwavering support and guidance during the Code-a-thon.</p>
                            </div>
                        </div>
                        <div className='item A1'>
                            <img className="S" src={S}/>
                            <div className="A1Text">
                                <p><span>Congratulations!✨</span>Our club president Mr. Sanjay T (CSE 4th Year) was among the top 15 in a commercial CMS/CRM contest organised by HubSpot.
                                    <br /> <br />
                                    The project: AgroAssist.<br />
                                    AgroAssist is a deep learning based crop disease classifier deployed on the cloud with Heroku powered with ONNX and PyTorch.
                                    The project is made exclusively for diseases of Apple trees.</p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="CTF" src={CTF}/>
                            <div className="A1Text">
                                <p><span>Congratulations 💫 to the team</span> <br/>A heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for your great support and guidance</p>
                            </div>
                        </div>
                        {/*<div className='item A4'>*/}
                        {/*    <img className="OH" src={OH}/>*/}
                        {/*    <div className="A1Text">*/}
                        {/*        <p><span>Congratulations 💫 to the team</span> <br/>A heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for your great support and guidance</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='item A2'>
                            <img className="CTF" src={WC}/>
                            <div className="A1Text">
                                <p><span>Congratulations 💫 to the team</span> <br/>A heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for your great support and guidance</p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="CTF" src={HTB}/>
                            <div className="A1Text">
                                <p><span>Congratulations 💫 to the team</span> <br/>A heartfelt thanks to Dr. A.G.Sreedevi (Club's Advisor) for your great support and guidance</p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="M" src={M}/>
                            <div className="A1Text">
                                <p><span>Heartiest Congratulations to Manasa (CSE 4th Year) </span> <br/>for securing the Education Outreach scholarship by GirlScript Foundation 💫</p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="AWS" src={AWS}/>
                            <div className="A1Text">
                                <p><span>Congratulations 💫 to the team</span> <br/>Project : Genie
                                    A Deep learning powered image credibility checker</p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="AM" src={AM}/>
                            <div className="A1Text">
                                <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="AM" src={HackArmr}/>
                            <div className="A1Text">
                                <p><span>Heartiest Congratulations to Tejendra Saradhi (III yr CYS) For Getting 1st Position in hackARMOur CTF</span></p>
                            </div>
                        </div>
                        {/*<div className='item A2'>*/}
                        {/*    <img className="AM" src={CYSCL}/>*/}
                        {/*    <div className="A1Text">*/}
                        {/*        <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className='item A2'>*/}
                        {/*    <img className="AM" src={Dmcn}/>*/}
                        {/*    <div className="A1Text">*/}
                        {/*        <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className='item A2'>*/}
                        {/*    <img className="AM" src={Uda}/>*/}
                        {/*    <div className="A1Text">*/}
                        {/*        <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='item A2'>
                            <img className="WI" src={winja}/>
                            <div className="A1Text">
                                <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="TC" src={TC}/>
                            <div className="A1Text">
                                <p>Congratulations to Cyber0ids For Securing 40th Pos in TamilCTF, The Team Members are:
                                    <br/> Dhanvinesh K (III yr CYS) <br/> Aghilan A (III yr ECE) <br/> Sanjai Siddharthan (IV yr CSE) <br/> Shraddha Chopra (III yr CYS) <br/> Jyothika Nambiar (III yr CYS)
                                </p>
                            </div>
                        </div>
                        <div className='item A2'>
                            <img className="AM" src={UAWS}/>
                            <div className="A1Text">
                                <p>Heartiest Congratulations to ✨ <br/> Naresh Kumar B (IV yr CSE) <br/> Sanjay T (IV yr CSE) <br/> Aparna J (III yr CSE)</p>
                            </div>
                        </div>
                        {/*<div className='item A2'>*/}
                        {/*    <img className="AM" src={YU}/>*/}
                        {/*    <div className="A1Text">*/}
                        {/*        <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='item A2'>
                            <img className="GC" src={GC}/>
                            <div className="A1Text">
                                <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>
                            </div>
                        </div>
                        {/*<div className='item A2'>*/}
                        {/*    <img className="AM" src={IN}/>*/}
                        {/*    <div className="A1Text">*/}
                        {/*        <p><span>Heartiest Congratulations to Aniket Mishra (CYS 2nd Year)</span> recipient of Summer Research Internship at IIT Delhi 🎓</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </OwlCarousel>
                </div>
            </>

        );
    }
}

export default Achievements;


