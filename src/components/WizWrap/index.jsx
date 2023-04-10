import React from "react";
import "./wizWrap.scss";
import WizButton from "../WizButton";

const WizWrap = () => {
  return (
    <div className="wizWrap">
      <div className="card">Card</div>
      <WizButton />
    </div>
  );
};

export default WizWrap;
