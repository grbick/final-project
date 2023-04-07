import React from "react";
import "./wizMain.scss";
import WizPhase from "../WizPhase";
import WizWrap from "../WizWrap";

const WizMain = () => {
  return (
    <div className="wizMain">
      <WizPhase />
      <WizWrap />
    </div>
  );
};

export default WizMain;
