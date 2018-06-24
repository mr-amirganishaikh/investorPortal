import React from "react";

const portfolioOverview = () => {
  return (
    <div className="theme-card chart-card">
      <div className="card-head">
        <h2 className="card-title">Portfolio Allocation</h2>
      </div>
      <div
        className="card-body home-equal-chart"
        style={{ minHeight: "370px" }}
      >
        <div className="portfolio-chart-wrap">
          <canvas id="home-portfolio-chart" />
          Chart need to be generated here
        </div>
      </div>
    </div>
  );
};

export default portfolioOverview;
