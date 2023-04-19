import React, {useContext} from "react";
import "./progressBar.scss";
import { applicationContext } from "../../context";


const ProgressBar = ({id}) => {

  const { user,reports } = useContext(applicationContext);
  const userReports = reports?.filter((report) =>
    (id === parseInt(report.candidateId) && 
    user?.id === parseInt(report.companyId) )
  )

  return (
    <div className="progressBar">
      <span className={
        userReports?.find((report)=>report.phase ==="cv" &&
        report.status ==="passed") ? "phase green": 
        userReports?.find((report)=>report.phase ==="cv" &&
        report.status ==="declined") ? "phase red" :
        "phase"
      }>
      </span>
      <span className={
        userReports?.find((report)=>report.phase ==="hr" &&
        report.status ==="passed") ? "phase green": 
        userReports?.find((report)=>report.phase ==="hr" &&
        report.status ==="declined") ? "phase red" :
        "phase"
      }>
      </span>
      <span className={
        userReports?.find((report)=>report.phase ==="tech" &&
        report.status ==="passed") ? "phase green": 
        userReports?.find((report)=>report.phase ==="tech" &&
        report.status ==="declined") ? "phase red" :
        "phase"
      }>
      </span>
      <span className={
        userReports?.find((report)=>report.phase ==="final" &&
        report.status ==="passed") ? "phase green": 
        userReports?.find((report)=>report.phase ==="final" &&
        report.status ==="declined") ? "phase red" :
        "phase"
      }>
      </span>
    </div>
  );
};

export default ProgressBar;
