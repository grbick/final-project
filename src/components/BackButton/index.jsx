import React from "react";
import "./backButton.scss";
import {Link} from "react-router-dom"

const BackButton = () => {
  return (
    <div className="backButton">
      <button><Link to={"../"}>Back</Link></button>
    </div>
  );
};

export default BackButton;
