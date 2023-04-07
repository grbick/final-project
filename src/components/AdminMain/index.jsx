import React from "react";
import "./adminMain.scss";
import Nav from "../Nav";
import ReportsWrap from "../ReportsWrap";
import CompaniesWrap from "../CompaniesWrap";
import CandidatesWrap from "../CandidatesWrap";
import Add from "../Add";
import Item from "../Item";

const AdminMain = () => {
  return (
    <div className="adminMain">
      AdminMain
      <Nav />
      <Add />
      <ReportsWrap />
      <CompaniesWrap />
      <CandidatesWrap />
      <Item />
    </div>
  );
};

export default AdminMain;
