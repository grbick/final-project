import React, { useContext } from "react";
import "./companiesWrap.scss";
import RemoveItem from "../RemoveItem";
import { applicationContext,adminContext } from "../../context";
import SortingButton from "../SortingButton";

const CompaniesWrap = () => {
  const { inputValue, companies } = useContext(applicationContext);
  const {sort,setSort} = useContext(adminContext)

  const filtered = companies?.filter((company) =>
    company.name.toLowerCase().includes(inputValue)
  );
  return (
    <table className="companiesWrap">
      <tbody>
        <tr>
        <th>Company <SortingButton
           sortToggle={()=>{
            sort.company === 'descending' ? setSort({ company: 'ascending', candidate: '' }) 
           : sort.company === 'ascending'? setSort({ company: 'descending', candidate: '' }) : setSort({ company: 'descending', candidate: '' })}}
           sortContent={sort.company === 'descending' ?<>&#8593;</>:<>&#8595;</>}/></th>
          <th>Email</th>
        </tr>
      {filtered?.map((company) => {
        return (
          <tr className="companyItem" key={company?.id}>
            <td>{company?.name}</td>
            <td>{company?.email}</td>
            {/* <button onClick={}>Go To Company Page</button> */}
            <td><RemoveItem id={company?.id} /></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default CompaniesWrap;
