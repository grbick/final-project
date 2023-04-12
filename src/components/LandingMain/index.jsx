import React from "react";
import "./landingMain.scss";
import SideBarModal from "../SideBarModal";
import CardWrapper from "../CardWrapper";
import Pagination from "../Pagination";

const LandingMain = () => {
  return (
    <div className="landingMain">
      <div className="titleDiv">
        <h2>Candidates</h2>
      </div>
      {/* <SideBarModal /> */}
      <CardWrapper />
      <Pagination />
    </div>
  );
};

export default LandingMain;
