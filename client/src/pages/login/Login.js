import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import Divider from "@mui/material/Divider";

function Login({ onLogin, navigate }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <wrapper>
      <p>Kipit</p>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} navigate={navigate} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} navigate={navigate} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </wrapper>
  );
}

export default Login;
