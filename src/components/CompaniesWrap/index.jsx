import React,{useContext,useEffect,useState} from "react";
import "./companiesWrap.scss";
import RemoveItem from "../RemoveItem";
import { applicationContext } from "../../context";

const CompaniesWrap = () => {
  const [companies,setCompanies]= useState(null)
  const { inputValue} = useContext(applicationContext);
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
    <div className="companiesWrap">
      {companies?.map( (company) => {
        return (
        <div className="companyItem" key={company?.id}>
          <span>Company:{company?.name}</span>
          <span>E-mail:{company?.email}</span>
          {/* <button onClick={}>Go To Company Page</button> */}
          <RemoveItem />
        </div>
        )
      })}
    </div>
  );
};

export default CompaniesWrap;
