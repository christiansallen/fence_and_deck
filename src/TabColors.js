import React, { Component } from "react";
import { TabColorsData } from "./TabColorsData";
import { imgData } from "./FenceData.js";

import "react-tabs/style/react-tabs.css";
import "./Fence.css";

class TabColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TabColorsData
    };
  }

  changeColorItem = props => {
    this.props.tabColor();
  };

  render() {
    const { TabColorsData } = this.state;
    const { handleTabColors, activeTab } = this.props;
    let testData;

    if (activeTab === "Baluster") {
      const test = Object.keys(imgData["Baluster"]);
      console.log("first test", test);
      console.log("tab colors data", TabColorsData);
      const testing = TabColorsData.filter(x => test.includes(x.name));
      console.log("final test", testing);
    }

    return (
      <div className="tab-container">
        {TabColorsData.map((item, idx) => {
          return (
            <div
              className="block"
              key={idx}
              onClick={() => handleTabColors(item.name)}
            >
              <img src={item.img} alt={item.alt} className="color" />
              <p className="name">{item.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TabColors;
