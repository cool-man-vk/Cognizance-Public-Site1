import React, { Component } from 'react';
import Rive, { useRive, useStateMachineInput } from 'rive-react';
import './home.css';
import mail from '../Images/Logo/mail.png';
import instagram from '../Images/Logo/instagram.png';
import github from '../Images/Logo/github.png';
import linkedin from '../Images/Logo/linkedin.png';
// import globe from '../Images/globe.png';
import group from '../Images/Illustrations/Club Formation.png';
import mv from '../Images/Illustrations/sp.json';
import goal from '../Images/Illustrations/Goals.png';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import robo from '../Images/Illustrations/RiveRobot.riv';
import { useLottie } from "lottie-react";
import Achievement from '../Achievements/Achievements';

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
    
    const { View } = useLottie(options);
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
        <div className="main-con">



            <div className="row1">
                <div className="cell-1">
                <img className="grp" src={group} />               
                </div>
                <div className="cell-2">
                    <p className='club-hd'>Club Formation</p>
                    <br/>
                    <p className="club-info">
                    Our distinguished institution's illustrious history dates back to its first year, when we had our modest beginnings with a peer learning effort to 
                    assist students who were ignorant of the technical contests and industrial skills competitions that are held on a national and worldwide level. 
                    For them, it was a big step to immediately begin programming and developing.
                    <p/>
                    <br/>
                    <p className="club-info"></p>
                    By encouraging individuals to study and keep up with modern technologies, Dr. A. G. Sreedevi and Mr. Sanjay T launched this modest project,
                    and presently we have more than 100 participations annually. In contrast to the initial batch of cognizance, which consisted of about 10 individuals,
                    there are now more than 250 individuals working in three distinct fields.

                    </p>
                </div>
            </div>
            <div className="row2">
                <div className="cell-3">
                <p className='mis'>Mission</p>
                    <br/>
                    <p className="mis-info">
                    To provide a supportive environment to instill the passion about computer science and to provide needed skills, confidence, and opportunity to change 
                    their world by becoming effective problem-solvers and lifelong learners. 
                    </p>
                    <br/>
                    <p className='vis'>Vision</p>
                    <br/>
                    <p className="vis-info">
                        <ul>
                            <li>
                                To impart high quality professional training with an emphasis on current trends of Computer Science and Technology.
                            </li>
                            <br/>
                            <li>
                                To train students to actively participate in nationally and internationally recognized technical events focused on innovation, diversity and social good.
                            </li>
                            <br/>
                            <li>
                                To impart skills to solve complex technological problem of the modern society and provide them with a framework for promoting collaborative and multidisciplinary lifelong learning.
                            </li>
                            <br/>
                            <li>
                                To organize various technical events and workshops to train the members to work on open-source projects and research activities.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="cell-4">
                   <p className='astro'> {View} </p>
                </div>
                
            </div>
            <div className="row3">
                <div className="cell-5">
                    <img className="go" src={goal} />
                </div>
                <div className="cell-6">
                    <p className='go_obj'>Goals & Objectives</p>
                    <br/>
                    <p className="goal-info">
                    The club is open to all students who have a passion for or interest in coding. This club provides a collaborative learning environment that promotes
                    the self-learning mindset in the members thereby motivating them to actively participating in competitions like Hackathons, Catch the Flag (CTF), 
                    Open-source projects, and internships.
                    </p>
                    <br/>
                    <p className="obj-info">
                    The clubs strives to encourage the habit of extensive learning in the minds of students, organize various technical events and workshops to help 
                    the members of the club to get used to the competitions held at industry-standards. We regularly work on projects focused on social good, thereby 
                    encouraging the members to contribute to open-source projects which in turn provides them wonderful experience in working on such industrial projects.
                    We also assist the members in taking their initial step toward entering challenging events like hackathons and capture the flag (CTF) tournaments.
                    </p>
                </div>
                
            </div>
        </div>
        <Achievement />
        <Footer />
     </>
           
    );
}
 
export default Home;