import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../shared/images/logo.png";

// fake credentials
const tempUsername = "amir@amir.com";
const tempPassword = "1234";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "amir@amir.com",
      password: "1234"
    };
  }

  submitForm = event => {
    event.preventDefault();
    if (this.state.username && this.state.username !== tempUsername) {
      alert("Invalid username !!!");
    } else if (this.state.password && this.state.password !== tempPassword) {
      alert("Invalid password !!!");
    } else {
      localStorage.setItem("token", "isAuthenticated");
      localStorage.setItem("username", this.state.username);
      this.props.history.push("/dashboard/investments");
    }
  };

  usernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  passwordHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <main className="login-page">
        <div className="logo-container">
          <Link to="/login">
            <img src={logo} alt="" title="" />
          </Link>
          <h1 className="title">Investor Portal</h1>
        </div>
        <div className="form-container">
          <form onSubmit={this.submitForm.bind(this)} method="POST">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                value={this.state.username}
                onChange={this.usernameHandler.bind(this)}
              />
              <span className="error-container" />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={this.passwordHandler.bind(this)}
              />
              <span className="error-container" />
            </div>

            <button type="submit" className="btn btn-login btn-block">
              Login
            </button>
            <Link to={"/forgotpassword"} title="Forgot your password?">
              Forgot your password?
            </Link>
          </form>
        </div>
      </main>
    );
  }
}

export default Login;
