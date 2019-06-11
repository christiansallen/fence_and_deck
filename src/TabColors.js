import React, { Component } from "react";
import { TabColorsData, DeckColorsData } from "./TabColorsData";
import { imgData } from "./FenceData.js";
import { tabs } from "./FenceData.js";

import DeckBeachduneColor from "./Images/1Color_Beachdune.png";
import DeckClamshellColor from "./Images/1Color_Clamshell.png";
import DeckCoastalbluffColor from "./Images/1Color_Coastalbluff.png";
import DeckFoggywharfColor from "./Images/1Color_Foggywharf.png";
import DeckRockyharborColor from "./Images/1Color_Rockyharbor.png";
import DeckSunsetcoveColor from "./Images/1Color_Sunsetcove.png";
import DeckToastedsandColor from "./Images/1Color_Toastedsand.png";
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
import DeckNoColor from "./Images/1Color_NoBorder.png";

import CharcoalColor from "./Images/Color_Charcoal.png";
import FirepitColor from "./Images/Color_Firepit.png";
import GravelpathColor from "./Images/Color_Gravelpath.png";
import HavanagoldColor from "./Images/Color_Havanagold.png";
import LavarockColor from "./Images/Color_Lavarock.png";
import RopeswingColor from "./Images/Color_Ropeswing.png";
import TreehouseColor from "./Images/Color_Treehouse.png";
import VintagelanternColor from "./Images/Color_Vintagelantern.png";
import BronzeColor from "./Images/Color_ Bronze.png";
import WhiteColor from "./Images/Color_White.png";

import "react-tabs/style/react-tabs.css";
import "./Fence.css";

class TabColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TabColorsData,
      DeckColorsData,
      altBorder: "Foggywharf",
      active: false,
      color: ""
    };
  }

  componentName = activeTab => {
    const { TabColorsData, DeckColorsData } = this.state;
    const {
      aluminum,
      oneStyle,
      twoStyle,
      ironStyle,
      ironPostStyle,
      transcendStyle,
      enhanceStyle,
      selectStyle,
      compositeStyle
    } = this.props;
    if (activeTab !== "Summary") {
      if (
        activeTab !== "Deck" &&
        activeTab !== "Border" &&
        activeTab !== "Fascia" &&
        activeTab !== "Cap Rail"
      ) {
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

        if (activeTab === "Deck" && transcendStyle) {
          return [
            {
              name: "(Transcend) Island Mist",
              img: DeckIslandmistColor,
              alt: "Islandmist"
            },
            {
              name: "(Transcend) Tiki Torch",
              img: DeckTikitorchColor,
              alt: "Tikitorch"
            },
            {
              name: "(Transcend) Havana Gold",
              img: DeckHavanagoldColor,
              alt: "Havanagold"
            },
            {
              name: "(Transcend) Spiced Rum",
              img: DeckSpicedrumColor,
              alt: "Spicedrum"
            },
            {
              name: "(Transcend) Lava Rock",
              img: DeckLavarockColor,
              alt: "Lavarock"
            },

            {
              name: "(Transcend) Fire Pit",
              img: DeckFirepitColor,
              alt: "Firepit"
            },
            {
              name: "(Transcend) Gravel Path",
              img: DeckGravelpathColor,
              alt: "Gravelpath"
            },

            {
              name: "(Transcend) Rope Swing",
              img: DeckRopeswingColor,
              alt: "Ropeswing"
            },

            {
              name: "(Transcend) Tree House",
              img: DeckTreehouseColor,
              alt: "Treehouse"
            },
            {
              name: "(Transcend) Vintage Lantern",
              img: DeckVintagelanternColor,
              alt: "Vintagelantern"
            }
          ];
        } else if (activeTab === "Deck" && enhanceStyle) {
          return [
            {
              name: "(Enhance) Beach Dune",
              img: DeckBeachduneColor,
              alt: "Beachdune"
            },
            {
              name: "(Enhance) Clam Shell",
              img: DeckClamshellColor,
              alt: "Clamshell"
            },
            {
              name: "(Enhance) Coastal Bluff",
              img: DeckCoastalbluffColor,
              alt: "Coastalbluff"
            },
            {
              name: "(Enhance) Foggy Wharf",
              img: DeckFoggywharfColor,
              alt: "Foggywharf"
            },
            {
              name: "(Enhance) Rocky Harbor",
              img: DeckRockyharborColor,
              alt: "Rockyharbor"
            },
            {
              name: "(Enhance) Sunset Cove",
              img: DeckSunsetcoveColor,
              alt: "Sunsetcove"
            },

            {
              name: "(Enhance) Toasted Sand",
              img: DeckToastedsandColor,
              alt: "Toastedsand"
            },

            { name: "(Enhance) Saddle", img: DeckSaddleColor, alt: "Saddle" }
          ];
        } else if (activeTab === "Deck" && selectStyle) {
          return [
            { name: "(Select) Maderia", img: DeckMaderiaColor, alt: "Maderia" },
            {
              name: "(Select) Pebble Gray",
              img: DeckPebblegrayColor,
              alt: "Pebblegray"
            },
            { name: "(Select) Saddle", img: DeckSaddleColor, alt: "Saddle" },

            {
              name: "(Select) Winchester Grey",
              img: DeckWinchestergrayColor,
              alt: "Winchestergray"
            },
            {
              name: "(Select) Woodland Brown",
              img: DeckWoodlandbrownColor,
              alt: "Woodlandbrown"
            }
          ];
        }

        if (activeTab === "Border" && transcendStyle) {
          return [
            {
              name: "(Transcend) Island Mist",
              img: DeckIslandmistColor,
              alt: "Islandmist"
            },
            {
              name: "(Transcend) Tiki Torch",
              img: DeckTikitorchColor,
              alt: "Tikitorch"
            },
            {
              name: "(Transcend) Havana Gold",
              img: DeckHavanagoldColor,
              alt: "Havanagold"
            },
            {
              name: "(Transcend) Spiced Rum",
              img: DeckSpicedrumColor,
              alt: "Spicedrum"
            },
            {
              name: "(Transcend) Lava Rock",
              img: DeckLavarockColor,
              alt: "Lavarock"
            },

            {
              name: "(Transcend) Fire Pit",
              img: DeckFirepitColor,
              alt: "Firepit"
            },
            {
              name: "(Transcend) Gravel Path",
              img: DeckGravelpathColor,
              alt: "Gravelpath"
            },

            {
              name: "(Transcend) Rope Swing",
              img: DeckRopeswingColor,
              alt: "Ropeswing"
            },

            {
              name: "(Transcend) Tree House",
              img: DeckTreehouseColor,
              alt: "Treehouse"
            },
            {
              name: "(Transcend) Vintage Lantern",
              img: DeckVintagelanternColor,
              alt: "Vintagelantern"
            },
            { name: "No Border", img: DeckNoColor, alt: "NoBorder" }
          ];
        } else if (activeTab === "Border" && enhanceStyle) {
          return [
            {
              name: "(Enhance) Beach Dune",
              img: DeckBeachduneColor,
              alt: "Beachdune"
            },
            {
              name: "(Enhance) Clam Shell",
              img: DeckClamshellColor,
              alt: "Clamshell"
            },
            {
              name: "(Enhance) Coastal Bluff",
              img: DeckCoastalbluffColor,
              alt: "Coastalbluff"
            },
            {
              name: "(Enhance) Foggy Wharf",
              img: DeckFoggywharfColor,
              alt: "Foggywharf"
            },
            {
              name: "(Enhance) Rocky Harbor",
              img: DeckRockyharborColor,
              alt: "Rockyharbor"
            },
            {
              name: "(Enhance) Sunset Cove",
              img: DeckSunsetcoveColor,
              alt: "Sunsetcove"
            },

            {
              name: "(Enhance) Toasted Sand",
              img: DeckToastedsandColor,
              alt: "Toastedsand"
            },

            { name: "(Enhance) Saddle", img: DeckSaddleColor, alt: "Saddle" },
            { name: "No Border", img: DeckNoColor, alt: "NoBorder" }
          ];
        } else if (activeTab === "Border" && selectStyle) {
          return [
            { name: "(Select) Maderia", img: DeckMaderiaColor, alt: "Maderia" },
            {
              name: "(Select) Pebble Gray",
              img: DeckPebblegrayColor,
              alt: "Pebblegray"
            },
            { name: "(Select) Saddle", img: DeckSaddleColor, alt: "Saddle" },

            {
              name: "(Select) Winchester Grey",
              img: DeckWinchestergrayColor,
              alt: "Winchestergray"
            },
            {
              name: "(Select) Woodland Brown",
              img: DeckWoodlandbrownColor,
              alt: "Woodlandbrown"
            },
            { name: "No Border", img: DeckNoColor, alt: "NoBorder" }
          ];
        }

        if (activeTab === "Fascia" && transcendStyle) {
          return [
            {
              name: "(Transcend) Island Mist",
              img: DeckIslandmistColor,
              alt: "Islandmist"
            },
            {
              name: "(Transcend) Tiki Torch",
              img: DeckTikitorchColor,
              alt: "Tikitorch"
            },
            {
              name: "(Transcend) Havana Gold",
              img: DeckHavanagoldColor,
              alt: "Havanagold"
            },
            {
              name: "(Transcend) Spiced Rum",
              img: DeckSpicedrumColor,
              alt: "Spicedrum"
            },
            {
              name: "(Transcend) Lava Rock",
              img: DeckLavarockColor,
              alt: "Lavarock"
            },

            {
              name: "(Transcend) Fire Pit",
              img: DeckFirepitColor,
              alt: "Firepit"
            },
            {
              name: "(Transcend) Gravel Path",
              img: DeckGravelpathColor,
              alt: "Gravelpath"
            },

            {
              name: "(Transcend) Rope Swing",
              img: DeckRopeswingColor,
              alt: "Ropeswing"
            },

            {
              name: "(Transcend) Tree House",
              img: DeckTreehouseColor,
              alt: "Treehouse"
            },
            {
              name: "(Transcend) Vintage Lantern",
              img: DeckVintagelanternColor,
              alt: "Vintagelantern"
            },
            { name: "White", img: WhiteColor, alt: "White" }
          ];
        } else if (activeTab === "Fascia" && enhanceStyle) {
          return [
            {
              name: "(Enhance) Beach Dune",
              img: DeckBeachduneColor,
              alt: "Beachdune"
            },
            {
              name: "(Enhance) Clam Shell",
              img: DeckClamshellColor,
              alt: "Clamshell"
            },
            {
              name: "(Enhance) Coastal Bluff",
              img: DeckCoastalbluffColor,
              alt: "Coastalbluff"
            },
            {
              name: "(Enhance) Foggy Wharf",
              img: DeckFoggywharfColor,
              alt: "Foggywharf"
            },
            {
              name: "(Enhance) Rocky Harbor",
              img: DeckRockyharborColor,
              alt: "Rockyharbor"
            },
            {
              name: "(Enhance) Sunset Cove",
              img: DeckSunsetcoveColor,
              alt: "Sunsetcove"
            },
            {
              name: "(Enhance) Toasted Sand",
              img: DeckToastedsandColor,
              alt: "Toastedsand"
            },
            { name: "(Enhance) Saddle", img: DeckSaddleColor, alt: "Saddle" },
            { name: "White", img: WhiteColor, alt: "White" }
          ];
        } else if (activeTab === "Fascia" && selectStyle) {
          return [
            { name: "(Select) Maderia", img: DeckMaderiaColor, alt: "Maderia" },
            {
              name: "(Select) Pebble Gray",
              img: DeckPebblegrayColor,
              alt: "Pebblegray"
            },
            { name: "(Select) Saddle", img: DeckSaddleColor, alt: "Saddle" },

            {
              name: "(Select) Winchester Grey",
              img: DeckWinchestergrayColor,
              alt: "Winchestergray"
            },
            {
              name: "(Select) Woodland Brown",
              img: DeckWoodlandbrownColor,
              alt: "Woodlandbrown"
            },
            { name: "White", img: WhiteColor, alt: "White" }
          ];
        } else if (activeTab === "Cap Rail" && oneStyle) {
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
        } else if (activeTab === "Cap Rail" && twoStyle) {
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

  colorSwatch = color => {};

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
                <img src={item.img} alt={item.alt} className="color" />
                <p
                  className={!item.name.includes("Transcend") ? "name" : "name"}
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
                    {item.name === "Cap/Skirt"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capSkirtColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Post Sleeve"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(postSleeveColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Rails"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(railsColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Baluster"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(balusterColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Cap Rail"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capRailColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Deck"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(deckColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Fascia"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(fasciaColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Border"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(borderColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : null}
                  </div>
                );
              })}
          </div>
        ) : ironStyle && ironPostStyle && noneStyle ? (
          <div className="legend-2">
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
                  <div className="summary-items">
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
                    {item.name === "Cap/Skirt"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capSkirtColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Post Sleeve"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(postSleeveColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Rails"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(railsColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Baluster"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(balusterColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Cap Rail"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capRailColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Deck"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(deckColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Fascia"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(fasciaColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Border"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(borderColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : null}
                  </div>
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
                  <div className="summary-items">
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
                    {item.name === "Cap/Skirt"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capSkirtColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Post Sleeve"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(postSleeveColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Rails"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(railsColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Baluster"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(balusterColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Cap Rail"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capRailColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Deck"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(deckColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Fascia"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(fasciaColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Border"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(borderColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : null}
                  </div>
                );
              })}
          </div>
        ) : ironStyle && ironPostStyle && !noneStyle ? (
          <div className="legend-2">
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
                  <div className="summary-items">
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
                    {item.name === "Cap/Skirt"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capSkirtColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Post Sleeve"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(postSleeveColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Rails"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(railsColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Baluster"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(balusterColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Cap Rail"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capRailColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Deck"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(deckColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Fascia"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(fasciaColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Border"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(borderColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : null}
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="legend">
            {tabs
              .filter(item => item.name !== "Summary")
              .map((item, idx) => {
                return (
                  <div className="summary-items">
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
                    {item.name === "Cap/Skirt"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capSkirtColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Post Sleeve"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(postSleeveColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Rails"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(railsColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Baluster"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(balusterColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Cap Rail"
                      ? TabColorsData.filter(tab =>
                          tab.name.includes(capRailColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Deck"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(deckColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Fascia"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(fasciaColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : item.name === "Border"
                      ? DeckColorsData.filter(tab =>
                          tab.name.includes(borderColor)
                        ).map(x => {
                          return (
                            <img src={x.img} alt={x.alt} className="color" />
                          );
                        })
                      : null}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default TabColors;
