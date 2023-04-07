import React from "react";
import "./nav.scss";
import DataSelector from "../DataSelector";
import Add from "../Add";

const Nav = () => {
  return (
    <div className="nav">
      <DataSelector />
      <Add />
    </div>
  );
};

export default Nav;
