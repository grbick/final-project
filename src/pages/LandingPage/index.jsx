import React, { useContext } from "react";
import "./landingPage.scss";
import Header from "../../components/Header";
import LandingMain from "../../components/LandingMain";
import Footer from "../../components/Footer";
import { applicationContext } from "../../context";
import SideBarModal from "../../components/SideBarModal";


const LandingPage = ({ candidates, setCandidates }) => {
  const { side } = useContext(applicationContext);

  return (
    <div className="landingPage">
      <Header />
      <LandingMain />
      <Footer />
      {side && <SideBarModal />}
    </div>
  );
};

export default LandingPage;
