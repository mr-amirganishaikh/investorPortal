import React from "react";

const searchBox = () => {
  return (
    <div className="form-group">
      <div className="input-group input-group-theme">
        <div className="input-group-prepend">
          <i className="material-icons">search</i>
          <input
            type="text"
            className="form-control form-theme"
            placeholder="Search documents"
          />
        </div>
      </div>
    </div>
  );
};

export default searchBox;
