import React, {useContext} from "react";
import "./wizWrap.scss";
import WizCandidates from "../WizCandidates";
import WizCompanies from "../WizCompanies";
import WizReports from "../WizReports";
import { wizardContext } from "../../context";


const WizWrap = () => {
  const { phase, setPhase} = useContext(wizardContext);
  return (
    <div className="wizWrap">
      {phase === 'candidates'? <WizCandidates/>
      :phase === 'companies' ? <WizCompanies/>
      :<WizReports/>}
      
    </div>
  );
};

export default WizWrap;
