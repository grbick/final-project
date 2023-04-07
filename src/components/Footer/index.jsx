import React from "react";
import "./footer.scss";
import HireButton from "../HireButton";
import LogOutButton from "../LogOutButton/index";

const Footer = () => {
  return (
    <div className="footer">
      <HireButton /> Footer <LogOutButton />
    </div>
  );
};

export default Footer;
