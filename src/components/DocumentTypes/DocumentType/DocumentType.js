import React from "react";

const documentType = props => {
  return (
    <div className="theme-card">
      <div className="card-head">
        <h2 className="card-title">{props.type.title}</h2>
      </div>
      <div className="card-body">
        <ul className="list-inline clearfix document-summary-grid">
          <li>
            <h3 className="grid-num total-docs">{props.type.totalDocs}</h3>
            <span className="grid-label">Total Documents</span>
          </li>
          <li className="grid-date">
            <h3 className="grid-date">{props.type.latestDocDate}</h3>
            <span className="grid-label">Latest Uploaded Document</span>
          </li>
          <li>
            <h3 className="grid-num expired-docs">{props.type.expiredDocs}</h3>
            <span className="grid-label">Expired Documents</span>
          </li>
        </ul>
        <div className="card-action">
          <a className="view-link" onClick={props.viewClicked}>
            <span>View</span>
            <i className="material-icons">keyboard_arrow_right</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default documentType;
