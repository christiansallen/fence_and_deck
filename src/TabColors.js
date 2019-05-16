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
      TabColorsData,
      clicked: false
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
      ironPostStyle,
      compositeStyle
    } = this.props;
    let test = Object.keys(imgData[activeTab]);
    let newFenceOptions = test.map(x => x.split(/(?=[A-Z])/)).map(x => x[1]);
    let result = TabColorsData.filter(x => newFenceOptions.includes(x.alt));

    if (activeTab === "Baluster" && aluminum) {
      return [
        {
          img: CharcoalColor,
          name: "Charcoal",
          alt: "Charcoal"
        },
        {
          img: WhiteColor,
          name: "White",
          alt: "White"
        }
      ];
    }

    if (activeTab === "Cap Rail" && crownStyle) {
      return [
        {
          img: FirepitColor,
          name: "Fire Pit",
          alt: "Firepit"
        },
        {
          img: GravelpathColor,
          name: "Gravel Path",
          alt: "Gravelpath"
        },
        {
          img: HavanagoldColor,
          name: "Havana Gold",
          alt: "Havanagold"
        },
        {
          img: IslandmistColor,
          name: "Island Mist",
          alt: "Islandmist"
        },
        {
          img: LavarockColor,
          name: "Lava Rock",
          alt: "Lavarock"
        },
        {
          img: RopeswingColor,
          name: "Rope Swing",
          alt: "Ropeswing"
        },
        {
          img: SpicedrumColor,
          name: "Spiced Rum",
          alt: "Spicedrum"
        },
        {
          img: TikitorchColor,
          name: "Tiki Torch",
          alt: "Tikitorch"
        },
        {
          img: TreehouseColor,
          name: "Tree House",
          alt: "Treehouse"
        },
        {
          img: VintagelanternColor,
          name: "Vintage Lantern",
          alt: "Vintagelantern"
        }
      ];
    }

    if (activeTab === "Rails" && !ironStyle) {
      return [
        {
          img: FirepitColor,
          name: "Fire Pit",
          alt: "Firepit"
        },
        {
          img: GravelpathColor,
          name: "Gravel Path",
          alt: "Gravelpath"
        },
        {
          img: HavanagoldColor,
          name: "Havana Gold",
          alt: "Havanagold"
        },
        {
          img: RopeswingColor,
          name: "Rope Swing",
          alt: "Ropeswing"
        },
        {
          img: VintagelanternColor,
          name: "Vintage Lantern",
          alt: "Vintagelantern"
        },
        {
          img: CharcoalColor,
          name: "Charcoal",
          alt: "Charcoal"
        },
        {
          img: WhiteColor,
          name: "White",
          alt: "White"
        }
      ];
    }

    if (
      (activeTab === "Post Cap" ||
        activeTab === "Post Sleeve" ||
        activeTab === "Post Skirt") &&
      !ironPostStyle
    ) {
      return [
        {
          img: FirepitColor,
          name: "Fire Pit",
          alt: "Firepit"
        },
        {
          img: GravelpathColor,
          name: "Gravel Path",
          alt: "Gravelpath"
        },
        {
          img: HavanagoldColor,
          name: "Havana Gold",
          alt: "Havanagold"
        },
        {
          img: RopeswingColor,
          name: "Rope Swing",
          alt: "Ropeswing"
        },
        {
          img: VintagelanternColor,
          name: "Vintage Lantern",
          alt: "Vintagelantern"
        },
        {
          img: CharcoalColor,
          name: "Charcoal",
          alt: "Charcoal"
        },
        {
          img: WhiteColor,
          name: "White",
          alt: "White"
        }
      ];
    }

    if (activeTab === "Baluster" && compositeStyle) {
      return [
        {
          img: FirepitColor,
          name: "Fire Pit",
          alt: "Firepit"
        },
        {
          img: GravelpathColor,
          name: "Gravel Path",
          alt: "Gravelpath"
        },
        {
          img: HavanagoldColor,
          name: "Havana Gold",
          alt: "Havanagold"
        },
        {
          img: RopeswingColor,
          name: "Rope Swing",
          alt: "Ropeswing"
        },
        {
          img: LavarockColor,
          name: "Lava Rock",
          alt: "Lavarock"
        },
        {
          img: CharcoalColor,
          name: "Charcoal",
          alt: "Charcoal"
        },
        {
          img: WhiteColor,
          name: "White",
          alt: "White"
        }
      ];
    }

    if (activeTab === "Cap Rail" && oneStyle) {
      return [
        {
          img: FirepitColor,
          name: "Fire Pit",
          alt: "Firepit"
        },
        {
          img: GravelpathColor,
          name: "Gravel Path",
          alt: "Gravelpath"
        },
        {
          img: HavanagoldColor,
          name: "Havana Gold",
          alt: "Havanagold"
        },
        {
          img: IslandmistColor,
          name: "Island Mist",
          alt: "Islandmist"
        },
        {
          img: LavarockColor,
          name: "Lava Rock",
          alt: "Lavarock"
        },
        {
          img: MaderiaColor,
          name: "Maderia",
          alt: "Maderia"
        },
        {
          img: PebblegreyColor,
          name: "Pebble Grey",
          alt: "Pebblegrey"
        },
        {
          img: RopeswingColor,
          name: "Rope Swing",
          alt: "Ropeswing"
        },
        {
          img: SaddleColor,
          name: "Saddle",
          alt: "Saddle"
        },
        {
          img: SpicedrumColor,
          name: "Spiced Rum",
          alt: "Spicedrum"
        },
        {
          img: TikitorchColor,
          name: "Tiki Torch",
          alt: "Tikitorch"
        },
        {
          img: TreehouseColor,
          name: "Tree House",
          alt: "Treehouse"
        },
        {
          img: VintagelanternColor,
          name: "Vintage Lantern",
          alt: "Vintagelantern"
        },

        {
          img: WinchestergrayColor,
          name: "Winchester Gray",
          alt: "Winchestergray"
        },
        {
          img: WoodlandbrownColor,
          name: "Woodland Brown",
          alt: "Woodlandbrown"
        }
      ];
    }

    if (activeTab === "Cap Rail" && twoStyle) {
      return [
        {
          img: HavanagoldColor,
          name: "Havana Gold",
          alt: "Havanagold"
        },
        {
          img: IslandmistColor,
          name: "Island Mist",
          alt: "Islandmist"
        },
        {
          img: LavarockColor,
          name: "Lava Rock",
          alt: "Lavarock"
        },
        {
          img: SpicedrumColor,
          name: "Spiced Rum",
          alt: "Spicedrum"
        },
        {
          img: TikitorchColor,
          name: "Tiki Torch",
          alt: "Tikitorch"
        }
      ];
    }

    if ((activeTab === "Baluster" || activeTab === "Rails") && ironStyle) {
      return [
        {
          img: CharcoalColor,
          name: "Charcoal",
          alt: "Charcoal"
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
          name: "Charcoal",
          alt: "Charcoal"
        }
      ];
    }

    console.log("Active Tab", activeTab);
    console.log("Tab Colors Data:", TabColorsData);
    console.log("newFence", newFenceOptions);
    console.log("%c Results", "color:blue");
    console.log({ result });
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
              onClick={() => handleTabColors(item.alt)}
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

/*
renderedTabs = () => {
    if (this.state.crownStyle) {
      tabs
        .filter(tab => tab.name !== "Cap Rail")
        .map((tab, idx) => {
          return (
            <Tab onClick={() => this.changeItem(tab.name)} key={idx}>
              {tab.name}
            </Tab>
          );
        });
    } else if (this.state.ironPostStyle) {
      tabs
        .filter(
          tab =>
            tab.name !== "Post Cap" ||
            tab.name !== "Post Sleeve" ||
            tab.name !== "Post Skirt" ||
            tab.name !== "Rails" ||
            tab.name !== "Baluster"
        )
        .map((tab, idx) => {
          return (
            <Tab onClick={() => this.changeItem(tab.name)} key={idx}>
              {tab.name}
            </Tab>
          );
        });
    } else {
      tabs.map((tab, idx) => {
        return (
          <Tab onClick={() => this.changeItem(tab.name)} key={idx}>
            {tab.name}
          </Tab>
        );
      });
    }
  };
  */
