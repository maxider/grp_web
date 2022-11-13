import "../styles/Home.css";
import React from "react";
import background from "../ressources/sandlaeufer.png";
import wappen from "../ressources/bigLogo.png";

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
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </>
  );
}

export default Home;
