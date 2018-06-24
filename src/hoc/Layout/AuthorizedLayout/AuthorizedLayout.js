import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Aux from "../../_Aux/_Aux";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Investments from "../../../components/Investments/Investments";
import DocumentTypes from "../../../components/DocumentTypes/DocumentTypes";
import VirtualDataRoom from "../../../components/VirtualDataRoom/VirtualDataRoom";
import Reports from "../../../components/Reports/Reports";
import Notifications from "../../../components/Notifications/Notifications";
import Settings from "../../../components/Settings/Settings";

import "./AuthorizedLayout.scss";

export default class Layout extends Component {
  state = { sidebarOpen: false, pageTitle: "Investments" };

  routes = [
    {
      path: "/dashboard/investments",
      component: Investments,
      pageTitle: "Investments",
      icon: "trending_up"
    },
    {
      path: "/dashboard/documents",
      component: DocumentTypes,
      pageTitle: "Documents",
      icon: "description"
    },
    {
      path: "/dashboard/virtual-data-room",
      component: VirtualDataRoom,
      pageTitle: "Virtual Data Room",
      icon: "vpn_key"
    },
    {
      path: "/dashboard/reports",
      component: Reports,
      pageTitle: "Reports",
      icon: "pie_chart"
    },
    {
      path: "/dashboard/notifications",
      component: Notifications,
      pageTitle: "Notifications",
      icon: "notifications"
    },
    {
      path: "/dashboard/settings",
      component: Settings,
      pageTitle: "Settings",
      icon: "settings"
    }
  ];

  componentDidMount() {
    document.body.classList.add("dashboard");
    if (!localStorage.getItem("token")) this.props.history.replace("/");
  }

  menuClickHandler = event => {
    event.preventDefault();
    this.setState({ sidebarOpen: true });
  };

  menuItemClickHandler = event => {
    this.setState({
      sidebarOpen: false
    });
  };

  asideClickHandler = event => {
    event.preventDefault();
    if (event.target.classList.contains("slideIn")) {
      this.setState({ sidebarOpen: false });
    }
  };

  logoutHandler = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.props.history.push("/");
  };

  GenerateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => <Component {...props} {...rest} />} />
  );

  render() {
    return (
      <Aux>
        <Header
          menuClicked={this.menuClickHandler}
          pageTitle={this.state.pageTitle}
        />
        <Sidebar
          asideClicked={this.asideClickHandler}
          openState={this.state.sidebarOpen}
          routes={this.routes}
          logout={this.logoutHandler}
          menuItemClicked={this.menuItemClickHandler}
        />
        <main className="col-xs-12 content">
          <Switch>
            {this.routes.map((route, index) => (
              <this.GenerateRoutes key={index} {...route} />
            ))}
          </Switch>
        </main>
      </Aux>
    );
  }
}
