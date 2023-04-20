import React from "react";
import "./personInfo.scss";
import moment from "moment/moment";

const PersonInfo = ({ char }) => {
  return (
    <div className="personInfo">
      <p>{char?.name}</p>
      <p>{moment(char?.birthday).format("DD-MM-YYYY")}</p>
      <p>{char?.email}</p>
      <p>{char?.education}</p>
    </div>
  );
};
export default PersonInfo;
