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
  // const paginated = paginate(filtered)
  return (
    <table className="reportsWrap">
      <tbody>
        <tr>
          <th>Company</th>
          <th>Candidate</th>
          <th>Date</th>
          <th>Phase</th>
          <th>Status</th>
          <th>+</th>
        </tr>
      {filtered?.map((report) => {
        return (
          <tr className="reportItem" key={report?.id}>
            <td>{report?.companyName}</td>
            <td>{report?.candidateName}</td>
            <td>
              {moment(report?.interviewDate).format("DD-MM-YYYY")}
            </td>
            <td>{report?.phase}</td>
            <td>{report?.status}</td>
            <td>
            <NotesButton notes={report?.note} />
            </td>
            <td>
            <RemoveItem id={report?.id} />
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default ReportsWrap;
