import React from "react";
import "./reportTable.scss";
import NotesButton from "../../components/NotesButton";

const ReportTable = () => {
  return (
    <div className="reportTable">
      <h2>Report:</h2>
      <table></table>
      <NotesButton />
    </div>
  );
};

export default ReportTable;
