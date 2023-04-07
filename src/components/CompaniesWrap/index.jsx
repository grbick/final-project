import React from "react";
import "./companiesWrap.scss";

const CompaniesWrap = () => {
  return (
    <div className="companiesWrap">
      <span className="compSpan">
        <p>Company Name:</p>
      </span>
      <span className="emailSpan">
        <p>Company e-mail:</p>
      </span>
    </div>
  );
};

export default CompaniesWrap;
