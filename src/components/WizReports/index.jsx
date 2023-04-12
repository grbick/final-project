import React, { useContext } from "react";
import "./wizReports.scss";
import { wizardContext } from "../../context";

const WizReports = () => {
  const { newReport, setNewReport } = useContext(wizardContext);

  return (
    <div className="wizReports">
      <div className="reportSelects">
        <div className="reportDate">
          <p>Interview Date:</p>
          <input
            type="date"
            name=""
            id="interviewDate"
            onChange={(e) =>
              setNewReport({ ...newReport, interviewDate: e.target.value })
            }
          />
        </div>
        <div className="reportPhase">
          <p>Phase:</p>
          <select
            name="phase"
            id="phase"
            defaultValue={""}
            onChange={(e) =>
              setNewReport({ ...newReport, phase: e.target.value })
            }
          >
            <option value="" selected disabled></option>
            <option value="cv">CV</option>
            <option value="hr">HR</option>
            <option value="tech">Technical</option>
            <option value="final">Final</option>
          </select>
        </div>
        <div className="reportStatus">
          <p>Status:</p>
          <select
            name="status"
            id="status"
            defaultValue={""}
            onChange={(e) =>
              setNewReport({ ...newReport, status: e.target.value })
            }
          >
            <option value="" selected disabled></option>
            <option value="passed">Passed</option>
            <option value="declined">Declined</option>
          </select>
        </div>
      </div>
      <div className="reportNotes">
        <p>Notes:</p>
        <textarea
          name="notes"
          id="notes"
          cols="30"
          rows="10"
          onInput={(e) => setNewReport({ ...newReport, note: e.target.value })}
        ></textarea>
      </div>
    </div>
  );
};

export default WizReports;
