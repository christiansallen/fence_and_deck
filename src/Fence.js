import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabColors from "./TabColors.js";

//1x6 Cap Rails
import OneCharcoal from "./Images/1x6_Charcoal.png";
import OneFirepit from "./Images/1x6_Firepit.png";
import OneGravelpath from "./Images/1x6_Gravelpath.png";
import OneHavanagold from "./Images/1x6_Havanagold.png";
import OneIslandmist from "./Images/1x6_Islandmist.png";
import OneLavarock from "./Images/1x6_Lavarock.png";
import OneMaderia from "./Images/1x6_Maderia.png";
import OnePebblegrey from "./Images/1x6_Pebblegrey.png";
import OneRopeswing from "./Images/1x6_Ropeswing.png";
import OneSaddle from "./Images/1x6_Saddle.png";
import OneSpicedrum from "./Images/1x6_Spicedrum.png";
import OneTikitorch from "./Images/1x6_Tikitorch.png";
import OneTreehouse from "./Images/1x6_Treehouse.png";
import OneVintagelantern from "./Images/1x6_Vintagelantern.png";
import OneWhite from "./Images/1x6_White.png";
import OneWinchestergray from "./Images/1x6_Winchestergray.png";
import OneWoodlandbrown from "./Images/1x6_Woodlandbrown.png";

//2x4 Cap Rails
import TwoHavanagold from "./Images/2x4_Havanagold.png";
import TwoIslandmist from "./Images/2x4_Islandmist.png";
import TwoLavarock from "./Images/2x4_Lavarock.png";
import TwoSpicedrum from "./Images/2x4_Spicedrum.png";
import TwoTikitorch from "./Images/2x4_Tikitorch.png";

//Borders
import BorderBeachdune from "./Images/Border_Beachdune.png";
import BorderClamshell from "./Images/Border_Clamshell.png";
import BorderCoastalbluff from "./Images/Border_Coastalbluff.png";
import BorderFirepit from "./Images/Border_Firepit.png";
import BorderFoggywharf from "./Images/Border_Foggywharf.png";
import BorderGravelpath from "./Images/Border_Gravelpath.png";
import BorderHavanagold from "./Images/Border_Havanagold.png";
import BorderIslandmist from "./Images/Border_Islandmist.png";
import BorderMaderia from "./Images/Border_Maderia.png";
import BorderPebblegray from "./Images/Border_Pebblegray.png";
import BorderRockyharbor from "./Images/Border_Rockyharbor.png";
import BorderRopeswing from "./Images/Border_Ropeswing.png";
import BorderSaddle from "./Images/Border_Saddle.png";
import BorderSpicedrum from "./Images/Border_Spicedrum.png";
import BorderSunsetcove from "./Images/Border_Sunsetcove.png";
import BorderTikitorch from "./Images/Border_Tikitorch.png";
import BorderToastedsand from "./Images/Border_Toastedsand.png";
import BorderTreehouse from "./Images/Border_Treehouse.png";
import BorderVintagelantern from "./Images/Border_Vintagelantern.png";
import BorderWinchestergray from "./Images/Border_Winchestergray.png";
import BorderWoodlandbrown from "./Images/Border_Woodlandbrown.png";

//Crowns
import CrownFirepit from "./Images/Crown_Firepit.png";
import CrownGravelpath from "./Images/Crown_Gravelpath.png";
import CrownHavanagold from "./Images/Crown_Havanagold.png";
import CrownIslandmist from "./Images/Crown_Islandmist.png";
import CrownLavarock from "./Images/Crown_Lavarock.png";
import CrownRopeswing from "./Images/Crown_Ropeswing.png";
import CrownSpicedrum from "./Images/Crown_Spicedrum.png";
import CrownTikitorch from "./Images/Crown_Tikitorch.png";
import CrownTreehouse from "./Images/Crown_Treehouse.png";
import CrownVintagelantern from "./Images/Crown_Vintagelantern.png";

//Decks
import DeckBeachdune from "./Images/Deck_Beachdune.png";
import DeckClamshell from "./Images/Deck_Clamshell.png";
import DeckCoastalbluff from "./Images/Deck_Coastalbluff.png";
import DeckFirepit from "./Images/Deck_Firepit.png";
import DeckFoggywharf from "./Images/Deck_Foggywharf.png";
import DeckGravelpath from "./Images/Deck_Gravelpath.png";
import DeckHavanagold from "./Images/Deck_Havanagold.png";
import DeckLavarock from "./Images/Deck_Lavarock.png";
import DeckPebblegray from "./Images/Deck_Pebblegray.png";
import DeckRockyharbor from "./Images/Deck_Rockyharbor.png";
import DeckRopeswing from "./Images/Deck_Ropeswing.png";
import DeckSaddle from "./Images/Deck_Saddle.png";
import DeckSpicedrum from "./Images/Deck_Spicedrum.png";
import DeckSunsetcove from "./Images/Deck_Sunsetcove.png";
import DeckTikitorch from "./Images/Deck_Tikitorch.png";
import DeckToastedsand from "./Images/Deck_Toastedsand.png";
import DeckTreehouse from "./Images/Deck_Treehouse.png";
import DeckVintagelantern from "./Images/Deck_Vintagelantern.png";
import DeckWinchestergray from "./Images/Deck_Winchestergray.png";
import DeckWoodlandbrown from "./Images/Deck_Woodlandbrown.png";
import DeckIslandmist from "./Images/Deck_Islandmist.png";
import DeckMaderia from "./Images/Deck_Maderia.png";

//Fascias
import FasciaBeachdune from "./Images/Fascia_Beachdune.png";
import FasciaClamshell from "./Images/Fascia_Clamshell.png";
import FasciaCoastalbluff from "./Images/Fascia_Coastalbluff.png";
import FasciaFirepit from "./Images/Fascia_Firepit.png";
import FasciaFoggywharf from "./Images/Fascia_Foggywharf.png";
import FasciaGravelpath from "./Images/Fascia_Gravelpath.png";
import FasciaHavanagold from "./Images/Fascia_Havanagold.png";
import FasciaLavarock from "./Images/Fascia_Lavarock.png";
import FasciaPebblegray from "./Images/Fascia_Pebblegray.png";
import FasciaRockyharbor from "./Images/Fascia_Rockyharbor.png";
import FasciaRopeswing from "./Images/Fascia_Ropeswing.png";
import FasciaSaddle from "./Images/Fascia_Saddle.png";
import FasciaSpicedrum from "./Images/Fascia_Spicedrum.png";
import FasciaSunsetcove from "./Images/Fascia_Sunsetcove.png";
import FasciaTikitorch from "./Images/Fascia_Tikitorch.png";
import FasciaToastedsand from "./Images/Fascia_Toastedsand.png";
import FasciaTreehouse from "./Images/Fascia_Treehouse.png";
import FasciaVintagelantern from "./Images/Fascia_Vintagelantern.png";
import FasciaWinchestergray from "./Images/Fascia_Winchestergray.png";
import FasciaWoodlandbrown from "./Images/Fascia_Woodlandbrown.png";
import FasciaIslandmist from "./Images/Fascia_Islandmist.png";
import FasciaMaderia from "./Images/Fascia_Maderia.png";

//Flats
import FlatCharcoal from "./Images/Flat_Charcoal.png";
import FlatFirepit from "./Images/Flat_Firepit.png";
import FlatGravelpath from "./Images/Flat_Gravelpath.png";
import FlatHavanagold from "./Images/Flat_Havanagold.png";
import FlatWhite from "./Images/Flat_White.png";
import FlatRopeswing from "./Images/Flat_Ropeswing.png";
import FlatVintagelantern from "./Images/Flat_Vintagelantern.png";

//Iron
import IronBronze from "./Images/Iron_Bronze.png";
import IronCharcoal from "./Images/Iron_Charcoal.png";
import IronPosts from "./Images/Iron_Posts.png";
import IronWhite from "./Images/Iron_White.png";
import IronGuardRail from "./Images/IronGuardRail.png";

//Pyramid
import PyramidCharcoal from "./Images/Pyramid_Charcoal.png";
import PyramidFirepit from "./Images/Pyramid_Firepit.png";
import PyramidGravelpath from "./Images/Pyramid_Gravelpath.png";
import PyramidHavanagold from "./Images/Pyramid_Havanagold.png";
import PyramidWhite from "./Images/Pyramid_White.png";
import PyramidRopeswing from "./Images/Pyramid_Ropeswing.png";
import PyramidVintagelantern from "./Images/Pyramid_Vintagelantern.png";

//Rail
import RailCharcoal from "./Images/Rail_Charcoal.png";
import RailFirepit from "./Images/Rail_Firepit.png";
import RailGravelpath from "./Images/Rail_Gravelpath.png";
import RailHavanagold from "./Images/Rail_Havanagold.png";
import RailWhite from "./Images/Rail_White.png";
import RailRopeswing from "./Images/Rail_Ropeswing.png";
import RailVintagelantern from "./Images/Rail_Vintagelantern.png";

//Skirt
import SkirtCharcoal from "./Images/Skirt_Charcoal.png";
import SkirtFirepit from "./Images/Skirt_Firepit.png";
import SkirtGravelpath from "./Images/Skirt_Gravelpath.png";
import SkirtHavanagold from "./Images/Skirt_Havanagold.png";
import SkirtWhite from "./Images/Skirt_White.png";
import SkirtRopeswing from "./Images/Skirt_Ropeswing.png";
import SkirtVintagelantern from "./Images/Skirt_Vintagelantern.png";

//Short Post
import SpostCharcoal from "./Images/Spost_Charcoal.png";
import SpostFirepit from "./Images/Spost_Firepit.png";
import SpostGravelpath from "./Images/Spost_Gravelpath.png";
import SpostHavanagold from "./Images/Spost_Havanagold.png";
import SpostWhite from "./Images/Spost_White.png";
import SpostRopeswing from "./Images/Spost_Ropeswing.png";
import SpostVintagelantern from "./Images/Spost_Vintagelantern.png";

//Tall Post
import TpostCharcoal from "./Images/Tpost_Charcoal.png";
import TpostFirepit from "./Images/Tpost_Firepit.png";
import TpostGravelpath from "./Images/Tpost_Gravelpath.png";
import TpostHavanagold from "./Images/Tpost_Havanagold.png";
import TpostWhite from "./Images/Tpost_White.png";
import TpostRopeswing from "./Images/Tpost_Ropeswing.png";
import TpostVintagelantern from "./Images/Tpost_Vintagelantern.png";

//Trex Fences
import TrexCharcoal from "./Images/Trex_Charcoal.png";
import TrexFirepit from "./Images/Trex_Firepit.png";
import TrexGravelpath from "./Images/Trex_Gravelpath.png";
import TrexHavanagold from "./Images/Trex_Havanagold.png";
import TrexWhite from "./Images/Trex_White.png";
import TrexRopeswing from "./Images/Trex_Ropeswing.png";
import TrexLavarock from "./Images/Trex_Lavarock.png";

import "./Fence.css";

const tabs = [
  { name: "PostCap" },
  { name: "PostSleeve" },
  { name: "PostSkirt" },
  { name: "CapRail" },
  { name: "Rail" },
  { name: "Baluster" },
  { name: "Deck" },
  { name: "Border" },
  { name: "Fascia" }
];

const OneImg = [
  { name: "OneCharcoal" },
  { name: "OneFirepit" },
  { name: "OneGravelpath" },
  { name: "OneHavanagold" },
  { name: "OneIslandmist" },
  { name: "OneLavarock" },
  { name: "OneMaderia" },
  { name: "OnePebblegrey" },
  { name: "OneRopeswing" },
  { name: "OneSaddle" },
  { name: "OneSpicedrum" },
  { name: "OneTikitorch" },
  { name: "OneTreehouse" },
  { name: "OneVintagelantern" },
  { name: "OneWhite" },
  { name: "OneWinchestergray" },
  { name: "OneWoodlandbrown" }
];

const TwoImg = [
  { name: "TwoHavanagold" },
  { name: "TwoIslandmist" },
  { name: "TwoLavarock" },
  { name: "TwoSpicedrum" },
  { name: "TwoTikitorch" }
];

const BorderImg = [
  { name: "BorderBeachdune" },
  { name: "BorderClamshell" },
  { name: "BorderCoastalbluff" },
  { name: "BorderFirepit" },
  { name: "BorderFoggywharf" },
  { name: "BorderGravelpath" },
  { name: "BorderHavanagold" },
  { name: "BorderLavarock" },
  { name: "BorderPebblegray" },
  { name: "BorderRockyharbor" },
  { name: "BorderRopeswing" },
  { name: "BorderSaddle" },
  { name: "BorderSpicedrum" },
  { name: "BorderSunsetcove" },
  { name: "BorderTikitorch" },
  { name: "BorderToastedsand" },
  { name: "BorderTreehouse" },
  { name: "BorderVintagelantern" },
  { name: "BorderWinchestergray" },
  { name: "BorderWoodlandbrown" },
  { name: "BorderIslandmist" },
  { name: "BorderMaderia" }
];

const CrownImg = [
  { name: "CrownCharcoal" },
  { name: "CrownFirepit" },
  { name: "CrownGravelpath" },
  { name: "CrownHavanagold" },
  { name: "CrownWhite" },
  { name: "CrownRopeswing" },
  { name: "CrownSpicedrum" },
  { name: "CrownTikitorch" },
  { name: "CrownTreehouse" },
  { name: "CrownVintagelantern" }
];

const DeckImg = [
  { name: "DeckBeachdune" },
  { name: "DeckClamshell" },
  { name: "DeckCoastalbluff" },
  { name: "DeckFirepit" },
  { name: "DeckFoggywharf" },
  { name: "DeckGravelpath" },
  { name: "DeckHavanagold" },
  { name: "DeckLavarock" },
  { name: "DeckPebblegray" },
  { name: "DeckRockyharbor" },
  { name: "DeckRopeswing" },
  { name: "DeckSaddle" },
  { name: "DeckSpicedrum" },
  { name: "DeckSunsetcove" },
  { name: "DeckTikitorch" },
  { name: "DeckToastedsand" },
  { name: "DeckTreehouse" },
  { name: "DeckVintagelantern" },
  { name: "DeckWinchestergray" },
  { name: "DeckWoodlandbrown" },
  { name: "DeckIslandmist" },
  { name: "DeckMaderia" }
];

const FasciaImg = [
  { name: "FasciaBeachdune" },
  { name: "FasciaClamshell" },
  { name: "FasciaCoastalbluff" },
  { name: "FasciaFirepit" },
  { name: "FasciaFoggywharf" },
  { name: "FasciaGravelpath" },
  { name: "FasciaHavanagold" },
  { name: "FasciaLavarock" },
  { name: "FasciaPebblegray" },
  { name: "FasciaRockyharbor" },
  { name: "FasciaRopeswing" },
  { name: "FasciaSaddle" },
  { name: "FasciaSpicedrum" },
  { name: "FasciaSunsetcove" },
  { name: "FasciaTikitorch" },
  { name: "FasciaToastedsand" },
  { name: "FasciaTreehouse" },
  { name: "FasciaVintagelantern" },
  { name: "FasciaWinchestergray" },
  { name: "FasciaWoodlandbrown" },
  { name: "FasciaIslandmist" },
  { name: "FasciaMaderia" }
];

const FlatsImg = [
  { name: "FlatsCharcoal" },
  { name: "FlatsFirepit" },
  { name: "FlatsGravelpath" },
  { name: "FlatsHavanagold" },
  { name: "FlatsWhite" },
  { name: "FlatsRopeswing" },
  { name: "FlatsVintagelantern" }
];

const IronImg = [
  { name: "IronBronze" },
  { name: "IronCharcoal" },
  { name: "IronPosts" },
  { name: "IronWhite" },
  { name: "IronGuardRail" }
];

const PyramidImg = [
  { name: "PyramidCharcoal" },
  { name: "PyramidFirepit" },
  { name: "PyramidGravelpath" },
  { name: "PyramidHavanagold" },
  { name: "PyramidWhite" },
  { name: "PyramidRopeswing" },
  { name: "PyramidVintagelantern" }
];

const RailImg = [
  { name: "RailCharcoal" },
  { name: "RailFirepit" },
  { name: "RailGravelpath" },
  { name: "RailHavanagold" },
  { name: "RailWhite" },
  { name: "RailRopeswing" },
  { name: "RailVintagelantern" }
];

const SkirtImg = [
  { name: "SkirtCharcoal" },
  { name: "SkirtFirepit" },
  { name: "SkirtGravelpath" },
  { name: "SkirtHavanagold" },
  { name: "SkirtWhite" },
  { name: "SkirtRopeswing" },
  { name: "SkirtVintagelantern" }
];

const SpostImg = [
  { name: "SpostCharcoal" },
  { name: "SpostFirepit" },
  { name: "SpostGravelpath" },
  { name: "SpostHavanagold" },
  { name: "SpostWhite" },
  { name: "SpostRopeswing" },
  { name: "SpostVintagelantern" }
];

const TpostImg = [
  { name: "TpostCharcoal" },
  { name: "TpostFirepit" },
  { name: "TpostGravelpath" },
  { name: "TpostHavanagold" },
  { name: "TpostWhite" },
  { name: "TpostRopeswing" },
  { name: "TpostVintagelantern" }
];

const TrexImg = [
  { name: "TrexCharcoal" },
  { name: "TrexFirepit" },
  { name: "TrexGravelpath" },
  { name: "TrexHavanagold" },
  { name: "TrexWhite" },
  { name: "TrexRopeswing" },
  { name: "TrexLavarock" }
];

class Fence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: OneCharcoal,
      two: TwoHavanagold,
      sPost: SpostWhite,
      tPost: TpostCharcoal,
      trex: TrexWhite,
      border: BorderBeachdune,
      crown: CrownIslandmist,
      flat: FlatCharcoal,
      deck: DeckBeachdune,
      fascia: FasciaBeachdune,
      iron: IronBronze,
      pyramid: PyramidWhite,
      rail: RailWhite,
      skirt: SkirtWhite,
      item: "",
      tabs,
      activeTab: "PostCap",
      oneStyle: true,
      twoStyle: false,
      compositeStyle: true,
      ironStyle: false,
      flatStyle: true,
      pyramidStyle: false
    };
  }

  buttonStyles1 = () => {
    if (this.state.oneStyle === true) {
      this.setState({ twoStyle: false });
    } else if (this.state.oneStyle === false) {
      this.setState({ twoStyle: true });
    }
  };

  buttonStyles2 = () => {
    if (this.state.compositeStyle === true) {
      this.setState({ ironStyle: false });
    } else if (this.state.compositeStyle === false) {
      this.setState({ ironStyle: true });
    }
  };

  buttonStyles3 = () => {
    if (this.state.flatStyle === true) {
      this.setState({ pyramidStyle: false });
    } else if (this.state.flatStyle === false) {
      this.setState({ pyramidStyle: true });
    }
  };

  changeItem = name => {
    this.setState({
      activeTab: name
    });
  };

  handleTabColors = name => {
    const { activeTab } = this.state;
    // get index or name of tabcolors
    // check which tab they're in
    this.setState(prevState => ({
      activeTab: prevState.activeTab
    }));
    console.log(activeTab);
    console.log(name);
    console.log(activeTab + name);
  };

  toggleStyle = () => {
    console.log("toggled");
    this.setState(prevState => ({
      oneStyle: !prevState.oneStyle
    }));
    console.log(this.state.oneStyle);
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

    const clickedBtn = this.state.oneStyle
      ? clicked
      : this.state.twoStyle === true && this.state.oneStyle === false;
    const clickedBtn2 = this.state.compositeStyle
      ? clicked
      : this.state.ironStyle === true;
    const clickedBtn3 = this.state.flatStyle
      ? clicked
      : this.state.pyramidStyle === true;

    const { tabs } = this.state;
    return (
      <div className="container">
        {/* Main image up top */}
        <h1 style={{ marginBottom: "40px" }}>Fence and Deck Utah</h1>

        <div className="top-section">
          <div className="fence-options">
            <h3>Pick your fence options below:</h3>
            <div className="options">
              <h4 className="option-title">Posts:</h4>
              <div className="option-container">
                <div
                  className="option"
                  style={clickedBtn}
                  onClick={this.toggleStyle}
                >
                  1x6 Posts
                </div>
                <div className="option">2x4 Posts</div>
              </div>
            </div>
            <div className="options">
              <h4 className="option-title">Balusters:</h4>
              <div className="option-container">
                <div className="option" style={clickedBtn2}>
                  Composite
                </div>
                <div className="option">Iron</div>
              </div>
            </div>
            <div className="options">
              <h4 className="option-title">Post Cap:</h4>
              <div className="option-container">
                <div className="option" style={clickedBtn3}>
                  Flat
                </div>
                <div className="option">Pyramid</div>
              </div>
            </div>
          </div>

          <div className="fence-container">
            <img src={this.state.trex} alt="trex white" className="trex" />
            <img
              src={this.state.sPost}
              alt="Short post charcoal"
              className="short-post"
            />

            <img src={this.state.rail} alt="Rail Charcoal" className="rail" />

            <img src={this.state.skirt} alt="Skirt White" className="skirt" />
            <img
              src={this.state.border}
              alt="Border Firepit"
              className="fence-border"
            />

            <img
              src={this.state.pyramid}
              alt="Pyramid Charcoal"
              className="pyramid"
            />

            <img src={this.state.flat} alt="Flat Charcoal" className="flat" />

            <img src={this.state.crown} alt="Crown firepit" className="crown" />

            <img src={this.state.deck} alt="Deck firepit" className="deck" />
            <img
              src={this.state.fascia}
              alt="Fascia Firepit"
              className="fascia"
            />
          </div>
        </div>

        <img src={this.state.iron} alt="Iron bronze" className="iron" />

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

        {/*<img src={this.state.cap} alt="charcoal cap" className='cap'/>
        <img src={this.state.tPost} alt="Tall Post charcoal" />*/}
      </div>
    );
  }
}

export default Fence;
