import React, { useContext } from "react";
import "./candidateProfilePage.scss";
import Header from "../../components/Header";
import PersonInfo from "../../components/PersonInfo";
import ReportTable from "../../components/ReportTable";
import Footer from "../../components/Footer";
import NotesModal from "../../components/NotesModal";

import { useParams, Link } from "react-router-dom";
import { applicationContext } from "../../context";

const CandidateProfilePage = () => {
  const { notes, candidates } = useContext(applicationContext);
  const params = useParams();
  const clickedChar = candidates?.find((char) => parseInt(params.id) === char?.id);

  return (
    <div className="candidateProfilePage">
      {notes && <NotesModal />}
      <Header />
      
        <div className="personDiv">
          <img src={`${clickedChar?.avatar}`} alt="" />
          <PersonInfo char={clickedChar} />
          <button><Link to={"../"}>Back</Link></button>
        </div>
        <ReportTable id={clickedChar?.id}/>
     
      <Footer />
    </div>
  );
};

export default CandidateProfilePage;
