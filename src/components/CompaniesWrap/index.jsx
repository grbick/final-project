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
    <div className="companiesWrap">
      {filtered?.map((company) => {
        return (
          <div className="companyItem" key={company?.id}>
            <span>Company:{company?.name}</span>
            <span>E-mail:{company?.email}</span>
            {/* <button onClick={}>Go To Company Page</button> */}
            <RemoveItem id={company?.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CompaniesWrap;
