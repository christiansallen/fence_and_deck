import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabColors from "./TabColors.js";

import { tabs, imgData } from "./FenceData";

//Needed imports
import TpostCharcoal from "./Images/Tpost_Charcoal.png";
import AluminumCharcoal from "./Images/Iron_Charcoal.png";
import IronGuardRail from "./Images/IronGuardRail.png";
import IronPosts from "./Images/Iron_Posts.png";

class Fence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: imgData["Cap Rail"]["OneCharcoal"],
      two: imgData["Cap Rail"]["TwoHavanagold"],
      crown: imgData["Cap Rail"]["Islandmist"],

      sPost: imgData["Post Sleeve"]["White"],
      tPost: TpostCharcoal,
      ironPosts: IronPosts,

      trex: imgData["Baluster"]["TrexWhite"],
      aluminum: imgData["Baluster"]["AluminumBronze"],
      iron: AluminumCharcoal,

      flat: imgData["Post Cap"]["Charcoal"],
      pyramid: imgData["Post Cap"]["PyramidCharcoal"],
      skirt: imgData["Post Skirt"]["White"],

      rail: imgData["Rail"]["Charcoal"],
      ironRail: IronGuardRail,

      border: imgData["Border"]["BorderBeachdune"],
      deck: imgData["Deck"]["Beachdune"],
      fascia: imgData["Fascia"]["FasciaBeachdune"],

      item: "",
      tabs,
      activeTab: "Post Cap",
      oneStyle: false,
      twoStyle: false,
      crownStyle: true,
      compositeStyle: true,
      aluminumStyle: false,
      ironStyle: false,
      flatStyle: true,
      pyramidStyle: false,
      shortStyle: true,
      tallStyle: false,
      postToggle: false,
      compositePostStyle: true,
      ironPostStyle: false,
      hidePostCaps: false
    };
  }

  changeItem = name => {
    this.setState({
      activeTab: name
    });
  };

  handleTabColors = name => {
    const { activeTab } = this.state;
    if (activeTab === "Post Sleeve") {
      console.log(typeof imgData["Post Sleeve"][`${name}`] !== "undefined");
      this.setState({
        sPost: imgData["Post Sleeve"][`${name}`]
      });
    } else if (activeTab === "Deck") {
      this.setState({
        deck: imgData["Deck"][`${name}`]
      });
    } else if (activeTab === "Post Cap") {
      this.setState({
        flat: imgData["Post Cap"][`${name}`],
        pyramid: imgData["Post Cap"][`Pyramid${name}`]
      });
    } else if (activeTab === "Post Skirt") {
      this.setState({
        skirt: imgData["Post Skirt"][`${name}`]
      });
    } else if (activeTab === "Cap Rail") {
      this.setState({
        crown: imgData["Cap Rail"][`${name}`],
        two: imgData["Cap Rail"][`Two${name}`],
        one: imgData["Cap Rail"][`One${name}`]
      });
    } else if (activeTab === "Baluster") {
      this.setState({
        trex: imgData["Baluster"][`Trex${name}`],
        aluminum: imgData["Baluster"][`Aluminum${name}`]
      });
    } else if (activeTab === "Border") {
      this.setState({
        border: imgData["Border"][`Border${name}`]
      });
    } else if (activeTab === "Fascia") {
      this.setState({
        fascia: imgData["Fascia"][`Fascia${name}`]
      });
    } else if (activeTab === "Rail") {
      this.setState({
        rail: imgData["Rail"][`Rail${name}`]
      });
    }
  };

  toggleStylePost = () => {
    if (this.state.shortStyle === true) {
      this.setState({
        shortStyle: false,
        tallStyle: true
      });
    } else {
      this.setState({
        shortStyle: true,
        tallStyle: false
      });
    }
  };

  toggleStyleBalusters1 = () => {
    this.setState({
      compositeStyle: true,
      aluminumStyle: false,
      ironStyle: false,
      postToggle: false,
      hidePostCaps: false,
      compositePostStyle: true,
      ironPostStyle: false
    });
  };
  toggleStyleBalusters2 = () => {
    this.setState({
      compositeStyle: false,
      aluminumStyle: true,
      ironStyle: false,
      postToggle: false,
      hidePostCaps: false,
      compositePostStyle: true,
      ironPostStyle: false
    });
  };
  toggleStyleBalusters3 = () => {
    this.setState({
      compositeStyle: false,
      aluminumStyle: false,
      ironStyle: true,
      postToggle: true
    });
  };

  togglePostStyle = () => {
    if (this.state.compositePostStyle === true) {
      this.setState({
        compositePostStyle: false,
        ironPostStyle: true,
        hidePostCaps: true
      });
    } else {
      this.setState({
        ironPostStyle: false,
        compositePostStyle: true,
        hidePostCaps: false
      });
    }
  };

  toggleStylePostCap = () => {
    if (this.state.flatStyle === true) {
      this.setState({
        flatStyle: false,
        pyramidStyle: true
      });
    } else {
      this.setState({
        flatStyle: true,
        pyramidStyle: false
      });
    }
  };

  toggleStyleCaps1 = () => {
    this.setState({
      oneStyle: true,
      twoStyle: false,
      crownStyle: false
    });
  };
  toggleStyleCaps2 = () => {
    this.setState({
      oneStyle: false,
      twoStyle: true,
      crownStyle: false
    });
  };
  toggleStyleCaps3 = () => {
    this.setState({
      oneStyle: false,
      twoStyle: false,
      crownStyle: true
    });
  };

  render() {
    const clicked = {
      backgroundColor: "green",
      color: "white"
    };

    const notClicked = {
      backgroundColor: "white",
      color: "black"
    };

    const clickedBtn1 = this.state.oneStyle ? clicked : notClicked;
    const clickedBtn11 = this.state.twoStyle ? clicked : notClicked;
    const clickedBtn111 = this.state.crownStyle ? clicked : notClicked;

    const clickedBtn2 = this.state.compositeStyle ? clicked : notClicked;
    const clickedBtn22 = this.state.aluminumStyle ? clicked : notClicked;
    const clickedBtn222 = this.state.ironStyle ? clicked : notClicked;

    const clickedBtn3 = this.state.flatStyle ? clicked : notClicked;
    const clickedBtn33 = this.state.pyramidStyle ? clicked : notClicked;

    const clickedBtn4 =
      this.state.compositePostStyle === true ? clicked : notClicked;
    const clickedBtn44 =
      this.state.ironPostStyle === true ? clicked : notClicked;

    const { tabs } = this.state;
    return (
      <div className="container">
        {/* Main image up top */}
        <h1 style={{ marginBottom: "40px" }}>Design Your Own Railing</h1>

        <div className="top-section">
          <div className="fence-options">
            <h3>Pick your railing options below:</h3>

            <div className="options">
              <h4 className="option-title">Baluster:</h4>
              <div className="option-container">
                <div
                  className="option"
                  style={clickedBtn2}
                  onClick={this.toggleStyleBalusters1}
                >
                  Composite
                </div>
                <div
                  className="option"
                  style={clickedBtn22}
                  onClick={this.toggleStyleBalusters2}
                >
                  Aluminum
                </div>
                <div
                  className="option"
                  style={clickedBtn222}
                  onClick={this.toggleStyleBalusters3}
                >
                  Iron
                </div>
              </div>
            </div>

            <div className={this.state.postToggle ? "options" : "none"}>
              <h4 className="option-title">Post Style:</h4>
              <div className="option-container">
                <div
                  className="option"
                  style={clickedBtn4}
                  onClick={this.togglePostStyle}
                >
                  Composite
                </div>
                <div
                  className="option"
                  style={clickedBtn44}
                  onClick={this.togglePostStyle}
                >
                  Iron
                </div>
              </div>
            </div>

            <div className="options">
              <h4 className="option-title">Cap Rail:</h4>
              <div className="option-container">
                <div
                  className="option"
                  style={clickedBtn111}
                  onClick={this.toggleStyleCaps3}
                >
                  Crown Rail
                </div>
                <div
                  className={this.state.ironPostStyle ? "none" : "option"}
                  style={clickedBtn1}
                  onClick={this.toggleStyleCaps1}
                >
                  1x6 Cap Rail
                </div>
                <div
                  className="option"
                  style={clickedBtn11}
                  onClick={this.toggleStyleCaps2}
                >
                  2x4 Cap Rail
                </div>
              </div>
            </div>

            <div
              className={
                this.state.hidePostCaps || this.state.oneStyle
                  ? "none"
                  : "options"
              }
            >
              <h4 className="option-title">Post Cap:</h4>
              <div className="option-container">
                <div
                  className="option"
                  style={clickedBtn3}
                  onClick={this.toggleStylePostCap}
                >
                  Flat
                </div>
                <div
                  className="option"
                  style={clickedBtn33}
                  onClick={this.toggleStylePostCap}
                >
                  Pyramid
                </div>
              </div>
            </div>
          </div>

          {/*FENCE IMAGE*/}
          <div className="fence-container">
            {/*Rails*/}
            <img
              src={this.state.trex}
              alt="trex white"
              className={this.state.compositeStyle ? "trex" : "none"}
            />
            <img
              src={this.state.aluminum}
              alt="Iron bronze"
              className={this.state.aluminumStyle ? "iron" : "none"}
            />
            <img
              src={this.state.iron}
              alt="Iron bronze"
              className={this.state.ironStyle ? "iron" : "none"}
            />
            <img
              src={this.state.ironPosts}
              alt="Iron Posts"
              className={this.state.hidePostCaps ? "iron-posts" : "none"}
            />
            <img
              src={this.state.sPost}
              alt="Short post charcoal"
              className={
                this.state.shortStyle && !this.state.hidePostCaps
                  ? "short-post"
                  : "none"
              }
            />
            <img
              src={this.state.tPost}
              alt="Tall Post charcoal"
              className={
                this.state.tallStyle && !this.state.hidePostCaps
                  ? "tall-post"
                  : "none"
              }
            />

            <img
              src={this.state.ironStyle ? this.state.ironRail : this.state.rail}
              alt="Rail White"
              className="rail"
            />
            <img
              src={this.state.skirt}
              alt="Skirt White"
              className={this.state.hidePostCaps ? "none" : "skirt"}
            />
            <img
              src={this.state.border}
              alt="Border Firepit"
              className="fence-border"
            />
            <img
              src={this.state.pyramid}
              alt="Pyramid Charcoal"
              className={
                this.state.pyramidStyle &&
                !this.state.hidePostCaps &&
                !this.state.oneStyle
                  ? "pyramid"
                  : "none"
              }
            />
            <img
              src={this.state.flat}
              alt="Flat Charcoal"
              className={
                this.state.flatStyle &&
                !this.state.hidePostCaps &&
                !this.state.oneStyle
                  ? "flat"
                  : "none"
              }
            />
            <img
              src={this.state.crown}
              alt="Crown firepit"
              className={this.state.crownStyle ? "crown" : "none"}
            />
            <img
              src={this.state.one}
              alt="charcoal one"
              className={
                this.state.oneStyle && !this.state.ironPostStyle
                  ? "one"
                  : "none"
              }
            />
            <img
              src={this.state.two}
              alt="island mist two"
              className={this.state.twoStyle ? "two" : "none"}
            />
            <img src={this.state.deck} alt="Deck firepit" className="deck" />
            <img
              src={this.state.fascia}
              alt="Fascia Firepit"
              className="fascia"
            />
          </div>
        </div>

        <Tabs>
          <TabList
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "230px"
            }}
          >
            {tabs.map((tab, idx) => {
              return (
                <Tab onClick={() => this.changeItem(tab.name)} key={idx}>
                  {tab.name}
                </Tab>
              );
            })}
          </TabList>

          {/*changeItem parameter should be the tab that's selected.*/}
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>

          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
          <TabPanel>
            <TabColors handleTabColors={this.handleTabColors} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Fence;
