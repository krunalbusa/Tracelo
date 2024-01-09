import React from "react";
import Logo from "../images/Logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import people from "../images/Frame (1).png";
import {Link as ScrollLink} from "react-scroll"

export default function AfterloginNavbar() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Profile");
  };

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("English");
  const options = ["English", "Hindi", "Gujarati", "Marathi"];

  return (
    <nav className="nav">
      <div className="Group">
        <NavLink to="/Home" className="nav-div">
          <img src={Logo} alt="React Logo" className="nav-logo" />
        </NavLink>
        <ul className="nav-item">
        <li>
        <ScrollLink to="offers" spy={true} smooth={true} offset={-100} duration={500} style={{cursor : "pointer"}}>Subscribe</ScrollLink>
      </li>
      <li>
        <ScrollLink to="process" spy={true} smooth={true} offset={-100} duration={500} style={{cursor : "pointer"}}>How it works</ScrollLink>
      </li>
      <li>
        <ScrollLink to="whytracelo" spy={true} smooth={true} offset={-100} duration={500} style={{cursor : "pointer"}}>Why Tracelo</ScrollLink>
      </li>
      <li >
        <ScrollLink to="faq-component" spy={true} smooth={true} offset={0} duration={500} style={{cursor : "pointer"}}>F.A.Q</ScrollLink>
      </li>
      <li>
        <ScrollLink to="footer" spy={true} smooth={true} offset={-100} duration={500} style={{cursor : "pointer"}}>Contact</ScrollLink>
      </li>
          <div className="dropdown">
            <div
              className="dropdown-btn"
              onClick={() => setIsActive(!isActive)}
              style={{cursor : "pointer"}}
            >
              {selected}
              <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
              <div className="dropdown-content">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setIsActive(false);
                    }}
                    className="dropdown-item"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={handleButtonClick} style={{cursor : "pointer"}}>
            <img src={people} alt="People Icon" />
            <p>Profile</p>
          </button>
        </ul>
      </div>
    </nav>
  );
}
