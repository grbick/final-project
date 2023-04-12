import React, {useContext} from "react";
import "./wizPhase.scss";
import { wizardContext } from "../../context";


const WizPhase = () => {
  const { phase,selectedCandidate,selectedCompany} = useContext(wizardContext);

  return (
    <div className="wizPhase">
      <p className={phase === 'candidates'? 'bold': ''}>1. Select Candidate:</p>
      <p className={phase === 'companies'? 'bold': ''}>2. Select Company:</p>
      <p className={phase === 'reports'? 'bold': ''}>3. Report Details:</p>
      <div className="wiz2ndDiv">
        {(phase === 'companies' || phase==='reports') && <p>Selected Candidate: <span>{selectedCandidate?.name}</span></p>}
        {phase==='reports' && <p>Selected Company: <span>{selectedCompany?.name}</span></p>}
      </div>
    </div>
  );
};

export default WizPhase;
