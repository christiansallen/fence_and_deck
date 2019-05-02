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

  componentName = activeTab => {
    const { TabColorsData } = this.state;
    const test = Object.keys(imgData[activeTab]);
    const newFenceOptions = test.map(x => x.split(/(?=[A-Z])/)).map(x => x[1]);
    const result = TabColorsData.filter(x => newFenceOptions.includes(x.name));
    console.log("Active Tab", activeTab);
    console.log("Tab Colors Data:", TabColorsData);
    console.log("newFence", newFenceOptions);
    console.log("result", result);
    return result;
  };

  render() {
    const { handleTabColors, activeTab } = this.props;

    return (
      <div className="tab-container">
        {this.componentName(activeTab).map((item, idx) => {
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
