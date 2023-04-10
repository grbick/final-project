import React, { useState } from "react";
import "./adminPage.scss";

import ReportsWrap from "../../components/ReportsWrap";
import CompaniesWrap from "../../components/CompaniesWrap";
import CandidatesWrap from "../../components/CandidatesWrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { AdminProvider } from "../../context";

const AdminPage = () => {
  const [data, setData] = useState("reports");
  const [createModal, setCreateModal] = useState(null)
  
  return (
    <AdminProvider value = {{data, setData, createModal,setCreateModal}}>
    <div className="adminPage">
      <Header/>
      <Nav/>
      {data === "reports" ? (
        <ReportsWrap />
      ) : data === "companies" ? (
        <CompaniesWrap />
      ) : (
        <CandidatesWrap />
      )}
      <Footer/>
    </div>
    </AdminProvider>
  );
};

export default AdminPage;
