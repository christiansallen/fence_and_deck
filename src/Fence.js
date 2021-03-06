import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabColors from "./TabColors.js";

import { tabs, imgData } from "./FenceData";
import Logo from "./Images/logo.png";

//Needed imports
import AluminumCharcoal from "./Images/Iron_Charcoal.png";
import IronGuardRail from "./Images/IronGuardRail.png";
import IronGuardRail2 from "./Images/IronGuardRail2.png";
import IronPosts from "./Images/Iron_Posts.png";

class Fence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: imgData["Cap Rail"]["OneHavanagold"],
      two: imgData["Cap Rail"]["TwoHavanagold"],
      crown: imgData["Cap Rail"]["CrownHavanagold"],
      sPost: imgData["Post Sleeve"]["SpostWhite"],
      ironPosts: IronPosts,
      trex: imgData["Baluster"]["TrexWhite"],
      aluminum: imgData["Baluster"]["AluminumWhite"],
      iron: AluminumCharcoal,
      flat: imgData["Cap/Skirt"]["FlatWhite"],
      pyramid: imgData["Cap/Skirt"]["PyramidWhite"],
      skirt: imgData["Post Skirt"]["SkirtWhite"],
      rail: imgData["Rails"]["RailsWhite"],
      ironRail: IronGuardRail,
      ironRail2: IronGuardRail2,
      border: imgData["Border"]["BorderFoggywharf"],
      deck: imgData["Deck"]["DeckFoggywharf"],
      fascia: imgData["Fascia"]["FasciaFoggywharf"],

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
      hidePostCaps: false,
      noneStyle: false,
      transcendStyle: true,
      enhanceStyle: false,
      selectStyle: false,
      tabIndex: 0,

      tabs,
      activeColor: "",
      deckAlt: "",
      activeTab: "Cap/Skirt",

      capSkirtColor: "White",
      postSleeveColor: "White",
      capRailColor: "Havana Gold",
      railsColor: "White",
      balusterColor: "White",
      deckColor: "(Enhance) Foggy Wharf",
      borderColor: "(Enhance) Foggy Wharf",
      fasciaColor: "(Enhance) Foggy Wharf"
    };
  }

  //Active Tab changes color rendering. Need to figure out how to match tab selected with Active Tab
  changeItem = name => {
    this.setState({
      activeTab: name
    });
  };

  tabColor = (active, color) => {
    this.setState({ activeColor: color });

    // eslint-disable-next-line default-case
    switch (active) {
      case "Cap/Skirt":
        this.setState({ capSkirtColor: color });
        break;
      case "Post Sleeve":
        this.setState({ postSleeveColor: color });
        break;
      case "Cap Rail":
        this.setState({ capRailColor: color });
        break;
      case "Rails":
        this.setState({ railsColor: color });
        break;
      case "Baluster":
        this.setState({ balusterColor: color });
        break;
      case "Deck":
        this.setState({ deckColor: color });
        break;
      case "Border":
        this.setState({ borderColor: color });
        break;
      case "Fascia":
        this.setState({ fasciaColor: color });
        break;
    }
  };

  handleTabColors = name => {
    const { activeTab, aluminumStyle } = this.state;
    if (activeTab === "Post Sleeve") {
      this.setState({
        sPost: imgData["Post Sleeve"][`Spost${name}`]
      });
    } else if (activeTab === "Deck") {
      this.setState({
        deck: imgData["Deck"][`Deck${name}`]
      });
    } else if (activeTab === "Cap/Skirt") {
      this.setState({
        flat: imgData["Cap/Skirt"][`Flat${name}`],
        pyramid: imgData["Cap/Skirt"][`Pyramid${name}`],
        skirt: imgData["Post Skirt"][`Skirt${name}`]
      });
    } else if (activeTab === "Cap Rail") {
      this.setState({
        crown: imgData["Cap Rail"][`Crown${name}`],
        two: imgData["Cap Rail"][`Two${name}`],
        one: imgData["Cap Rail"][`One${name}`]
      });
    } else if (activeTab === "Baluster" && aluminumStyle === true) {
      this.setState({
        aluminum: imgData["Baluster"][`Aluminum${name}`]
      });
    } else if (activeTab === "Baluster" && aluminumStyle === false) {
      this.setState({
        trex: imgData["Baluster"][`Trex${name}`]
      });
    } else if (activeTab === "Border") {
      this.setState({
        border: imgData["Border"][`Border${name}`]
      });
    } else if (activeTab === "Fascia") {
      this.setState({
        fascia: imgData["Fascia"][`Fascia${name}`]
      });
    } else if (activeTab === "Rails") {
      this.setState({
        rail: imgData["Rails"][`Rails${name}`]
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
      ironPostStyle: false,
      activeTab: "Baluster",
      tabIndex: 3
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
      ironPostStyle: false,
      activeTab: "Baluster",
      tabIndex: 3
    });
  };
  toggleStyleBalusters3 = () => {
    this.setState({
      compositeStyle: false,
      aluminumStyle: false,
      ironStyle: true,
      postToggle: true,
      activeTab: "Cap/Skirt",
      tabIndex: 0
    });
  };

  togglePostStyle = () => {
    if (this.state.compositePostStyle === true) {
      this.setState({
        compositePostStyle: false,
        ironPostStyle: true,
        hidePostCaps: true,
        noneStyle: true,
        twoStyle: false,
        activeTab: "Deck",
        tabIndex: 0
      });
    } else {
      this.setState({
        ironPostStyle: false,
        compositePostStyle: true,
        hidePostCaps: false,
        noneStyle: false,
        oneStyle: true,
        twoStyle: false,
        activeTab: "Post Sleeve",
        tabIndex: 1
      });
    }
  };

  toggleStylePostCap = () => {
    if (this.state.flatStyle === true) {
      this.setState({
        flatStyle: false,
        pyramidStyle: true,
        activeTab: "Cap/Skirt",
        tabIndex: 0
      });
    } else {
      this.setState({
        flatStyle: true,
        pyramidStyle: false,
        activeTab: "Cap/Skirt",
        tabIndex: 0
      });
    }
  };

  toggleStyleCaps1 = () => {
    if (this.state.ironStyle) {
      this.setState({
        oneStyle: true,
        twoStyle: false,
        crownStyle: false,
        noneStyle: false,
        activeTab: "Cap Rail",
        tabIndex: 2
      });
    } else {
      this.setState({
        oneStyle: true,
        twoStyle: false,
        crownStyle: false,
        noneStyle: false,
        activeTab: "Cap Rail",
        tabIndex: 4
      });
    }
  };
  toggleStyleCaps2 = () => {
    if (this.state.ironStyle && !this.state.ironPostStyle) {
      this.setState({
        oneStyle: false,
        twoStyle: true,
        crownStyle: false,
        noneStyle: false,
        activeTab: "Cap Rail",
        tabIndex: 2
      });
    } else if (this.state.ironStyle && this.state.ironPostStyle) {
      this.setState({
        oneStyle: false,
        twoStyle: true,
        crownStyle: false,
        noneStyle: false,
        activeTab: "Cap Rail",
        tabIndex: 0
      });
    } else {
      this.setState({
        oneStyle: false,
        twoStyle: true,
        crownStyle: false,
        noneStyle: false,
        activeTab: "Cap Rail",
        tabIndex: 4
      });
    }
  };
  toggleStyleCaps3 = () => {
    this.setState({
      oneStyle: false,
      twoStyle: false,
      crownStyle: true,
      noneStyle: false,
      activeTab: "Rails",
      tabIndex: 2
    });
  };
  toggleStyleCaps4 = () => {
    this.setState({
      oneStyle: false,
      twoStyle: false,
      crownStyle: false,
      noneStyle: true,
      activeTab: "Deck",
      tabIndex: 0
    });
  };
  toggleDeckStyle1 = () => {
    if (this.state.ironStyle && this.state.compositePostStyle) {
      this.setState({
        transcendStyle: true,
        enhanceStyle: false,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 3
      });
    } else if (this.state.compositePostStyle && !this.state.crownStyle) {
      this.setState({
        transcendStyle: true,
        enhanceStyle: false,
        selectStyle: false,
        tabIndex: 5,
        activeTab: "Deck"
      });
    } else if (
      this.state.ironStyle &&
      this.state.ironPostStyle &&
      !this.state.twoStyle
    ) {
      this.setState({
        transcendStyle: true,
        enhanceStyle: false,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 0
      });
    } else if (
      this.state.ironStyle &&
      this.state.ironPostStyle &&
      this.state.twoStyle
    ) {
      this.setState({
        transcendStyle: true,
        enhanceStyle: false,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 1
      });
    } else {
      this.setState({
        transcendStyle: true,
        enhanceStyle: false,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 4
      });
    }
  };
  toggleDeckStyle2 = () => {
    if (this.state.ironStyle && this.state.compositePostStyle) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: true,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 3
      });
    } else if (this.state.compositePostStyle && !this.state.crownStyle) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: true,
        selectStyle: false,
        tabIndex: 5,
        activeTab: "Deck"
      });
    } else if (
      this.state.ironStyle &&
      this.state.ironPostStyle &&
      !this.state.twoStyle
    ) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: true,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 0
      });
    } else if (
      this.state.ironStyle &&
      this.state.ironPostStyle &&
      this.state.twoStyle
    ) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: true,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 1
      });
    } else {
      this.setState({
        transcendStyle: false,
        enhanceStyle: true,
        selectStyle: false,
        activeTab: "Deck",
        tabIndex: 4
      });
    }
  };
  toggleDeckStyle3 = () => {
    if (this.state.ironStyle && this.state.compositePostStyle) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: false,
        selectStyle: true,
        activeTab: "Deck",
        tabIndex: 3
      });
    } else if (this.state.compositePostStyle && !this.state.crownStyle) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: false,
        selectStyle: true,
        tabIndex: 5,
        activeTab: "Deck"
      });
    } else if (
      this.state.ironStyle &&
      this.state.ironPostStyle &&
      !this.state.twoStyle
    ) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: false,
        selectStyle: true,
        activeTab: "Deck",
        tabIndex: 0
      });
    } else if (
      this.state.ironStyle &&
      this.state.ironPostStyle &&
      this.state.twoStyle
    ) {
      this.setState({
        transcendStyle: false,
        enhanceStyle: false,
        selectStyle: true,
        activeTab: "Deck",
        tabIndex: 1
      });
    } else {
      this.setState({
        transcendStyle: false,
        enhanceStyle: false,
        selectStyle: true,
        activeTab: "Deck",
        tabIndex: 4
      });
    }
  };

  render() {
    const clicked = {
      backgroundColor: "#106C1A",
      color: "white"
    };

    const notClicked = {
      backgroundColor: "white",
      color: "black"
    };

    const summaryTab = {
      backgroundColor: "green",
      color: "white"
    };

    const clickedBtn1 = this.state.oneStyle ? clicked : notClicked;
    const clickedBtn11 = this.state.twoStyle ? clicked : notClicked;
    const clickedBtn111 = this.state.crownStyle ? clicked : notClicked;
    const clickedBtn1111 = this.state.noneStyle ? clicked : notClicked;

    const clickedBtn2 = this.state.compositeStyle ? clicked : notClicked;
    const clickedBtn22 = this.state.aluminumStyle ? clicked : notClicked;
    const clickedBtn222 = this.state.ironStyle ? clicked : notClicked;

    const clickedBtn3 = this.state.flatStyle ? clicked : notClicked;
    const clickedBtn33 = this.state.pyramidStyle ? clicked : notClicked;

    const clickedBtn4 =
      this.state.compositePostStyle === true ? clicked : notClicked;
    const clickedBtn44 =
      this.state.ironPostStyle === true ? clicked : notClicked;

    const clickedBtn5 = this.state.transcendStyle ? clicked : notClicked;
    const clickedBtn55 = this.state.enhanceStyle ? clicked : notClicked;
    const clickedBtn555 = this.state.selectStyle ? clicked : notClicked;

    const { tabs } = this.state;
    return (
      <div className="container">
        {/* Main image up top */}

        <div className="top-section">
          <div className="logo-container">
            <a href="https://www.fenceanddeckutah.com">
              <img src={Logo} alt="logo" className="logo" />
            </a>
          </div>
          <div className="fence-image-options">
            <div className="fence-options">
              <h3>1. Choose your railing options:</h3>

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
                    className={this.state.ironPostStyle ? "option" : "none"}
                    style={clickedBtn1111}
                    onClick={this.toggleStyleCaps4}
                  >
                    None
                  </div>
                  <div
                    className={
                      this.state.ironPostStyle ||
                      (this.state.compositePostStyle && this.state.ironStyle)
                        ? "none"
                        : "option"
                    }
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
              <h3 className="deck-title">2. Choose your decking options:</h3>
              <div className="options">
                <div className="option-container" style={{ width: "375px" }}>
                  <div
                    className="option"
                    style={clickedBtn5}
                    onClick={this.toggleDeckStyle1}
                  >
                    Transcend
                  </div>
                  <div
                    className="option"
                    style={clickedBtn555}
                    onClick={this.toggleDeckStyle3}
                  >
                    Select
                  </div>
                  <div
                    className="option"
                    style={clickedBtn55}
                    onClick={this.toggleDeckStyle2}
                  >
                    Enhance
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
                src={
                  this.state.ironStyle && this.state.compositePostStyle
                    ? this.state.ironRail
                    : this.state.ironStyle &&
                      this.state.ironPostStyle &&
                      !this.state.noneStyle
                    ? this.state.ironRail
                    : this.state.ironStyle &&
                      this.state.ironPostStyle &&
                      this.state.noneStyle
                    ? this.state.ironRail2
                    : this.state.rail
                }
                alt="Iron Rail"
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

              <div className="legend-nums">
                <p
                  className={
                    this.state.hidePostCaps
                      ? "hidden"
                      : this.state.oneStyle
                      ? "hidden"
                      : "legend-num-1"
                  }
                >
                  1----
                </p>
                <p
                  className={
                    this.state.ironPostStyle ? "hidden" : "legend-num-2"
                  }
                >
                  2-------
                </p>
                <p className={this.state.ironStyle ? "hidden" : "legend-num-3"}>
                  3-----------
                </p>
                <p className={this.state.ironStyle ? "hidden" : "legend-num-4"}>
                  4--------------
                </p>
                <p
                  className={
                    !this.state.crownStyle && !this.state.ironPostStyle
                      ? "legend-num-5"
                      : this.state.ironStyle &&
                        this.state.ironPostStyle &&
                        this.state.twoStyle
                      ? "legend-num-5"
                      : this.state.crownStyle
                      ? "hidden"
                      : this.state.ironPostStyle
                      ? "hidden"
                      : "legend-num-5"
                  }
                >
                  ----------5
                </p>
                <p className="legend-num-6">6------------------</p>
                <p className="legend-num-7">7-------</p>
                <p className="legend-num-8">8-------</p>
                <p
                  className={
                    this.state.ironPostStyle ? "hidden" : "legend-num-9"
                  }
                >
                  1------
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <h3 className="choose-color">3. Choose your color options:</h3>
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
            className="tabs-list"
          >
            <TabList>
              {(this.state.crownStyle || this.state.noneStyle) &&
              !this.state.ironStyle
                ? tabs
                    .filter(tab => tab.name !== "Cap Rail")
                    .map((tab, idx) => {
                      return (
                        <Tab
                          onClick={() => this.changeItem(tab.name)}
                          key={idx}
                          style={tab.name === "Summary" ? summaryTab : null}
                        >
                          {tab.name}
                          <br />
                          {tab.num}
                        </Tab>
                      );
                    })
                : (this.state.crownStyle || this.state.noneStyle) &&
                  this.state.ironStyle &&
                  !this.state.ironPostStyle
                ? tabs
                    .filter(
                      tab =>
                        tab.name !== "Rails" &&
                        tab.name !== "Cap Rail" &&
                        tab.name !== "Baluster"
                    )
                    .map((tab, idx) => {
                      return (
                        <Tab
                          onClick={() => this.changeItem(tab.name)}
                          key={idx}
                          style={tab.name === "Summary" ? summaryTab : null}
                        >
                          {tab.name}
                          <br />
                          {tab.num}
                        </Tab>
                      );
                    })
                : this.state.ironStyle && this.state.compositePostStyle
                ? tabs
                    .filter(
                      tab => tab.name !== "Rails" && tab.name !== "Baluster"
                    )
                    .map((tab, idx) => {
                      return (
                        <Tab
                          onClick={() => this.changeItem(tab.name)}
                          key={idx}
                          style={tab.name === "Summary" ? summaryTab : null}
                        >
                          {tab.name}
                          <br />
                          {tab.num}
                        </Tab>
                      );
                    })
                : (this.state.crownStyle || this.state.noneStyle) &&
                  this.state.ironStyle &&
                  this.state.ironPostStyle &&
                  this.state.noneStyle
                ? tabs
                    .filter(
                      tab =>
                        tab.name !== "Rails" &&
                        tab.name !== "Cap Rail" &&
                        tab.name !== "Baluster" &&
                        tab.name !== "Cap/Skirt" &&
                        tab.name !== "Post Sleeve"
                    )
                    .map((tab, idx) => {
                      return (
                        <Tab
                          onClick={() => this.changeItem(tab.name)}
                          key={idx}
                          style={tab.name === "Summary" ? summaryTab : null}
                        >
                          {tab.name}
                          <br />
                          {tab.num}
                        </Tab>
                      );
                    })
                : (this.state.crownStyle || this.state.twoStyle) &&
                  this.state.ironStyle &&
                  this.state.ironPostStyle
                ? tabs
                    .filter(
                      tab =>
                        tab.name !== "Rails" &&
                        tab.name !== "Baluster" &&
                        tab.name !== "Cap/Skirt" &&
                        tab.name !== "Post Sleeve"
                    )
                    .map((tab, idx) => {
                      return (
                        <Tab
                          onClick={() => this.changeItem(tab.name)}
                          key={idx}
                          style={tab.name === "Summary" ? summaryTab : null}
                        >
                          {tab.name}
                          <br />
                          {tab.num}
                        </Tab>
                      );
                    })
                : tabs.map((tab, idx) => {
                    return (
                      <Tab
                        onClick={() => this.changeItem(tab.name)}
                        key={idx}
                        style={tab.name === "Summary" ? summaryTab : null}
                      >
                        {tab.name}
                        <br />
                        {tab.num}
                      </Tab>
                    );
                  })}
            </TabList>

            {/*changeItem parameter should be the tab that's selected.*/}
            {tabs.map((tab, idx) => {
              return (
                <TabPanel key={idx}>
                  <TabColors
                    transcendStyle={this.state.transcendStyle}
                    enhanceStyle={this.state.enhanceStyle}
                    selectStyle={this.state.selectStyle}
                    handleTabColors={this.handleTabColors}
                    activeTab={this.state.activeTab}
                    aluminum={this.state.aluminumStyle}
                    oneStyle={this.state.oneStyle}
                    twoStyle={this.state.twoStyle}
                    crownStyle={this.state.crownStyle}
                    ironStyle={this.state.ironStyle}
                    ironPostStyle={this.state.ironPostStyle}
                    compositeStyle={this.state.compositeStyle}
                    capSkirtColor={this.state.capSkirtColor}
                    capRailColor={this.state.capRailColor}
                    postSleeveColor={this.state.postSleeveColor}
                    railsColor={this.state.railsColor}
                    balusterColor={this.state.balusterColor}
                    deckColor={this.state.deckColor}
                    fasciaColor={this.state.fasciaColor}
                    borderColor={this.state.borderColor}
                    tabColor={this.tabColor}
                    noneStyle={this.state.noneStyle}
                  />
                </TabPanel>
              );
            })}
          </Tabs>
          <div className="print-prompt">
            <button className="print-button" onClick={() => window.print()}>
              PRINT / SAVE
            </button>
            <p style={{ fontWeight: "bold", marginBottom: "40px" }}>
              *To save as a PDF, change the destination to "Save as PDF"*
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Fence;
