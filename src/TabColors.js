import React, { Component } from "react";
import { TabColorsData } from "./TabColorsData";

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
    const { handleTabColors } = this.props;

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
