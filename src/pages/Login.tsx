import React from "react";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";

import "../styles/pages/login.sass";

const Login = () => {
  return (
    <div id="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Type your e-mail"
          id="email"
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          id="password"
          placeholder="Type your password"
        />
        <a href="#" id="forgot-password">
          Forgot password?
        </a>
        <input type="submit" value="Login"></input>
      </form>
      <div id="social-container">
        <p>Or enter through your social networks</p>
        <AiFillFacebook />
        <AiFillGoogleSquare />
      </div>
      <div id="register-container">
        <p>Not have an account yet?</p>
        <a href="#">Register</a>
      </div>
    </div>
  );
};

export default Login;
