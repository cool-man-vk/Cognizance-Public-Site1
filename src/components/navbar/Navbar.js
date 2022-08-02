import React, { useState } from 'react';
import './navbar.css';
import logo from '../Images/Logo/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const navRef = React.useRef();
  
    const handleClick = () => {
      navRef.current.classList.toggle("nav_open");
    };
    
    return(  
            <> 
        <header>
                <div href="/" className="clogo">
                    <img className="Logo" src={logo} alt="Logo" />  
                </div>
                <nav ref={navRef}>
                    <li> 
                        <a href="/"> Home </a>
                    </li>
        
                    <li>
                        <a href="/Team"> The Team </a>
                    </li>
        
                    <li>
                        <a href="/Achievements"> Achievements </a>
                    </li>
        
                    <li>
                        <a href=""> Gallery </a>
                    </li>
                    
                    <button className="nav_btn nav_close" onClick={handleClick}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav_btn nav_bar" onClick={handleClick}>
                    <FaBars />
                </button>
                <div className="apply-B">
                    <a className="B third" href="https://forms.gle/R6tD43pkSjMKpzPk7" target="_blank">Apply</a>
                </div>
                    
                
            </header> 
     </>
           
         );
};
 
export default Navbar;


