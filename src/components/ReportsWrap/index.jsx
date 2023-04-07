import React from "react";
import "./reportsWrap.scss";
import RemoveItem from "../RemoveItem";
import NotesButton from "../NotesButton";

const ReportsWrap = () => {
  return (
    <div className="reportsWrap">
      <span>Company:</span>
      <span>Candidate:</span>
      <span>Date:</span>
      <span>Phase:</span>
      <span>Status:</span>
      <NotesButton />
      <RemoveItem />
    </div>
  );
};

export default ReportsWrap;
