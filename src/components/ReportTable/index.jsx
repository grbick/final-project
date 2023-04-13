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
        {filteredReports?.map((el) => {
          if (el.phase === "cv") {
            console.log(el);
            return (
              <tr>
                <td>CV</td>
                <td>{el.phase}</td>
                <td>{moment(el.interviewDate).format("DD-MM-YYYY")}</td>
                <td>{el.status}</td>
                <td>
                  <NotesButton notes={el.note} />
                </td>
              </tr>
            );
          } else if (el.phase === "hr") {
            return (
              <tr>
                <td>HR</td>
                <td>{el.phase}</td>
                <td>{moment(el.interviewDate).format("DD-MM-YYYY")}</td>
                <td>{el.status}</td>
                <td>
                  <NotesButton notes={el.note} />
                </td>
              </tr>
            );
          } else if (el.phase === "tech") {
            return (
              <tr>
                <td>Tech</td>
                <td>{el.phase}</td>
                <td>{moment(el.interviewDate).format("DD-MM-YYYY")}</td>
                <td>{el.status}</td>
                <td>
                  <NotesButton notes={el.note} />
                </td>
              </tr>
            );
          } else if (el.phase === "final") {
            return (
              <tr>
                <td>Final</td>
                <td>{el.phase}</td>
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
