import React from "react";
import "./wizardPage.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WizMain from "../../components/WizMain";



const WizardPage = () => {
  return (
    <div className="wizardPage">
      <Header />
      <WizMain />
      <Footer />
    </div>
  );
};

export default WizardPage;
