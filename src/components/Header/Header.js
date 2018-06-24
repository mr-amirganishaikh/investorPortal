import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul id="header" className="list-inline clearfix">
          <li id="menu-toggler">
            <a href="javascipt:void();" onClick={this.props.menuClicked}>
              <i className="material-icons icon">menu</i>
              <span className="text">Menu</span>
            </a>
          </li>
          <li id="menu-title">
            <h1> {this.props.pageTitle} </h1>
          </li>
          <li id="menu-addons">
            <ul className="list-inline list-menu-addons clearfix">
              <li id="menu-notification">
                <Link to="/dashboard/notifications">
                  <i className="material-icons">notifications</i>
                </Link>
              </li>
              <li id="menu-currency">
                <strong>Base Currency : </strong>
                <span>AED</span>
              </li>
              <li id="menu-quarter">
                <select>
                  <option>Quarter3 2018</option>
                  <option>Quarter2 2018</option>
                  <option>Quarter1 2018</option>
                </select>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    );
  }
}
