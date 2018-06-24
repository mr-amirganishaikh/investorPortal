import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    const openClass = this.props.openState ? "slideIn" : null;
    return (
      <aside onClick={this.props.asideClicked} className={openClass}>
        <div id="sidebar">
          <div id="sidebar-head">
            <div className="user-details">
              <div className="img-holder circle-holder">&nbsp;</div>
              <h3 className="title-profile">
                {localStorage.getItem("username")}
              </h3>
            </div>
          </div>
          <div id="sidebar-body">
            <nav className="main-nav">
              <ul className="list-unstyled">
                {this.props.routes.map((route, index) => (
                  <li key={index}>
                    <NavLink
                      to={route.path}
                      onClick={this.props.menuItemClicked}
                    >
                      <i className="material-icons">{route.icon}</i>
                      <span>{route.pageTitle}</span>
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a onClick={this.props.logout}>
                    <i className="material-icons">exit_to_app</i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    );
  }
}
