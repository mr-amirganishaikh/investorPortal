import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../shared/images/logo.png";

const forgotPassword = () => (
  <main className="login-page forgot-password">
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="" title="" />
      </Link>
      <h1 className="title">Reset Password</h1>
    </div>
    <div className="form-container">
      <form action="#" method="POST">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="New password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Confirm Password"
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
