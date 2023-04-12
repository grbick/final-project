import React,{useContext,useEffect,useState} from "react";
import './wizCompanies.scss'
import { applicationContext } from "../../context";
import { wizardContext } from "../../context";


const WizCompanies = () => {
  const [companies,setCompanies]= useState(null)
  const { inputValue} = useContext(applicationContext);
  const {setSelectedCompany,selectedCompany} = useContext(wizardContext);

  function fetchCompanies (){
    fetch("http://localhost:3333/664/api/companies")
    .then((response)=> response.json())
    .then((data)=>{const filtered = data.filter((company)=>(
    company.name.toLowerCase().includes(inputValue)))
    setCompanies(filtered)
  })
  }
  useEffect(()=>{
    fetchCompanies();
  },[inputValue]);
  return (
    <div className='wizCompanies'>
      {companies?.map( (company) => {
        return (
        <div className={selectedCompany?.name===company?.name ? "wizCandidateItem active": "wizCompanyItem"} key={company?.id} onClick={()=>setSelectedCompany(company)}>
          <span>Company:{company?.name}</span>
        </div>
        )
      })}
    </div>
  )
}

export default WizCompanies