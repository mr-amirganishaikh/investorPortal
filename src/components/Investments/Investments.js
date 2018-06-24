import React, { Component } from "react";

import Aux from "../../hoc/_Aux/_Aux";
import InvestmentOverview from "./InvestmentOverview/InvestmentOverview";
import PortfolioOverview from "./PortfolioOverview/PortfolioOverview";
import InvestmentRegisterTable from "./InvestmentRegisterTable/InvestmentRegisterTable";
import InvestmentRegisterCharts from "./InvestmentRegisterCharts/InvestmentRegisterCharts";

class Investments extends Component {
  render() {
    return (
      <Aux>
        <div className="row">
          <div className="col">
            <InvestmentOverview />
          </div>
          <div className="col">
            <PortfolioOverview />
          </div>
          <div className="w-100">&nbsp;</div>
          <div className="col">
            <InvestmentRegisterTable />
          </div>
          <div className="w-100">&nbsp;</div>
          <div className="col">
            <InvestmentRegisterCharts />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Investments;
