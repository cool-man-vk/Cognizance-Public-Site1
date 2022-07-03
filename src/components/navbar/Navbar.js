import React, { Component } from 'react';
import './navbar.css';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() {
        return (  
            <> 
        <div className="navbar">
                <div href="/" className="logo">
                    <img className="Logo" src={logo} alt="Logo" />  
                </div>
                <nav>
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

                <button className="btn btn-01">Apply</button>
                    
                
            </div> 
     </>
           
         );
    }
}
 
export default Navbar;


