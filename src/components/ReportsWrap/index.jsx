import React, { useContext } from "react";
import "./reportsWrap.scss";
import RemoveItem from "../RemoveItem";
import NotesButton from "../NotesButton";
import { applicationContext,adminContext } from "../../context";
import moment from "moment/moment";
import SortingButton from "../SortingButton";



const ReportsWrap = () => {
  const { inputValue, reports } = useContext(applicationContext);
  const {sort,setSort} = useContext(adminContext)

  const searchedCompanies = sort.company ?
   reports?.sort((a,b) => a.companyName-b.companyName) : reports?.sort((a,b) => b.companyName-a.companyName)
  const searchedCandidates =sort.candidate ?
   reports?.sort((a,b) => a.candidateName-b.candidateName) : reports?.sort((a,b) => b.candidateName-a.candidateName)
  const filtered = sort.company ? searchedCompanies.filter(
    (report) =>
      report.companyName.toLowerCase().includes(inputValue) ||
      report.candidateName.toLowerCase().includes(inputValue)
  ) : sort.candidate ? searchedCandidates.filter(
    (report) =>
      report.companyName.toLowerCase().includes(inputValue) ||
      report.candidateName.toLowerCase().includes(inputValue)
  ) : reports  
  
  // const paginated = paginate(filtered)

  // &#8595; dole
// &#8593; gore
  return (
    <table className="reportsWrap">
      <tbody>
        <tr>
          <th>Company <SortingButton
           sortToggle={()=>{
            sort.company === 'descending' ? setSort({ company: 'ascending', candidate: '' }) 
           : sort.company === 'ascending'? setSort({ company: 'descending', candidate: '' }) : setSort({ company: 'descending', candidate: '' })}}
           sortContent={sort.company === 'descending' ?<>&#8593;</>:<>&#8595;</>}/></th>
          <th>Candidate <SortingButton
           sortToggle={()=>{ 
            sort.candidate === 'descending' ? setSort({company:'', candidate: 'ascending' }) 
           : sort.candidate === 'ascending'? setSort({ company:'', candidate: 'descending' }) : setSort({ company:'', candidate: 'descending' })}}
           sortContent={sort.candidate === 'descending' ?<>&#8593;</>:<>&#8595;</>}/></th>
          <th>Date</th>
          <th>Phase</th>
          <th>Status</th>
          <th></th>
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
