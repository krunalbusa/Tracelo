import React from "react";
import { useState } from "react";
import phone from "../images/phone.png";
import Search from "../images/Search button.png";
import Searchpin from "../images/loaction-pin.png";
import locationpopup1 from "../images/location-popup1.png";

export default function Banner() {
  const [showLocationIcon, setShowLocationIcon] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleButtonClick = () => {
    setShowLocationIcon(true);
    setShowPopup(true);
  };
  
  return (
    /*backgroud phone*/
    <div className="main-banner">
      <div className="img-banner">
        <img className="phone" src={phone} alt="Sign in" />
      </div>

      <div className="search-banner">
        <div className="s-text">
          <h1 className="s-1">Locate Any Phone Anywhere</h1>
          <h6 className="s-2">Enter the Number you want to locate</h6>
        </div>
        <div className="search-bar">
          <input
            className="search"
            type="text"
            placeholder="Enter mobile number"
            name="search"
            id="number"
          />
          <button className="search-1" onClick={handleButtonClick} style={{cursor : "pointer"}}>
            {showLocationIcon && (
              <div className="location-icon">
                <img src={Searchpin} alt="" />
              </div>
            )}
            {showPopup && (
              <div className="popup">
                <div className="popup1"></div>
                <img className="popup2" src={locationpopup1} alt="" />
                <p className="popup-text">
                  The location of the number 010 101 0101 is 88.234502,7.688104
                </p>
              </div>
            )}
            <img src={Search} alt="" />
          </button>
        </div>
        <button className="g-s" style={{cursor : "pointer"}}>Get Started</button>
        <div className="last-text">
          <h5>
            Tracelo let's you get a mobile phone's geo location and works on all
            phone types,networks and countries.
          </h5>{" "}
        </div>
      </div>
    </div>
  );
}
