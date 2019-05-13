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
    let test = Object.keys(imgData[activeTab]);
    let newFenceOptions = test.map(x => x.split(/(?=[A-Z])/)).map(x => x[1]);
    let result = TabColorsData.filter(x => newFenceOptions.includes(x.name));

    if (activeTab === "Baluster" && this.props.aluminum === true) {
      return [
        {
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAEBCAYAAABIYAHcAAAABHNCSVQICAgIfAhkiAAAA3xJREFUeJzt1MFJA1EAANHvZjeQo0cLUHuxdGuINYgIhgjuWoWzEN+rYE5z9/z49HaYl9MA+APbtk1fH+8v83RYTsvx+LB3EHCb1vVnrGNM094hwP9gNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJOaxra/f1+v93iHA7fq8XM6/fSwXQJgT+zQAAAAASUVORK5CYII=",
          name: "Charcoal"
        },
        {
          img:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAEBCAYAAABIYAHcAAAABHNCSVQICAgIfAhkiAAAA4tJREFUeJzt1LFJAwEAQNF4pEmnRYqsEW8B0SojCWYJQQRB3EB0DGfQAY4IcQSn8B/E9yb41T/b391+bcdxtQD4Az/H4/B4/7Bbbi/H1fXN1WbuIOA0TdO0eHl6Hoa5Q4D/wWyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkiYDZAwGyBhNkDCbICE2QAJswESZgMkzAZImA2QMBsgYTZAwmyAhNkACbMBEmYDJMwGSJgNkDAbIGE2QMJsgITZAAmzARJmAyTMBkgsD4fvj7fX94u5Q4DTdb5ef/4CRs4WtNWfCaEAAAAASUVORK5CYII=",
          name: "White"
        }
      ];
    }

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
