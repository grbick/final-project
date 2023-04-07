import React from "react";
import "./candidatesWrap.scss";
import RemoveItem from "../RemoveItem";
import NotesButton from "../NotesButton";

const CandidatesWrap = () => {
  return (
    <div className="candidatesWrap">
      <span className="imgSpan">
        <img alt=""></img>
      </span>
      <span className="nameSpan">Name:</span>
      <NotesButton />
      <RemoveItem />
    </div>
  );
};

export default CandidatesWrap;
