import React, { Component } from 'react';
import './home.css';
import mail from './images/mail.png';
import instagram from './images/instagram.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import globe from './images/globe.png';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {  }
    
    render() {
        return (  
            <>
        <div className="row">
            <div className="column1">
                <p className="club-name">COGNIZANCE</p>
                <p className="tagline">A student club for innovative minds</p>
            </div>
            <div className="column2">
                <img className="globe" src={globe} />
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
     </>
           
         );
    }
}
 
export default Home;


