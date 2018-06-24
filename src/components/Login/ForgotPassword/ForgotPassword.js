import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../shared/images/logo.png";

const forgotPassword = () => (
  <main className="login-page forgot-password">
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="" title="" />
      </Link>
      <h1 className="title">Forgot Password</h1>
      <span className="subtitle">
        Please enter your email address below and we'll send you a link to
        create a new password
      </span>
    </div>
    <div className="form-container">
      <form action="#" method="POST">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <button type="submit" className="btn btn-login btn-block">
          Send
        </button>
      </form>
    </div>
  </main>
);

export default forgotPassword;
