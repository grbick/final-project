import React, { useState } from "react";
import "./wizMain.scss";
import WizPhase from "../WizPhase";
import WizWrap from "../WizWrap";
import WizButton from "../WizButton";
import { WizardProvider } from "../../context";

const WizMain = () => {
  const [phase, setPhase] = useState("candidates");
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [newReport, setNewReport] = useState({
    candidateID: `${selectedCandidate?.id}`,
    candidateName: `${selectedCandidate?.name}`,
    companyID: `${selectedCompany?.name}`,
    companyName: `${selectedCompany?.name}`,
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
