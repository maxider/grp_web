import "../styles/Home.css";
import React from "react";
import background from "../ressources/sandlaeufer.png";
import wappen from "../ressources/bigLogo.png";
import logo from "../ressources/fuchs.png";

import Calender from "../Components/Calender";

function Home() {
  return (
    <>
      <div className="Header">
        <img src={background} alt="background" />
        <div className="Center">
          <img src={wappen} alt="wappen" />
          <div className="Text">
            <h1>Gruppe 9</h1>
            <p>Dein Arma 3 Event Host</p>
            <button>
              <p>Event Planen</p>
            </button>
          </div>
        </div>
        <div className="Bar"></div>
      </div>
      <div className="Content">
        <div className="CardsContainer">
          <div className="Card">
            <img src={logo} alt="img"></img>
            <div className="CardText">
              <p>Oh hi mom. how are you</p>
            </div>
          </div>
          <div className="Card">
            <img src={logo} alt="img"></img>
            <div className="CardText">
              <p>Oh hi mom. how are you</p>
            </div>
          </div>
          <div className="Card">
            <img src={logo} alt="img"></img>
            <div className="CardText">
              <p>Oh hi mom. how are you</p>
            </div>
          </div>
        </div>
        <Calender />
      </div>
    </>
  );
}

export default Home;
