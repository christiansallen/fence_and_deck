import React, { Component } from "react";
import { TabColorsData, DeckColorsData } from "./TabColorsData";
import { imgData } from "./FenceData.js";
import { tabs } from "./FenceData.js";

import DeckFirepitColor from "./Images/1Color_Firepit.png";
import DeckGravelpathColor from "./Images/1Color_Gravelpath.png";
import DeckHavanagoldColor from "./Images/1Color_Havanagold.png";
import DeckIslandmistColor from "./Images/1Color_Islandmist.png";
import DeckLavarockColor from "./Images/1Color_Lavarock.png";
import DeckMaderiaColor from "./Images/1Color_Maderia.png";
import DeckPebblegrayColor from "./Images/1Color_Pebblegray.png";
import DeckRopeswingColor from "./Images/1Color_Ropeswing.png";
import DeckSaddleColor from "./Images/1Color_Saddle.png";
import DeckSpicedrumColor from "./Images/1Color_Spicedrum.png";
import DeckTikitorchColor from "./Images/1Color_Tikitorch.png";
import DeckTreehouseColor from "./Images/1Color_Treehouse.png";
import DeckVintagelanternColor from "./Images/1Color_Vintagelantern.png";
import DeckWinchestergrayColor from "./Images/1Color_Winchestergray.png";
import DeckWoodlandbrownColor from "./Images/1Color_Woodlandbrown.png";

import CharcoalColor from "./Images/Color_Charcoal.png";
import FirepitColor from "./Images/Color_Firepit.png";
import GravelpathColor from "./Images/Color_Gravelpath.png";
import HavanagoldColor from "./Images/Color_Havanagold.png";
import IslandmistColor from "./Images/Color_Islandmist.png";
import LavarockColor from "./Images/Color_Lavarock.png";
import MaderiaColor from "./Images/Color_Maderia.png";
import PebblegrayColor from "./Images/Color_Pebblegray.png";
import RopeswingColor from "./Images/Color_Ropeswing.png";
import SaddleColor from "./Images/Color_Saddle.png";
import SpicedrumColor from "./Images/Color_Spicedrum.png";
import TikitorchColor from "./Images/Color_Tikitorch.png";
import TreehouseColor from "./Images/Color_Treehouse.png";
import VintagelanternColor from "./Images/Color_Vintagelantern.png";
import BronzeColor from "./Images/Color_ Bronze.png";
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
      DeckColorsData,
      active: false,
      color: ""
    };
  }

  colorSwatch = color => {
    TabColorsData.filter(tab => tab.name.includes(color)).map(x => {
      console.log(x);
      return <img className="color-swatch" src={x.img} alt={x.name} />;
    });
  };

  componentName = activeTab => {
    const { TabColorsData, DeckColorsData } = this.state;
    const {
      aluminum,
      oneStyle,
      twoStyle,
      ironStyle,
      ironPostStyle,
      compositeStyle
    } = this.props;
    if (activeTab !== "Summary") {
      if (
        activeTab !== "Deck" &&
        activeTab !== "Border" &&
        activeTab !== "Fascia" &&
        activeTab !== "Cap Rail"
      ) {
        console.log(activeTab);
        console.log(imgData[activeTab]);
        let test = Object.keys(imgData[activeTab]);
        let newFenceOptions = test
          .map(x => x[0].split(/(?=[A-Z])/))
          .map(x => x[1]);
        let result = TabColorsData.filter(x => newFenceOptions.includes(x.alt));

        if (activeTab === "Baluster" && aluminum) {
          return [
            {
              img: CharcoalColor,
              name: "Charcoal Black",
              alt: "Charcoal"
            },
            {
              img: WhiteColor,
              name: "White",
              alt: "White"
            },
            { img: BronzeColor, name: "Bronze", alt: "Bronze" }
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
              img: TreehouseColor,
              name: "Tree House",
              alt: "Treehouse"
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
              name: "Charcoal Black",
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
          (activeTab === "Cap/Skirt" ||
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
              img: TreehouseColor,
              name: "Tree House",
              alt: "Treehouse"
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
              name: "Charcoal Black",
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
              name: "Charcoal Black",
              alt: "Charcoal"
            },
            {
              img: WhiteColor,
              name: "White",
              alt: "White"
            }
          ];
        }

        if ((activeTab === "Baluster" || activeTab === "Rails") && ironStyle) {
          return [
            {
              img: CharcoalColor,
              name: "Charcoal Black",
              alt: "Charcoal"
            }
          ];
        }

        if (
          (activeTab === "Post Skirt" ||
            activeTab === "Post Sleeve" ||
            activeTab === "Cap/Skirt") &&
          ironPostStyle
        ) {
          return [
            {
              img: CharcoalColor,
              name: "Charcoal Black",
              alt: "Charcoal"
            }
          ];
        }

        return result;
      } else {
        let test = Object.keys(imgData[activeTab]);
        let newFenceOptions = test
          .map(x => x.split(/(?=[A-Z])/))
          .map(x => x[1]);
        let result = DeckColorsData.filter(x =>
          newFenceOptions.includes(x.alt)
        );

        if (activeTab === "Cap Rail" && oneStyle) {
          return [
            {
              img: DeckIslandmistColor,
              name: "Island Mist",
              alt: "Islandmist"
            },
            {
              img: DeckTikitorchColor,
              name: "Tiki Torch",
              alt: "Tikitorch"
            },
            {
              img: DeckHavanagoldColor,
              name: "Havana Gold",
              alt: "Havanagold"
            },
            {
              img: DeckSpicedrumColor,
              name: "Spiced Rum",
              alt: "Spicedrum"
            },
            {
              img: DeckLavarockColor,
              name: "Lava Rock",
              alt: "Lavarock"
            },
            {
              img: DeckRopeswingColor,
              name: "Rope Swing",
              alt: "Ropeswing"
            },
            {
              img: DeckTreehouseColor,
              name: "Tree House",
              alt: "Treehouse"
            },
            {
              img: DeckVintagelanternColor,
              name: "Vintage Lantern",
              alt: "Vintagelantern"
            },

            {
              img: DeckFirepitColor,
              name: "Fire Pit",
              alt: "Firepit"
            },
            {
              img: DeckGravelpathColor,
              name: "Gravel Path",
              alt: "Gravelpath"
            },

            {
              img: DeckMaderiaColor,
              name: "Maderia",
              alt: "Maderia"
            },
            {
              img: DeckPebblegrayColor,
              name: "Pebble Gray",
              alt: "Pebblegray"
            },

            {
              img: DeckSaddleColor,
              name: "Saddle",
              alt: "Saddle"
            },

            {
              img: DeckWinchestergrayColor,
              name: "Winchester Gray",
              alt: "Winchestergray"
            },
            {
              img: DeckWoodlandbrownColor,
              name: "Woodland Brown",
              alt: "Woodlandbrown"
            }
          ];
        }

        if (activeTab === "Cap Rail" && twoStyle) {
          return [
            {
              img: DeckHavanagoldColor,
              name: "Havana Gold",
              alt: "Havanagold"
            },
            {
              img: DeckIslandmistColor,
              name: "Island Mist",
              alt: "Islandmist"
            },
            {
              img: DeckLavarockColor,
              name: "Lava Rock",
              alt: "Lavarock"
            },
            {
              img: DeckSpicedrumColor,
              name: "Spiced Rum",
              alt: "Spicedrum"
            },
            {
              img: DeckTikitorchColor,
              name: "Tiki Torch",
              alt: "Tikitorch"
            }
          ];
        }
        return result;
      }
    } else {
      console.log("Else:", activeTab);
    }
  };

  active = idx => {
    this.setState({ active: idx });
  };

  render() {
    const {
      handleTabColors,
      activeTab,
      capSkirtColor,
      capRailColor,
      postSleeveColor,
      railsColor,
      balusterColor,
      deckColor,
      fasciaColor,
      borderColor,
      tabColor,
      crownStyle,
      ironStyle,
      ironPostStyle,
      noneStyle
    } = this.props;
    return (
      <div className="tab-container">
        {activeTab !== "Summary" ? (
          this.componentName(activeTab).map((item, idx) => {
            return (
              <div
                className="block"
                key={idx}
                onClick={() => handleTabColors(item.alt)}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="color"
                  onClick={() => tabColor(activeTab, item.name)}
                />
                <p
                  className={
                    !item.name.includes("Transcend") ? "name" : "name-bold"
                  }
                >
                  {item.name}
                </p>
              </div>
            );
          })
        ) : crownStyle ? (
          <div className="legend">
            {tabs
              .filter(
                item => item.name !== "Summary" && item.name !== "Cap Rail"
              )
              .map((item, idx) => {
                return (
                  <div className="summary-items">
                    <p key={idx} className="legend-item2">
                      {item.name === "Cap/Skirt"
                        ? capSkirtColor
                        : item.name === "Post Sleeve"
                        ? postSleeveColor
                        : item.name === "Rails"
                        ? railsColor
                        : item.name === "Baluster"
                        ? balusterColor
                        : item.name === "Cap Rail"
                        ? capRailColor
                        : item.name === "Deck"
                        ? deckColor
                        : item.name === "Fascia"
                        ? fasciaColor
                        : borderColor}
                    </p>

                    {/*Add color swatch here */}
                    {this.colorSwatch(capSkirtColor)}
                  </div>
                );
              })}
          </div>
        ) : ironStyle && ironPostStyle && noneStyle ? (
          <div className="legend">
            {tabs
              .filter(
                item =>
                  item.name !== "Summary" &&
                  item.name !== "Cap Rail" &&
                  item.name !== "Rails" &&
                  item.name !== "Baluster" &&
                  item.name !== "Post Sleeve" &&
                  item.name !== "Cap/Skirt"
              )
              .map((item, idx) => {
                return (
                  <p key={idx} className="legend-item3">
                    {item.name === "Cap/Skirt"
                      ? capSkirtColor
                      : item.name === "Post Sleeve"
                      ? postSleeveColor
                      : item.name === "Rails"
                      ? railsColor
                      : item.name === "Baluster"
                      ? balusterColor
                      : item.name === "Cap Rail"
                      ? capRailColor
                      : item.name === "Deck"
                      ? deckColor
                      : item.name === "Fascia"
                      ? fasciaColor
                      : borderColor}
                  </p>
                );
              })}
          </div>
        ) : ironStyle && !ironPostStyle ? (
          <div className="legend">
            {tabs
              .filter(
                item =>
                  item.name !== "Summary" &&
                  item.name !== "Rails" &&
                  item.name !== "Baluster"
              )
              .map((item, idx) => {
                return (
                  <p key={idx} className="legend-item4">
                    {item.name === "Cap/Skirt"
                      ? capSkirtColor
                      : item.name === "Post Sleeve"
                      ? postSleeveColor
                      : item.name === "Rails"
                      ? railsColor
                      : item.name === "Baluster"
                      ? balusterColor
                      : item.name === "Cap Rail"
                      ? capRailColor
                      : item.name === "Deck"
                      ? deckColor
                      : item.name === "Fascia"
                      ? fasciaColor
                      : borderColor}
                  </p>
                );
              })}
          </div>
        ) : ironStyle && ironPostStyle && !noneStyle ? (
          <div className="legend">
            {tabs
              .filter(
                item =>
                  item.name !== "Summary" &&
                  item.name !== "Rails" &&
                  item.name !== "Baluster" &&
                  item.name !== "Post Sleeve" &&
                  item.name !== "Cap/Skirt"
              )
              .map((item, idx) => {
                return (
                  <p key={idx} className="legend-item5">
                    {item.name === "Cap/Skirt"
                      ? capSkirtColor
                      : item.name === "Post Sleeve"
                      ? postSleeveColor
                      : item.name === "Rails"
                      ? railsColor
                      : item.name === "Baluster"
                      ? balusterColor
                      : item.name === "Cap Rail"
                      ? capRailColor
                      : item.name === "Deck"
                      ? deckColor
                      : item.name === "Fascia"
                      ? fasciaColor
                      : borderColor}
                  </p>
                );
              })}
          </div>
        ) : (
          <div className="legend">
            {tabs
              .filter(item => item.name !== "Summary")
              .map((item, idx) => {
                return (
                  <p key={idx} className="legend-item">
                    {item.name === "Cap/Skirt"
                      ? capSkirtColor
                      : item.name === "Post Sleeve"
                      ? postSleeveColor
                      : item.name === "Rails"
                      ? railsColor
                      : item.name === "Baluster"
                      ? balusterColor
                      : item.name === "Cap Rail"
                      ? capRailColor
                      : item.name === "Deck"
                      ? deckColor
                      : item.name === "Fascia"
                      ? fasciaColor
                      : borderColor}
                  </p>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default TabColors;
