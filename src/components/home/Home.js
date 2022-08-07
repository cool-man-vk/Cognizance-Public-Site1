import React from 'react';
import { useRive, useStateMachineInput } from 'rive-react';
import './home.css';
import mail from '../Images/Logo/mail.png';
import instagram from '../Images/Logo/instagram.png';
import github from '../Images/Logo/github.png';
import linkedin from '../Images/Logo/linkedin.png';
import mv from '../Images/Illustrations/sp.json';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import robo from '../Images/Illustrations/RiveRobot.riv';
import { useLottie } from "lottie-react";
import Achievement from '../Achievements/Achievements';
import {AiFillPushpin} from 'react-icons/ai';
import {BsChatQuoteFill} from 'react-icons/bs';
import {GoBeaker} from 'react-icons/go';
import {GoTools } from 'react-icons/go';
import OS from '../Images/Illustrations/OS.png';
import CYS from '../Images/Illustrations/CYS.jpg';
import ML from '../Images/Illustrations/ML.jpg';

function Home() {
    const SM = "State Machine 1";
    const IP = "Click";
  
    const {rive, RiveComponent } = useRive({
      src: robo,
      stateMachines: SM,
      autoplay: true,
    });
  
    const onHoverIP = useStateMachineInput(
      rive,
      SM,
      IP
    );

    const options = {
        animationData: mv,
        loop: true,
      };
    
    useLottie(options);
    return( 
            <>
            <Navbar />
        <div className="row">
            <div className="column1">
                <p className="club-name">COGNIZANCE</p>
                <p className="tagline">A student club for innovative minds</p>
            </div>
            <div className="column2">
            <RiveComponent className='ani' onMouseOver={() => onHoverIP.fire()}/> 
            </div>
        </div>

        <div className="SMediaGroup">
            <div className="Smedia1">
                <a href="mailto:contact@cognizance-amrita.in" target="_blank" rel="noreferrer"><img className="mail icon" src={mail} alt=""/></a>
            </div>
            <div className="Smedia1">
                <a href="https://www.instagram.com/cognizance.amrita" target="_blank" rel="noreferrer"><img className="instagram icon" src={instagram} alt=""/></a>
            </div>
            <div className="Smedia1">
                <a href="https://github.com/cognizance-amrita" target="_blank" rel="noreferrer"><img className="github icon" src={github} alt=""/></a>
            </div>
            <div className="Smedia1">
                <a href="https://www.linkedin.com/company/cognizance-amrita/" target="_blank" rel="noreferrer"><img className="linkedin icon" src={linkedin} alt=""/></a>
            </div>
        </div>

        <div className="main-con">
            <div className="row3">
                <div class="go_obj">
                    <div class="go_obj-info">
                        <h1 class="btitle"># About Cognizance</h1>
                        <p class="blog-text">
                            We are a community of passionate students from Amrita Vishwa Vidyapeetham. Cognizance is for everyone, regardless of their career stage or current level of knowledge. Cognizance is a place where people of all genders and backgrounds can come together. We believe that learning is more enjoyable and efficient when we assist one another along the way.
                        </p>
                        <br/>

                    </div>

                </div>
            </div>

            <div className="totmem">
                <p>The club has about 200+ passionate members currently </p>
            </div>

            <div className="row3">
                <div className="whyC">
                    <div className="go_obj-info">
                        <h1 className="btitle">Why Cognizance?</h1>
                        <div className="rowt">
                            <div className="column">
                                <div className="card1">
                                    <div className="info">
                                        <h5 className="infotxt">Bring your concepts to life</h5>
                                        <GoBeaker className="bsbell"/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card1">
                                    <div className="info">
                                        <h5 className="infotxt">Experienced Mentors</h5>
                                        <GoTools className="bsbell"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rowt">
                            <div className="column">
                                <div className="card1">
                                    <div className="info">
                                        <h5 className="infotxt">+ve impact on your career</h5>
                                        <AiFillPushpin className="bsbell"/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card1">
                                    <div className="info">
                                        <h5 className="infotxt">Peer to Peer mentoring</h5>
                                        <BsChatQuoteFill className="bsbell"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row3">
                <div className="Dom">
                    <div className="go_obj-info">
                        <h1 className="title">Domains We Have</h1>
                        <div className="rowt">
                            <div className="column5">
                                <div className="card2">
                                    <div className="info">
                                        <div className="row4">
                                            <div className="column">
                                                <img src={OS} className="OS" alt=""/>
                                            </div>
                                            <div className="column">
                                                <h5 className="infotxt">Open Source</h5>
                                                <p className="infot">The ideals of open exchange,
                                                    collaborative involvement, quick prototyping, transparency ,
                                                    and community-oriented development are all embraced and
                                                    celebrated by open source projects, products, and initiatives.
                                                    A fullstack development relates to the creation of a web
                                                    application's front end and back end .
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column5">
                                <div className="card2">
                                    <div className="info">
                                        <div className="row4">
                                            <div className="column">
                                                <h5 className="infotxt">Cyber Security</h5>
                                                <p className="infot">The practise of defending computers,
                                                    servers, mobile devices, electronic systems, networks,
                                                    and data from malicious attacks . It is also referred
                                                    to as information technology security or electronic
                                                    data security.
                                                </p>
                                            </div>
                                            <div className="column">
                                                <img src={CYS} className="OS" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column5">
                                <div className="card2">
                                    <div className="info">
                                        <div className="row4">
                                            <div className="column">
                                                <img src={ML} className="OS" alt=""/>
                                            </div>
                                            <div className="column">
                                                <h5 className="infotxt">Artificial Intelligence</h5>
                                                <p className="infot">Artificial intelligence is the study and development of computers and robots capable of mimicking and exceeding human capabilities. Machine learning is a AI subcategory employs algorithms to automatically learn insights and recognise patterns in data, with the goal of making increasingly better decisions.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <Achievement />
        <Footer />
     </>
           
    );
}
 
export default Home;