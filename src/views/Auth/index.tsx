import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import SignIn from "./Login";
import Overlay from "./Overlay";
import SignUp from "./Register";

interface State {
  rightPanelActive: boolean;
}
function Auth() {
  const [rightPanelActive, setRightPanelActive] = useState<any>(false);
  const navigate = useNavigate();
  const handleClickSignUpButton = () => {
    setRightPanelActive(true);
  };

  const handleClickSignInButton = () => {
    setRightPanelActive(false);
  };
  console.log(rightPanelActive);

  return (
      <>

      <div
        className={`container ${rightPanelActive ? `right-panel-active` : ``}`}
        id="container"
      >
          

        <SignUp />
        <SignIn />
        {/* <Routes>
          <Route path="/login" element={<SignUp />} />
          <Route path="/register" element={<SignIn />} />
        </Routes> */}
        <Overlay
          handleClickSignInButton={handleClickSignInButton}
          handleClickSignUpButton={handleClickSignUpButton}
        />
    </div>
    </>
  );
}

export default Auth;
