import React, { Component } from 'react';
import Rive, { useRive, useStateMachineInput } from 'rive-react';
import './home.css';
import mail from './images/mail.png';
import instagram from './images/instagram.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import globe from './images/globe.png';
import group from './images/grp.png';
import mv from './images/m_v.png';
import goal from './images/l.png';
import {Link} from 'react-router-dom';

function Home() {
    const SM = "State Machine 1";
    const IP = "Click";
  
    const {rive, RiveComponent } = useRive({
      src: "new_file.riv",
      stateMachines: SM,
      autoplay: true,
    });
  
    const onHoverIP = useStateMachineInput(
      rive,
      SM,
      IP
    );
    return( 
            <>
            
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
                    <p className="club-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
                        Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="row2">
                <div className="cell-3">
                <p className='mis'>Mission</p>
                    <p className="mis-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </p>
                    <p className='vis'>Vision</p>
                    <p className="vis-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
                        Lorem Ipsum.
                    </p>
                </div>
                <div className="cell-4">
                    <img className="mv" src={mv} />
                </div>
                
            </div>
            <div className="row3">
                <div className="cell-5">
                    <img className="go" src={goal} />
                </div>
                <div className="cell-6">

                    <p className='goal'>Goals</p>
                    <p className="goal-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                    </p>
                    <p className='obj'>Objectives</p>
                    <p className="obj-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
                        Lorem Ipsum.
                    </p>
                </div>
                
            </div>
        </div>
     </>
           
    );
}
 
export default Home;