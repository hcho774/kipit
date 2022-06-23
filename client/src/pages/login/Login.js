import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import Divider from "@mui/material/Divider";

function Login({ onLogin, navigate }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <wrapper>
      {showLogin ? (
        <>
          <LoginForm
            onLogin={onLogin}
            navigate={navigate}
            setShowLogin={setShowLogin}
          />
          <Divider />
        </>
      ) : (
        <>
          <SignUpForm
            onLogin={onLogin}
            navigate={navigate}
            setShowLogin={setShowLogin}
          />
          <Divider />
        </>
      )}
    </wrapper>
  );
}

export default Login;
