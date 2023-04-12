import React, { useContext } from "react";
import "./createCompanyModal.scss";
import { adminContext } from "../../context";

const CreateCompanyModal = () => {
  const { setCreateModal, newCompany, setNewCompany, submitCompany } =
    useContext(adminContext);
  return (
    <div className="createCompanyModal">
      <div className="companyModal">
        <label htmlFor="">
          <span>Company name:</span>
          <input
            type="text"
            name=""
            id="companyName"
            onInput={(e) =>
              setNewCompany({ ...newCompany, name: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          <span>Company email:</span>
          <input
            type="email"
            name=""
            id="companyEmail"
            onInput={(e) =>
              setNewCompany({ ...newCompany, email: e.target.value })
            }
          />
        </label>
        <button
          onClick={() => {
            submitCompany();
            setCreateModal(null);
          }}
        >
          Submit
        </button>
        <button className="closeModal" onClick={() => setCreateModal(null)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateCompanyModal;
