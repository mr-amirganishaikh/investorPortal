import React from "react";

const investmentOverview = () => {
  return (
    <div className="theme-card chart-card">
      <div className="card-head">
        <h2 className="card-title">Investment Overview</h2>
      </div>
      <div
        className="card-body p-0 home-equal-chart"
        style={{ minHeight: "370px" }}
      >
        <div className="card-status-grid">
          <ul className="list-inline clearfix investment-overview-tabs">
            <li className="active">
              <a>
                <h6 className="status-title">Invested Capital</h6>
                <h4 className="status-count">200.54M</h4>
              </a>
            </li>
            <li>
              <a>
                <h6 className="status-title">Value Created</h6>
                <h4 className="status-count">30.46M</h4>
              </a>
            </li>
            <li>
              <a>
                <h6 className="status-title">Total Value</h6>
                <h4 className="status-count">231M</h4>
              </a>
            </li>
            <li>
              <a>
                <h6 className="status-title">Net IRR</h6>
                <h4 className="status-count">14%</h4>
              </a>
            </li>
          </ul>
        </div>
        <div className="investment-chart-wrap">
          <canvas id="home-investment-chart" />
          Chart need to be generated here
        </div>
      </div>
    </div>
  );
};

export default investmentOverview;
