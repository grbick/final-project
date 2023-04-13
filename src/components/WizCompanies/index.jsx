import React, { useContext } from "react";
import "./wizCompanies.scss";
import { applicationContext } from "../../context";
import { wizardContext } from "../../context";

const WizCompanies = () => {
  const { setSelectedCompany, selectedCompany, newReport, setNewReport } =
    useContext(wizardContext);
  const { inputValue, companies } = useContext(applicationContext);
  const filtered = companies?.filter((company) =>
    company.name.toLowerCase().includes(inputValue)
  );

  return (
    <div className="wizCompanies">
      {filtered?.map((company) => {
        return (
          <div
            className={
              selectedCompany?.name === company?.name
                ? "wizCandidateItem active"
                : "wizCompanyItem"
            }
            key={company?.id}
            onClick={() => {
              setSelectedCompany(company);
              setNewReport({
                ...newReport,
                companyID: company.id,
                companyName: company?.name,
              });
            }}
          >
            <span>Company:{company?.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WizCompanies;
