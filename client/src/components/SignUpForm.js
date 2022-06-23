import React, { useState } from "react";
// import { FormControl } from "@mui/material";
// import { Input } from "@mui/material";
// import { InputLabel } from "@mui/material";
// import { Button } from "@mui/material";
import "./signupform.scss";

function SignUpForm({ onLogin, setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(username, password);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          console.log(user);
          setShowLogin(true);
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
      <div id="sign_up_bg">
        <div className="loginbox">
          {/* <img src= className="avatar" /> */}
          <h3 id="sign_in_up_text">Please Sign Up!</h3>
          <form id="sign_up_form" onSubmit={handleSubmit}>
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
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <p>
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
            <br />
            <em>{errors}</em>
          </form>
        </div>
      </div>
    </div>

    // <form onSubmit={handleSubmit}>
    //   <FormControl>
    //     <InputLabel htmlFor="username">Username</InputLabel>
    //     <Input
    //       type="text"
    //       id="username"
    //       autoComplete="off"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </FormControl>
    //   <FormControl>
    //     <InputLabel htmlFor="password">Password</InputLabel>
    //     <Input
    //       type="password"
    //       id="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       autoComplete="current-password"
    //     />
    //   </FormControl>

    //   <FormControl>
    //     <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
    //   </FormControl>
    /* <FormControl>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </FormControl> */
    // </form>
  );
}

export default SignUpForm;
