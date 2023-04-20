import React from "react";
import "./adminMain.scss";
import Nav from "../Nav";
import ReportsWrap from "../ReportsWrap";
import CompaniesWrap from "../CompaniesWrap";
import CandidatesWrap from "../CandidatesWrap";


const AdminMain = () => {
  return (
    <div className="adminMain">
      AdminMain
      <Nav />
      <ReportsWrap />
      <CompaniesWrap />
      <CandidatesWrap /> 
    </div>
  );
};

export default AdminMain;
