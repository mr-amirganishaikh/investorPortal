import React, { Component } from "react";
import Aux from "../../hoc/_Aux/_Aux";

export default class Settings extends Component {
  render() {
    return (
      <Aux>
        <div className="row">
          <div className="col">
            <div className="theme-card">
              <div className="card-head">
                <h2 className="card-title">Settings</h2>
              </div>
              <div className="card-body text-center">
                Data will be loaded here
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}
