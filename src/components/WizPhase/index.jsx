import React, {useContext} from "react";
import "./wizPhase.scss";
import { wizardContext } from "../../context";


const WizPhase = () => {
  const { phase,selectedCandidate,selectedCompany} = useContext(wizardContext);

  return (
    <div className="wizPhase">
      <p className={phase === 'candidates'? 'bold': ''}>1.Select Company:</p>
      <p className={phase === 'companies'? 'bold': ''}>2.Select Candidate:</p>
      <p className={phase === 'reports'? 'bold': ''}>3.Report Details:</p>
      <div className="wiz2ndDiv">
        {(phase === 'companies' || phase==='reports') && <p>1.Selected Candidate: {selectedCandidate}</p>}
        {phase==='reports' && <p>2.Selected Company: {selectedCompany}</p>}
      </div>
    </div>
  );
};

export default WizPhase;
