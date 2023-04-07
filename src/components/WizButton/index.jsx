import React from "react";
import "./wizButton.scss";

const WizButton = () => {
  return (
    <div className="wizButton">
      <button type="button" className="backButton">
        BackButton
      </button>
      WizButton
      <button type="button" className="nextButton">
        NextButton
      </button>
    </div>
  );
};

export default WizButton;
