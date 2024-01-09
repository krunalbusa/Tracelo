import React, { useState } from "react";
import logo from "../images/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const history = useNavigate();
  const [Fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [Confpass, setConfpassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Signup", {
        Fullname,
        username,
        email,
        password,
        mobileno,
        Confpass 
      });

      if (response.data === "exist") {
        alert("User already exists");
      }
      
      else if (response.data === "passwrong") {
        alert("please enter confpass as same as pass")
      }
      else if (response.data === "needdetails") {
        alert("enter all the detailes")
      }
      else if (response.data === "q") {
        alert("juthi details")
      }
      else if (response.data === "ok") {
        history("/Login");
      }
      
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Wrong details");
    }
    
  };

  return (
    <div className="Login-page">
      <div>
        <h1 className="Signup-title">Registration</h1>
        <form className="Form">
          <input
            className="Signup-text-box1"
            type="text"
            placeholder="Fullname"
            value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <hr className="Signup-Mid-Line" />
          <br />
          <input
            className="Signup-text-box4"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="Signup-text-box5"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="Signup-text-box2"
            type="tel"
            placeholder="Mobile no."
            value={mobileno}
            onChange={(e) => setmobileno(e.target.value)}
            required
          />
          <input
            className="Signup-text-box3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="Signup-text-box6 "
            type="password"
            placeholder="Confirm password"
            value={Confpass}
            onChange={(e) => setConfpassword(e.target.value)}
            required
          />
          <br />
          <button className="Signup-btn" type="submit" onClick={submit} style={{cursor : "pointer"}}>
            <p>Sign up</p>
          </button>
        </form>
      </div>
      <div>
        <img src={logo} alt="" className="Login-logo" />
        <ul className="Log-In">
          <li>
            <NavLink to="/Login">Sign-In</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Signup;
