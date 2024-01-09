import React, { useState } from "react";
import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import GoogleLoginButton from "../component/googlelogin.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          username,
          password
        })
        .then((res) => {  
          if (res.data === "exist") {
            history("/Afterlogin",{state:{id:username}});
          }
          else if (res.data === "invalid") {
            alert("invalid details");
          }
          else if (res.data === "enterdetails") {
            alert("required both");
          }
           else if (res.data === "notexist") {
            alert("user have to sign up first");
          }
        })
        .catch((e) => {
          alert("wrong detailes");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Login-page">
      <div>
        <GoogleLoginButton className="Google" />
        <h1 className="Login-title">Sign-In</h1>
        <form className="Form">
          <input
            className="zmid zmid-account Login-text-box1"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id=""
          />
          <hr className="Login-Mid-Line"></hr>
          <br />
          <input
            className="Login-text-box2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id=""
          />

          <br />
          <button className="Login-btn" type="submit" onClick={submit} style={{cursor : "pointer"}}>
            <p>Login</p>
          </button>
        </form>
      </div>
      <div>
        <img src={logo} alt="" className="Signup-logo" />
        <ul className="Sign-up">
          <li>
            <NavLink to="/Signup">New Registration/Sign-Up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
