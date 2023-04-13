import React, { useContext } from "react";
import "./reportsWrap.scss";
import RemoveItem from "../RemoveItem";
import NotesButton from "../NotesButton";
import { applicationContext } from "../../context";
import moment from "moment/moment";

const ReportsWrap = () => {
  const { inputValue, reports } = useContext(applicationContext);

  const filtered = reports?.filter(
    (report) =>
      report.companyName.toLowerCase().includes(inputValue) ||
      report.candidateName.toLowerCase().includes(inputValue)
  );
  return (
    <div className="reportsWrap">
      {filtered?.map((report) => {
        return (
          <div className="reportItem" key={report?.id}>
            <span>Company:{report?.companyName}</span>
            <span>Candidate:{report?.candidateName}</span>
            <span>
              Date:
              {moment(report?.interviewDate).format("DD-MM-YYYY")}
            </span>
            <span>Phase:{report?.phase}</span>
            <span>Status:{report?.status}</span>
            <NotesButton notes={report?.note} />
            <RemoveItem id={report?.id} />
          </div>
        );
      })}
    </div>
  );
};

export default ReportsWrap;
