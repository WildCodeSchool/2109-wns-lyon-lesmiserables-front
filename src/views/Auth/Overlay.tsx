import React from "react";
import { Navigate, useNavigate } from "react-router";
import img from "../../image.png"


function Overlay(props: any) {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
        <img style={{width:"80%",paddingBottom:"30px"}} src={img}/>
            {/* <h1 style={{fontSize:"50px"}}>MASTERMINE</h1> */}
          <h2>Welcome Back!</h2>
          <p className="overlay-description">
            Vous avez deja un compte ??,
            <br />
            C'est par ici pour vous connecter :).
          </p>
          <button
            className="ghost form-button"
            id="signIn"
            onClick={props.handleClickSignInButton}
          >
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
        <img style={{width:"80%",paddingBottom:"30px"}} src={img}/>
        {/* <h1 style={{fontSize:"50px"}}>MASTERMINE</h1> */}
          <h2>Hello, Friend!</h2>
          <p className="overlay-description">
            Pas de compte ?,
            <br />
            Inscrivez vous pour acceder a l'outil.
          </p>
          <button
            className="ghost form-button"
            id="signUp"
            onClick={props.handleClickSignUpButton}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
