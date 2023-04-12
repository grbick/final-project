import React from "react";
import "./personInfo.scss";

const PersonInfo = ({ char }) => {
  return (
    <div className="personInfo">
      <p>{char?.name}</p>
      <p>{char?.email}</p>
      <p>{char?.birthday}</p>
      <p>{char?.education}</p>
      <button>Push CV</button>
    </div>
  );
};

export default PersonInfo;
