import React, { useContext } from "react";
import "./candidateProfilePage.scss";
import Header from "../../components/Header";
import PersonInfo from "../../components/PersonInfo";
import ReportTable from "../../components/ReportTable";
import Footer from "../../components/Footer";

import { useParams } from "react-router-dom";
import { applicationContext } from "../../context";

const CandidateProfilePage = ({ candidates }) => {
  const { selectedChar } = useContext(applicationContext);
  const params = useParams();
  // const clickedChar = candidates?.find((char) => params.id === char?.id);
  // console.log(candidates);

  return (
    <div className="candidateProfilePage">
      <Header />
      <main>
        <div className="personDiv">
          <img src={`${selectedChar?.avatar}`} alt="" />
          <PersonInfo char={selectedChar} />
        </div>
        <ReportTable />
      </main>
      <Footer />
    </div>
  );
};

export default CandidateProfilePage;
