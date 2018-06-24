import React from "react";

const document = props => {
  const expiredClass = props.doc.isExpired ? "isexpired" : "";
  return (
    <div className={"document-grid " + expiredClass}>
      <div className={"document-icon icon-" + props.doc.docType} />
      <h3 className="document-title">{props.doc.fileName}</h3>
      <div className="document-dates">
        <span>Uploaded: </span>
        <span className="document-uploaded">{props.doc.uploaded}</span>
        <span> | Expired: </span>
        <span className="document-expired">{props.doc.expire}</span>
      </div>
      <p className="document-description">{props.doc.fileDesc}</p>
    </div>
  );
};

export default document;
