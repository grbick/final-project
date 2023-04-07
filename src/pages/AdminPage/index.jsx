import React, { useEffect, useRef, useState } from "react";
import "./adminPage.scss";
import DataSelector from "../../components/DataSelector";
import ReportsWrap from "../../components/ReportsWrap";
import CompaniesWrap from "../../components/CompaniesWrap";
import CandidatesWrap from "../../components/CandidatesWrap";

const AdminPage = () => {
  const [data, setData] = useState("reports");

  return (
    <div className="adminPage">
      <DataSelector data={data} setData={setData} />
      {data === "reports" ? (
        <ReportsWrap />
      ) : data === "companies" ? (
        <CompaniesWrap />
      ) : (
        <CandidatesWrap />
      )}
    </div>
  );
};

export default AdminPage;
