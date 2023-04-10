import React, { useEffect, useState, useContext } from "react";
import "./reportsWrap.scss";
import RemoveItem from "../RemoveItem";
import NotesButton from "../NotesButton";
import { applicationContext } from "../../context";


const ReportsWrap = () => {
  const [reports,setReports]= useState(null)
  const { inputValue, setInputValue} = useContext(applicationContext);
  function fetchReports (){
    fetch("http://localhost:3333/664/api/reports")
    .then((response)=> response.json())
    .then((data)=>{const filtered = data.filter((report)=>(
    report.companyName.toLowerCase().includes(inputValue)||
    report.candidateName.toLowerCase().includes(inputValue)))
    setReports(filtered)
  })
  }
  useEffect(()=>{
    fetchReports();

  },[inputValue]);
 
  return (
    <div className="reportsWrap">
      {reports?.map( (report) => {
        const date = new Date(report?.interviewDate);
        return (
        <div className="reportItem" key={report?.id}>
          <span>Company:{report?.companyName}</span>
          <span>Candidate:{report?.candidateName}</span>
          <span>Date:{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</span>
          <span>Phase:{report?.phase}</span>
          <span>Status:{report?.status}</span>
          <NotesButton />
          <RemoveItem />
        </div>
        )
      })}
    </div>
  );
};

export default ReportsWrap;
