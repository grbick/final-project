import React, { useState } from "react";
import "./wizMain.scss";
import WizPhase from "../WizPhase";
import WizWrap from "../WizWrap";
import WizButton from "../WizButton";
import { WizardProvider } from "../../context";

const WizMain = () => {
  const [phase,setPhase] = useState('candidates')
  const [selectedCandidate, setSelectedCandidate] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')
  return (
    <WizardProvider value={{phase,setPhase, selectedCandidate,selectedCompany,setSelectedCandidate,setSelectedCompany}}>
    <div className="wizMain">
      <WizPhase />
      <WizWrap />
    </div>
      <WizButton/>
    </WizardProvider>
  );
};

export default WizMain;
