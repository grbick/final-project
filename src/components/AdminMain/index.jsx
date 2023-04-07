import React from "react";
import "./adminMain.scss";
import Nav from "../Nav";
import ReportsWrap from "../ReportsWrap";
import CompaniesWrap from "../CompaniesWrap";

const AdminMain = () => {
  return (
    <div className="adminMain">
      AdminMain
      <Nav />
      <ReportsWrap />
      <CompaniesWrap />
    </div>
  );
};

export default AdminMain;
