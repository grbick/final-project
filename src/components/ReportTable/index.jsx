import React, { useContext } from "react";
import "./reportTable.scss";
import { applicationContext } from "../../context";
import NotesButton from "../NotesButton";
import moment from "moment";

const ReportTable = ({ id }) => {
  const { reports } = useContext(applicationContext);

  const filteredReports = reports?.filter(
    (report) =>
      report.candidateId === id &&
      report.companyId === JSON.parse(sessionStorage.getItem("user")).id
  );
  return (
    <table className="reportTable">
      <tbody>
      {/* eslint-disable-next-line */}
        {filteredReports?.map((el) => {
          if (el.phase === "cv") {
            return (
              <tr key={'cv'}>
                <td>CV</td>
                <td>{moment(el.interviewDate).format("DD-MM-YYYY")}</td>
                <td>{el.status}</td>
                <td>
                  <NotesButton notes={el.note} />
                </td>
              </tr>
            );
          } else if (el.phase === "hr") {
            return (
              <tr key={'hr'}>
                <td>HR</td>
                <td>{moment(el.interviewDate).format("DD-MM-YYYY")}</td>
                <td>{el.status}</td>
                <td>
                  <NotesButton notes={el.note} />
                </td>
              </tr>
            );
          } else if (el.phase === "tech") {
            return (
              <tr key={'tech'}>
                <td>Tech</td>
                <td>{moment(el.interviewDate).format("DD-MM-YYYY")}</td>
                <td>{el.status}</td>
                <td>
                  <NotesButton notes={el.note} />
                </td>
              </tr>
            );
          } else if (el.phase === "final") {
            return (
              <tr key={'final'}>
                <td>Final</td>
                <td>{moment(el.interviewDate).format("DD-MM-YYYY")}</td>
                <td>{el.status}</td>
                <td>
                  <NotesButton notes={el.note} />
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default ReportTable;
