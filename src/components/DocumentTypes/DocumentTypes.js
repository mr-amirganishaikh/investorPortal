import React, { Component } from "react";

import Aux from "../../hoc/_Aux/_Aux";
import DocumentType from "./DocumentType/DocumentType";
import Document from "./Document/Document";

export default class Documents extends Component {
  state = {
    types: [],
    documents: [],
    count: 0
  };

  componentWillMount() {
    this.setState({
      types: [
        {
          docType: "financial",
          title: "Financial",
          totalDocs: 5,
          expiredDocs: 2,
          latestDocDate: "27 Mar 2018"
        },
        {
          docType: "brochure",
          title: "Brochure",
          totalDocs: 4,
          expiredDocs: 1,
          latestDocDate: "8 Apr 2018"
        },
        {
          docType: "legal",
          title: "Legal",
          totalDocs: 3,
          expiredDocs: 0,
          latestDocDate: "12 Jun 2018"
        },
        {
          docType: "kyc",
          title: "KYC",
          totalDocs: 7,
          expiredDocs: 3,
          latestDocDate: "5 Dec 2018"
        }
      ]
    });
  }

  viewClickHandler = docType => {
    document.getElementById("documents").classList.remove("d-none");
    document.getElementById("documentTypes").classList.add("d-none");
    this.setState({
      count: 3,
      documents: [
        {
          isExpired: false,
          docType: "pdf",
          uploaded: "12-Mar-2018",
          expire: "12-Dec-2018",
          fileName: "File name",
          fileDesc: "Some short or long description for the document"
        },
        {
          isExpired: true,
          docType: "doc",
          uploaded: "12-Mar-2018",
          expire: "12-Jun-2018",
          fileName: "File name",
          fileDesc: "Some short or long description for the document"
        },
        {
          isExpired: true,
          docType: "doc",
          uploaded: "12-Mar-2018",
          expire: "12-Jun-2018",
          fileName: "File name",
          fileDesc: "Some short or long description for the document"
        }
      ]
    });
  };

  goBack = event => {
    event.preventDefault();
    document.getElementById("documents").classList.add("d-none");
    document.getElementById("documentTypes").classList.remove("d-none");
  };

  render() {
    return (
      <Aux>
        <div id="documentTypes" className="row">
          {this.state.types.map((type, index) => (
            <div key={index} className="col-xs-12 col-md-6">
              <DocumentType
                type={type}
                viewClicked={() => this.viewClickHandler(type.docType)}
              />
            </div>
          ))}
        </div>
        <div id="documents" className="row d-none">
          <div className="col">
            <div className="theme-card">
              <div className="card-head">
                <h2 className="card-title">{this.state.count} Documents</h2>
                <a onClick={this.goBack}>
                  <i className="material-icons">keyboard_arrow_left</i> Back{" "}
                </a>
              </div>
              <div className="card-body">
                <div className="row">
                  {this.state.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="col-xs-12 col-md-6 col-lg-4 col-xl-3"
                    >
                      <Document doc={doc} />
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
