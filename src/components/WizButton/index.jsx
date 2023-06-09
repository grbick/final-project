import React, { useContext } from "react";
import "./wizButton.scss";
import { wizardContext } from "../../context";
import { Link } from "react-router-dom";

const WizButton = () => {
  const { phase, setPhase, selectedCandidate, selectedCompany, submitReport } =
    useContext(wizardContext);

  function cycleWizard(phase) {
    switch (phase) {
      case "candidates":
        return (
          <>
            <button style={{ visibility: "hidden" }}>Back</button>
            <button
              disabled={!selectedCandidate ? "disabled" : ""}
              onClick={() => setPhase("companies")}
            >
              Next
            </button>
          </>
        );
      case "companies":
        return (
          <>
            <button onClick={() => setPhase("candidates")}>Back</button>
            <button
              disabled={!selectedCompany ? "disabled" : ""}
              onClick={() => setPhase("reports")}
            >
              Next
            </button>
          </>
        );
      case "reports":
        return (
          <>
            <button onClick={() => setPhase("companies")}>Back</button>
            <button onClick={submitReport}><Link to="../">Submit</Link></button>
          </>
        );
      default:
        return (
          <>
            <button disabled="disabled">Back</button>
            <button
              disabled={!selectedCandidate ? "disabled" : ""}
              onClick={() => setPhase("companies")}
            >
              Next
            </button>
          </>
        );
    }
  }
  return <div className="wizButton">{cycleWizard(phase)}</div>;
};

export default WizButton;
