import React from "react";
import "../styles/ProgressBar.css";

const Progressbar = ({ percentage }) => {
  return (
    <div className="BarBackground">
      <div className="Bar" style={{ width: `${percentage}%`}}></div>
    </div>
  );
};

export default Progressbar;
