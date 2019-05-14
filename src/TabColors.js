import React, { Component } from "react";
import { TabColorsData } from "./TabColorsData";
import { imgData } from "./FenceData.js";
import BeachduneColor from "./Images/Color_Beachdune.png";
import ClamshellColor from "./Images/Color_Clamshell.png";
import CoastalbluffColor from "./Images/Color_Coastalbluff.png";
import FoggywharfColor from "./Images/Color_Foggywharf.png";
import RockyharborColor from "./Images/Color_Rockyharbor.png";
import SunsetcoveColor from "./Images/Color_Sunsetcove.png";
import ToastedsandColor from "./Images/Color_Toastedsand.png";
import CharcoalColor from "./Images/Color_Charcoal.png";
import FirepitColor from "./Images/Color_Firepit.png";
import GravelpathColor from "./Images/Color_Gravelpath.png";
import HavanagoldColor from "./Images/Color_Havanagold.png";
import IslandmistColor from "./Images/Color_Islandmist.png";
import LavarockColor from "./Images/Color_Lavarock.png";
import MaderiaColor from "./Images/Color_Maderia.png";
import PebblegreyColor from "./Images/Color_Pebblegrey.png";
import RopeswingColor from "./Images/Color_Ropeswing.png";
import SaddleColor from "./Images/Color_Saddle.png";
import SpicedrumColor from "./Images/Color_Spicedrum.png";
import TikitorchColor from "./Images/Color_Tikitorch.png";
import TreehouseColor from "./Images/Color_Treehouse.png";
import VintagelanternColor from "./Images/Color_Vintagelantern.png";
import WhiteColor from "./Images/Color_White.png";
import WinchestergrayColor from "./Images/Color_Winchestergray.png";
import WoodlandbrownColor from "./Images/Color_Woodlandbrown.png";

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
    const {
      aluminum,
      oneStyle,
      twoStyle,
      crownStyle,
      ironStyle,
      ironPostStyle
    } = this.props;
    let test = Object.keys(imgData[activeTab]);
    let newFenceOptions = test.map(x => x.split(/(?=[A-Z])/)).map(x => x[1]);
    let result = TabColorsData.filter(x => newFenceOptions.includes(x.name));

    if (activeTab === "Baluster" && aluminum) {
      return [
        {
          img: CharcoalColor,
          name: "Charcoal"
        },
        {
          img: WhiteColor,
          name: "White"
        }
      ];
    }

    if (activeTab === "Cap Rail" && crownStyle) {
      return [
        {
          img: FirepitColor,
          name: "Firepit"
        },
        {
          img: GravelpathColor,
          name: "Gravelpath"
        },
        {
          img: HavanagoldColor,
          name: "Havanagold"
        },
        {
          img: IslandmistColor,
          name: "Islandmist"
        },
        {
          img: LavarockColor,
          name: "Lavarock"
        },
        {
          img: RopeswingColor,
          name: "Ropeswing"
        },
        {
          img: SpicedrumColor,
          name: "Spicedrum"
        },
        {
          img: TikitorchColor,
          name: "Tikitorch"
        },
        {
          img: TreehouseColor,
          name: "Treehouse"
        },
        {
          img: VintagelanternColor,
          name: "Vintagelantern"
        }
      ];
    }

    if (activeTab === "Cap Rail" && oneStyle) {
      return [
        {
          img: FirepitColor,
          name: "Firepit"
        },
        {
          img: GravelpathColor,
          name: "Gravelpath"
        },
        {
          img: HavanagoldColor,
          name: "Havanagold"
        },
        {
          img: IslandmistColor,
          name: "Islandmist"
        },
        {
          img: LavarockColor,
          name: "Lavarock"
        },
        {
          img: MaderiaColor,
          name: "Maderia"
        },
        {
          img: PebblegreyColor,
          name: "Pebblegrey"
        },
        {
          img: RopeswingColor,
          name: "Ropeswing"
        },
        {
          img: SaddleColor,
          name: "Saddle"
        },
        {
          img: SpicedrumColor,
          name: "Spicedrum"
        },
        {
          img: TikitorchColor,
          name: "Tikitorch"
        },
        {
          img: TreehouseColor,
          name: "Treehouse"
        },
        {
          img: VintagelanternColor,
          name: "Vintagelantern"
        },

        {
          img: WinchestergrayColor,
          name: "Winchestergray"
        },
        {
          img: WoodlandbrownColor,
          name: "Woodlandbrown"
        }
      ];
    }

    if (activeTab === "Cap Rail" && twoStyle) {
      return [
        {
          img: HavanagoldColor,
          name: "Havanagold"
        },
        {
          img: IslandmistColor,
          name: "Islandmist"
        },
        {
          img: LavarockColor,
          name: "Lavarock"
        },
        {
          img: SpicedrumColor,
          name: "Spicedrum"
        },
        {
          img: TikitorchColor,
          name: "Tikitorch"
        }
      ];
    }

    if ((activeTab === "Baluster" || activeTab === "Rails") && ironStyle) {
      return [
        {
          img: CharcoalColor,
          name: "Charcoal"
        }
      ];
    }

    if (
      (activeTab === "Post Skirt" ||
        activeTab === "Post Sleeve" ||
        activeTab === "Post Cap") &&
      ironPostStyle
    ) {
      return [
        {
          img: CharcoalColor,
          name: "Charcoal"
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
