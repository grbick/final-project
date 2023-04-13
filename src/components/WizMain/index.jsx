import React, { useState, useContext } from "react";
import "./wizMain.scss";
import WizPhase from "../WizPhase";
import WizWrap from "../WizWrap";
import WizButton from "../WizButton";
import { WizardProvider } from "../../context";
import { applicationContext } from "../../context";

const WizMain = () => {
  const { freshData, setFreshData } = useContext(applicationContext);
  const [phase, setPhase] = useState("candidates");
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [newReport, setNewReport] = useState({
    candidateID: "",
    candidateName: "",
    companyID: "",
    companyName: "",
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });
  function submitReport() {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      body: JSON.stringify(newReport),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    setFreshData(!freshData);
  }

  return (
    <WizardProvider
      value={{
        phase,
        setPhase,
        selectedCandidate,
        selectedCompany,
        setSelectedCandidate,
        setSelectedCompany,
        setNewReport,
        submitReport,
        newReport,
      }}
    >
      <div className="wizMain">
        <WizPhase />
        <WizWrap />
      </div>
      <WizButton />
    </WizardProvider>
  );
};

export default WizMain;
