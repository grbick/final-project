import React from "react";
import "./wizReports.scss";

const WizReports = () => {
  return (
    <div className="wizReports">
      <div className="reportSelects">
        <div className="reportDate">
          <p>Interview Date:</p>
          <input type="date" name="" id="" />
        </div>
        <div className="reportPhase">
          <p>Phase:</p>
          <select name="phase" id="phase" defaultValue={""}>
            <option value="" selected disabled></option>
            <option value="cv">CV</option>
            <option value="hr">HR</option>
            <option value="tech">Technical</option>
            <option value="final">Final</option>
          </select>
        </div>
        <div className="reportStatus">
          <p>Status:</p>
          <select name="status" id="status" defaultValue={""}>
            <option value="" selected disabled></option>
            <option value="passed">Passed</option>
            <option value="declined">Declined</option>
          </select>
        </div>
      </div>
      <div className="reportNotes">
        <p>Notes:</p>
        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default WizReports;
