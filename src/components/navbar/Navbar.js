import React, { useState } from 'react';
import './navbar.css';
import logo from './images/logo.png';
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
                <div href="/" className="logo">
                    <img className="Logo" src={logo} alt="Logo" />  
                </div>
                <nav ref={navRef}>
                    <li> 
                        <a href=""> Home </a>
                    </li>
        
                    <li>
                        <a href=""> The Team </a>
                    </li>
        
                    <li>
                        <a href=""> Achievements </a>
                    </li>
        
                    <li>
                        <a href=""> Blogs </a>
                    </li>
                    
                    <button className="nav_btn nav_close" onClick={handleClick}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav_btn nav_bar" onClick={handleClick}>
                    <FaBars />
                </button>
                <div className="apply-btn">
                    <button className="btn btn-01">Apply</button>
                </div>
                    
                
            </header> 
     </>
           
         );
};
 
export default Navbar;


