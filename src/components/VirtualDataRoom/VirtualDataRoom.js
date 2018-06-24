import React, { Component } from "react";

import Aux from "../../hoc/_Aux/_Aux";
import Data from "./Data/Data";

class VirtualDataRoom extends Component {
  state = {
    dataset: [],
    fileCount: 0
  };

  componentDidMount() {
    this.setState({
      dataset: [
        {
          isExpired: false,
          docType: "pdf",
          uploaded: "12-Mar-2018",
          fileName: "File name",
          fileDesc: "Some short or long description for the document"
        },
        {
          isExpired: true,
          docType: "doc",
          uploaded: "12-Mar-2018",
          fileName: "File name",
          fileDesc: "Some short or long description for the document"
        }
      ],
      fileCount: 2
    });
  }

  render() {
    return (
      <Aux>
        <div className="row">
          <div className="col">
            <div className="theme-card">
              <div className="card-head">
                <h2 className="card-title">
                  {this.state.fileCount} File
                  {this.state.fileCount > 1 ? "s" : ""}
                </h2>
              </div>
              <div className="card-body">
                <div className="row">
                  {this.state.dataset.map((data, index) => (
                    <div
                      key={index}
                      className="col-xs-12 col-md-6 col-lg-4 col-xl-3"
                    >
                      <Data data={data} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default VirtualDataRoom;
