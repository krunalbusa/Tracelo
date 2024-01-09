import React from "react";
import Logo from "../images/Logo.png";
import { useState } from "react";
import people from "../images/Frame (1).png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Login");
  };
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("English");
  const options = ["English", "Hindi", "Gujarati", "Marathi"];

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsActive(false);
  };

  return (
    <nav className="nav">
      <div className="Group">
        <NavLink to="/Home" className="nav-div">
          <img src={Logo} alt="React Logo" className="nav-logo" />
        </NavLink>
        <ul className="nav-item">
          <li>
            <ScrollLink
              to="offers"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Subscribe
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="process"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              How it works
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="whytracelo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Why Tracelo
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="faq-component"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              F.A.Q
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Contact
            </ScrollLink>
          </li>
          <div className={`dropdown ${isActive ? "open" : ""}`}>
            <div
              className="dropdown-btn"
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            >
              {selected}
              <FontAwesomeIcon
                icon={isActive ? faCaretUp : faCaretDown}
                className="dropdown-icon"
              />
            </div>
            {isActive && (
              <div className="dropdown-content">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="dropdown-item"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={handleButtonClick} style={{ cursor: "pointer" }}>
            <img src={people} alt="People Icon" />
            <p>Login</p>
          </button>
        </ul>
      </div>
    </nav>
  );
}
