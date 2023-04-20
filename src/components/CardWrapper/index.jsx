import React, { useContext } from "react";
import "./cardWrapper.scss";
import Card from "../Card";
import { applicationContext } from "../../context";


const CardWrapper = () => {
  const { inputValue, candidates, reports, sideFilter,user } = useContext(applicationContext);
  const filtered = filterCandidates(candidates)
  function filterCandidates(array){
    switch(sideFilter){
      case 'process':
        //eslint-disable-next-line
        const passed = array?.filter((candidate) =>{
          const candidateReports = reports?.filter((report)=>candidate.id===report.candidateId&&report.companyId===user?.id)
          const checkReports = candidateReports.every((report)=>report.status==='passed')
          if(checkReports && candidateReports.length!==0){
            return candidate
          }
        })
        return passed
      case 'declined':
        //eslint-disable-next-line
        const declined = array?.filter((candidate) =>{
          const candidateReports = reports?.filter((report)=>candidate.id===report.candidateId&&report.companyId===user?.id)
          const checkReports = candidateReports.some((report)=>report.status === 'declined')
          if(checkReports){
            return candidate
          }
        })
        return declined
      case 'other':
        //eslint-disable-next-line
        const other = array?.filter((candidate) =>{
          const candidateReports = reports?.filter((report)=>candidate.id===report.candidateId&&report.companyId===user?.id)
          if(candidateReports.length === 0){
            return candidate
          }
        })
        return other
      // case 'interesting'
      default: return array
    }
  }
  const searched = filtered?.filter((candidate) =>
    candidate.name.toLowerCase().includes(inputValue)
  );
  return (
    <div className="cardWrapper">
      {searched?.map((element) => (
        <Card key={element.id} candidate={element} candidates={candidates} />
      ))}
    </div>
  );
};

export default CardWrapper;
