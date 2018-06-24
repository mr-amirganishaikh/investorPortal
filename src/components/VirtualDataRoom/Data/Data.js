import React from "react";

const data = props => {
  const expiredClass = props.data.isExpired ? "isexpired" : "";
  return (
    <div className={"document-grid " + expiredClass}>
      <div className={"document-icon icon-" + props.data.docType} />
      <h3 className="document-title">{props.data.fileName}</h3>
      <div className="document-dates">
        <span>Uploaded: </span>
        <span className="document-uploaded">{props.data.uploaded}</span>
      </div>
      <p className="document-description">{props.data.fileDesc}</p>
    </div>
  );
};

export default data;
