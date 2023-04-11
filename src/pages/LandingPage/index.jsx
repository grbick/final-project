import React, {useEffect, useState} from "react";
import "./landingPage.scss";
import Header from "../../components/Header";
import LandingMain from "../../components/LandingMain";
import Footer from "../../components/Footer";
import { CandidatesProvider } from "../../context";



const LandingPage = () => {
  const [candidates, setCandidates] = useState([]);

  function fetchCandidates() {
    fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((data) =>console.log(data) || setCandidates(data));
  }

  useEffect(() =>{
    fetchCandidates()
  },[]);

  return (
    <CandidatesProvider value = {{candidates, setCandidates}}>
    <div className="landingPage">
      <Header />
      <LandingMain />
      <Footer />
    </div>
  </CandidatesProvider>
  );
};

export default LandingPage;
