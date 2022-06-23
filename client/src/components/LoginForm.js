import React, { useState } from "react";
import "./signupform.scss";

function LoginForm({ onLogin, navigate, setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }

  return (
    <div id="sign_up">
      <div id="sign_in_bg">
        <div className="loginbox">
          {/* <img src={logo} className="avatar" /> */}
          <h3 id="sign_in_up_text">Log In</h3>
          <form id="sign_in_form" onSubmit={handleSubmit}>
            <p>Username</p>
            <input
              name="username"
              type="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button variant="fill" color="primary" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </button>
            <p>
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
            <br />
            <em>{errors}</em>
          </form>
        </div>
      </div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <form>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       id="username"
    //       autoComplete="off"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </form>
    //   <form>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       id="password"
    //       autoComplete="current-password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </form>
    //   <form>
    //     <button variant="fill" color="primary" type="submit">
    //       {isLoading ? "Loading..." : "Login"}
    //     </button>
    //   </form>
    //   <form>
    //     {errors.map((err) => (
    //       <error key={err}>{err}</error>
    //     ))}
    //   </form>
    // </form>
  );
}

export default LoginForm;
