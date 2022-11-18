import React from 'react';
import './navbar.css';
import logo from '../Images/Logo/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";

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
                        <a href="/team"> The Team </a>
                    </li>
        
                    {/*<li>*/}
                    {/*    <a href="/#Achievements"> Achievements </a>*/}
                    {/*</li>*/}
        
                    <li>
                        <a href="/gallery"> Gallery </a>
                    </li>

                    <li>
                        <a href="https://preliminary-tasks.cognizance-amrita.in/" target="_blank" rel="noreferrer"> Preliminary Tasks </a>
                    </li>
                    
                    <li>
                        <a href="https://docs.google.com/forms/d/1i_s_uqJnGm5YFVm1juMnZ2F05LxnnPMti-XTq7twSWI"> Apply </a>
                    </li>

                    <button className="nav_btn nav_close" onClick={handleClick}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav_btn nav_bar" onClick={handleClick}>
                    <FaBars />
                </button>
                {/*<div className="apply-B">
                   <a className="B third" href="https://docs.google.com/forms/d/1i_s_uqJnGm5YFVm1juMnZ2F05LxnnPMti-XTq7twSWI" target="_blank" rel="noreferrer">Apply</a>
                </div> */}
                    
                
            </header> 
     </>
           
         );
};
 
export default Navbar;


