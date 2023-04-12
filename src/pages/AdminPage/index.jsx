import React, { useState } from "react";
import "./adminPage.scss";

import ReportsWrap from "../../components/ReportsWrap";
import CompaniesWrap from "../../components/CompaniesWrap";
import CandidatesWrap from "../../components/CandidatesWrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import CreateCandidateModal from "../../components/CreateCandidateModal";
import CreateCompanyModal from "../../components/CreateCompanyModal";
import { AdminProvider } from "../../context";
import NotesModal from "../../components/NotesModal";

const AdminPage = () => {
  const [data, setData] = useState("reports");
  const [createModal, setCreateModal] = useState(null);
  const [newCompany, setNewCompany] = useState({
    name: "",
    email: "",
  });
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    birthday: "",
    email: "",
    education: "",
    avatar:
      "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",
  });

  function submitCompany() {
    fetch("http://localhost:3333/api/companies", {
      method: "POST",
      body: JSON.stringify(newCompany),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
  }
  function submitCandidate() {
    fetch("http://localhost:3333/api/candidates", {
      method: "POST",
      body: JSON.stringify(newCandidate),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
  }

  return (
    <AdminProvider
      value={{
        data,
        setData,
        createModal,
        setCreateModal,
        newCompany,
        setNewCompany,
        submitCompany,
        newCandidate,
        setNewCandidate,
        submitCandidate,
      }}
    >
      <div className="adminPage">
        <Header />
        <Nav />
        {data === "reports" ? (
          <ReportsWrap />
        ) : data === "companies" ? (
          <CompaniesWrap />
        ) : (
          <CandidatesWrap />
        )}
        <Footer />
        {createModal === "company" && <CreateCompanyModal />}
        {createModal === "candidate" && <CreateCandidateModal />}
      </div>
    </AdminProvider>
  );
};

export default AdminPage;
