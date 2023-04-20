import React from "react";
import "./footer.scss";
import BackButton from "../BackButton";
import LogOutButton from "../LogOutButton/index";

const Footer = () => {
  return (
    <div className="footer">
      <BackButton /> <span>BIT Students 2023</span> <LogOutButton />
    </div>
  );
};

export default Footer;
