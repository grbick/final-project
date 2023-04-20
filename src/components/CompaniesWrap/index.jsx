import React, { useContext } from "react";
import "./companiesWrap.scss";
import RemoveItem from "../RemoveItem";
import { applicationContext } from "../../context";

const CompaniesWrap = () => {
  const { inputValue, companies } = useContext(applicationContext);

  const filtered = companies?.filter((company) =>
    company.name.toLowerCase().includes(inputValue)
  );
  return (
    <table className="companiesWrap">
      <tbody>
        <tr>
          <th>Company</th>
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
