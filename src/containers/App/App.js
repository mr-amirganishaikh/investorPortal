import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Aux from "../../hoc/_Aux/_Aux";
import UnauthorizedLayout from "../../hoc/Layout/UnauthorizedLayout/UnauthorizedLayout";
import AuthorizedLayout from "../../hoc/Layout/AuthorizedLayout/AuthorizedLayout";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Aux>
        <Switch>
          <Route exact path="/" component={UnauthorizedLayout} />
          <PrivateRoute path="/dashboard/" component={AuthorizedLayout} />
          <Route component={UnauthorizedLayout} />
        </Switch>
      </Aux>
    );
  }
}

export default App;
