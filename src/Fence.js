import React, { Component } from "react";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Fence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Fence and Deck Utah</h1>
        <Tabs>
          <TabList
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <Tab>Post Cap</Tab>
            <Tab>Post Sleeve</Tab>
            <Tab>Post Skirt</Tab>
            <Tab>Cap Rail</Tab>
            <Tab>Top Rail</Tab>
            <Tab>Bottom Rail</Tab>
            <Tab>Baluster</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 6</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 7</h2>
          </TabPanel>
        </Tabs>
        {/*<div className="fence">
          <h2> Fence </h2>
          <img src={fence} alt="fence-1" className="fence-img" />
        </div>

        <div className="builder">
          <div className="top-rails">
            <h2>1x6</h2>
            <img src={oneSix} alt="1x6-1" className="top-rail-img" />
            <h2>2x4</h2>
            <img src={twoFour} alt="2x4-1" className="top-rail-img"/>
          </div>
          <div className="crown-rail">
            <h2> Crown Rails</h2>
            <img src={crownRail} alt="crownRail-1" className="crown-rail-img" />
          </div>

          <div className="flat-cap">
            <h2> Flat Cap </h2>
            <img src={flatCap} alt="flatCap-1" className="flat-cap-img" />
          </div>

          <div className="iron-baluster">
            <h2> Iron Baluster </h2>
            <img
              src={whiteIron}
              alt="iron-baluster-1"
              className="iron-baluster-img"
            />
          </div>

          <div className="baluster">
            <h2> Baluster </h2>
            <img src={baluster} alt="baluster" className="baluster-img" />
          </div>

          <div className="iron-post">
            <h2> Iron Post </h2>
            <img src={ironPost} alt="iron-post" className="iron-post-img" />
          </div>

          <div className="iron-rail">
            <h2> Iron Rail </h2>
            <img src={ironRail} alt="iron-rail" className="iron-rail-img" />
          </div>

          <div className="pyramid-cap">
            <h2> Pyramid Cap </h2>
            <img
              src={pyramidCap}
              alt="pyramid-cap"
              className="pyramid-cap-img"
            />
          </div>

          <div className="short-post">
            <h2> Short Post</h2>
            <img src={shortPost} alt="short-post" className="short-post-img" />
          </div>

          <div className="skirt">
            <h2> Skirts</h2>
            <img src={skirt} alt="skirt" className="skirt-img" />
          </div>

          <div className="tall-post">
            <h2> Tall Post </h2>
            <img src={tallPost} alt="tall-post" className="tall-post-img" />
          </div>

          <div className="rail">
            <h2> Rail </h2>
            <img src={rail} alt="rail" className="rail-img" />
          </div>

          <div className="deck-border">
            <h2> Deck Border</h2>
            <img
              src={deckBorder}
              alt="deck-border-1"
              className="deck-border-img"
            />
          </div>

          <div className="deck">
            <h2> Decks</h2>
            <img src={deck} alt="deck-1" className="deck-img" />
          </div>
    </div>*/}
      </div>
    );
  }
}

export default Fence;
