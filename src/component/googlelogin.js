import React from "react";
import { GoogleLogin } from "react-google-login";
import google from "../images/google.png"

function GoogleLoginButton() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
    
    clientId="YOUR_CLIENT_ID"    
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    render={(renderProps) => (
      <button className="Google" onClick={renderProps.onClick} disabled={renderProps.disabled} style={{cursor:"pointer"}}>
        <img src={google} alt="Google Logo" />
      </button>
    )}
    />
  );
}

export default GoogleLoginButton;
