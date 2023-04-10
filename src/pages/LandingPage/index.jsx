import React from "react";
import "./landingPage.scss";
import Header from "../../components/Header";
import LandingMain from "../../components/LandingMain";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <LandingMain />
      <Footer />
    </div>
  );
};

export default LandingPage;
