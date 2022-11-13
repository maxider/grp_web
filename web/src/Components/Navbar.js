import "../styles/Navbar.css";
import logo from "../ressources/fuchs.png";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={logo} alt="logo" />
        <p>gruppe 9</p>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
