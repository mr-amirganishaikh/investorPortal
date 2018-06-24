import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Aux from "../../_Aux/_Aux";
import Login from "../../../components/Login/Login";
import ForgotPassword from "../../../components/Login/ForgotPassword/ForgotPassword";

import "./UnauthorizedLayout.scss";

export default class UnauthorizedLayout extends Component {
  componentDidMount() {
    document.body.classList.remove("dashboard");
    if (localStorage.getItem("token"))
      this.props.history.replace("/dashboard/investments");
  }

  render() {
    return (
      <Aux>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Aux>
    );
  }
}
