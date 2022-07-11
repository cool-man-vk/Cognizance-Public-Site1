import React, { useState } from 'react';
import './navbar.css';
import logo from './images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi"; 
import {Link} from 'react-router-dom';

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(  
            <> 
        <div className="navbar">
                <div href="/" className="logo">
                    <img className="Logo" src={logo} alt="Logo" />  
                </div>
                <nav className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a href="/" className="nav-links">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">
                                The Team
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">
                                Achievements
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-links">
                                Blogs
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger-menu">
                    <a href="/#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu/>
                    </a>
                </div>
                <div className="apply-btn">
                    <button className="btn btn-01">Apply</button>
                </div>
                    
                
            </div> 
     </>
           
         );
}
 
export default Navbar;


