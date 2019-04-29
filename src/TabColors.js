import React, { Component } from "react";
import "react-tabs/style/react-tabs.css";

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

import "./Fence.css";

class TabColors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeColorItem = (props) => {
    this.props.tabColor();
  }

  render() {
    return (
      <div className="tab-container">
        <div className="block">
          <img src={RopeswingColor} alt="rope swing color" className="color"
          onClick={()=>this.changeColorItem('Ropeswing')}/>
          <p className="name">Rope Swing</p>
        </div>

        <div className="block">
          <img src={ToastedsandColor} alt="Toastedsand color" className="color" />
          <p className="name">Toasted Sand</p>
        </div>

        <div className="block">
          <img src={SaddleColor} alt="saddle color" className="color" />
          <p className="name">Saddle</p>
        </div>

        <div className="block">
          <img src={BeachduneColor} alt="Beachdune color" className="color" />
          <p className="name">Beach Dune</p>
        </div>

        <div className="block">
          <img
            src={HavanagoldColor}
            alt="havana gold color"
            className="color"
          />
          <p className="name">Havana Gold</p>
        </div>

        <div className="block">
          <img src={TikitorchColor} alt="tiki torch color" className="color" />
          <p className="name">Tiki Torch</p>
        </div>

        <div className="block">
          <img src={TreehouseColor} alt="tree house color" className="color" />
          <p className="name">Tree House</p>
        </div>

        <div className="block">
          <img src={SpicedrumColor} alt="spiced rum color" className="color" />
          <p className="name">Spiced Rum</p>
        </div>

        <div className="block">
          <img src={FirepitColor} alt="fire pit color" className="color" />
          <p className="name">Fire Pit</p>
        </div>

        <div className="block">
          <img src={LavarockColor} alt="lava rock color" className="color" />
          <p className="name">Lava Rock</p>
        </div>


        <div className="block">
          <img src={SunsetcoveColor} alt="Sunsetcove color" className="color" />
          <p className="name">Sunset Cove</p>
        </div>

        <div className="block">
          <img src={MaderiaColor} alt="maderia color" className="color" />
          <p className="name">Maderia</p>
        </div>

                <div className="block">
          <img
            src={WoodlandbrownColor}
            alt="Woodland Brown color"
            className="color"
          />
          <p className="name">Woodland Brown</p>
        </div>

        <div className="block">
          <img
            src={VintagelanternColor}
            alt="Vintage Lantern color"
            className="color"
          />
          <p className="name">Vintage Lantern</p>
        </div>

        <div className="block">
          <img src={WhiteColor} alt="White color" className="color" />
          <p className="name">Classic White</p>
        </div>

        <div className="block">
          <img src={FoggywharfColor} alt="Foggywharf color" className="color" />
          <p className="name">Foggy Wharf</p>
        </div>

        <div className="block">
          <img
            src={GravelpathColor}
            alt="gravel path color"
            className="color"
          />
          <p className="name">Gravel Path</p>
        </div>

        <div className="block">
          <img src={CoastalbluffColor} alt="Coastalbluff color" className="color" />
          <p className="name">Coastal Bluff</p>
        </div>

        <div className="block">
          <img src={RockyharborColor} alt="Rockyharbor color" className="color" />
          <p className="name">Rocky Harbor</p>
        </div>

        <div className="block">
          <img
            src={IslandmistColor}
            alt="island mist color"
            className="color"
          />
          <p className="name">Island Mist</p>
        </div>

        <div className="block">
          <img
            src={PebblegreyColor}
            alt="pebble grey color"
            className="color"
          />
          <p className="name">Pebble Grey</p>
        </div>

        <div className="block">
          <img src={ClamshellColor} alt="Clamshell color" className="color" />
          <p className="name">Clamshell</p>
        </div>

        <div className="block">
          <img
            src={WinchestergrayColor}
            alt="Winchester Gray color"
            className="color"
          />
          <p className="name">Winchester Gray</p>
        </div>

        <div className="block">
          <img src={CharcoalColor} alt="charcoal color" className="color" />
          <p className="name">Charcoal</p>
        </div>
 
      </div>
    );
  }
}

export default TabColors;