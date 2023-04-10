import React, {useContext,useEffect,useState} from 'react'
import './wizCandidates.scss'
import { applicationContext } from "../../context";
import { wizardContext } from "../../context";

const WizCandidates = () => {
  const [candidates,setCandidates]= useState(null)
  const { inputValue} = useContext(applicationContext);
  const {setSelectedCandidate} = useContext(wizardContext);

  function fetchCandidates (){
    fetch("http://localhost:3333/664/api/candidates")
    .then((response)=> response.json())
    .then((data)=>{const filtered = data.filter((candidate)=>(
    candidate.name.toLowerCase().includes(inputValue)))
    setCandidates(filtered)
  })
  }
  useEffect(()=>{
    fetchCandidates();

  },[inputValue]);
  return (
    <div className='wizCandidates'>
      {candidates?.map( (candidate) => {
        return (
        <div className="wizCandidateItem" key={candidate?.id} onClick={()=>setSelectedCandidate(candidate?.name)}>
          <img src={candidate?.avatar} alt="" />
          <span>Candidate:{candidate?.name}</span>
        </div>
        )
      })}
    </div>
  )
}

export default WizCandidates