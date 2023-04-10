import React from "react";
import "./progressBar.scss";

const ProgressBar = () => {
  return (
    <div className="progressBar">
      <span className="phase phase1"></span>
      <span className="phase phase2"></span>
      <span className="phase phase3"></span>
      <span className="phase phase4"></span>
    </div>
  );
};

export default ProgressBar;
