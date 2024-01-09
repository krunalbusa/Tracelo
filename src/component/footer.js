import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../images/Logo.png'
import {Link as ScrollLink} from "react-scroll"


export default function Footer(){
    return(
        <div className="footer-main" id="footer">
            <div className="footer-logo">
            <NavLink to="/Home" className="nav-div" >
            <ScrollLink to="offers" spy={true} smooth={true} offset={-1000} duration={500} style={{cursor : "pointer"}}>
          <img src={Logo} alt="React Logo" className="nav-logo"  /></ScrollLink>
        </NavLink></div>
            <div className="footer-logo-text"><p>Tracelo let's you get a mobile phone's geo location and works on all phone types, networks and countries.</p></div>
            <div class="footer-header1"><p>Legal info:</p></div>
            <ul className="footer-header1-sections"> 
            <li>
            <ScrollLink to="process" spy={true} smooth={true} offset={-100} duration={500} style={{ cursor: "pointer" }}>How it works</ScrollLink>
          </li>
                <li> <ScrollLink
                to="offers"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Pricing
              </ScrollLink></li>
                <li><ScrollLink
                to="footer"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Contact
              </ScrollLink></li>
                <li>
                <ScrollLink
                to="faq-component"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                FAQ
              </ScrollLink></li>
            </ul>
            <div class="footer-header2"><p>Account:</p></div>
            <ul className="footer-header2-sections"> 
                <li><a href="/Login">Login</a></li>
                <li><a href="/Signup">Sign up</a></li>
                <li><a href="/#">Unsubscribe</a></li>             
            </ul>            
            <hr></hr>
            <div class="footer-footer-text"><p>Tracelo - 2023</p></div>
            <ul className="footer-footer-sections"> 
                <li><a href="/#">Cookies Policy</a></li>
                <li> | </li>
                <li><a href="/#">Privacy Policy</a></li>
                <li> | </li>
                <li><a href="/#">Terms and Conditions </a></li>
                
            </ul>
        </div>
    )
    
}