import React, { Component } from "react";
import Aux from "../../hoc/_Aux/_Aux";

class Notifications extends Component {
  state = {
    notifCount: 4
  };

  render() {
    return (
      <Aux>
        <div className="row">
          <div className="col">
            <div className="theme-card">
              <div className="card-head">
                <h2 className="card-title">
                  {this.state.notifCount} Notification{this.state.notifCount > 1
                    ? "s"
                    : ""}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Notifications;
