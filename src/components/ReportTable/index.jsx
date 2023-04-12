import React, { useContext } from "react";
import "./reportTable.scss";
import { applicationContext } from "../../context";

const ReportTable = ({ value }) => {
  const { selectReport } = useContext(applicationContext);
  console.log(selectReport);
  return (
    <div className="reportTable">
      {selectReport?.map((el) => {
        if (el.phase === "cv") {
          return (
            <tr>
              <td>CV</td>
              <td>{el.phase}</td>
              <td>{el.interviewDate}</td>
              <td>{el.status}</td>
              <td>{el.note}</td>
            </tr>
          );
        } else if (el.phase === "hr") {
          return (
            <tr>
              <td>HR</td>
              <td>{el.phase}</td>
              <td>{el.interviewDate}</td>
              <td>{el.status}</td>
              <td>{el.note}</td>
            </tr>
          );
        } else if (el.phase === "tech") {
          return (
            <tr>
              <td>Tech</td>
              <td>{el.phase}</td>
              <td>{el.interviewDate}</td>
              <td>{el.status}</td>
              <td>{el.note}</td>
            </tr>
          );
        } else if (el.phase === "final") {
          return (
            <tr>
              <td>Final</td>
              <td>{el.phase}</td>
              <td>{el.interviewDate}</td>
              <td>{el.status}</td>
              <td>{el.note}</td>
            </tr>
          );
        }
      })}
    </div>
  );
};

export default ReportTable;
