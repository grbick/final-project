import React, { useContext } from "react";
import "./createCandidateModal.scss";
import { adminContext } from "../../context";

const CreateCandidateModal = () => {
  const { setCreateModal, newCandidate, setNewCandidate, submitCandidate } =
    useContext(adminContext);

  return (
    <div className="createCandidateModal">
      <div className="candidateModal">
        <label htmlFor="">
          <p>Name:</p>
          <input
            type="text"
            name=""
            id="candidateName"
            onInput={(e) =>
              setNewCandidate({ ...newCandidate, name: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          <p>Birthday:</p>
          <input
            type="date"
            name=""
            id="birthday"
            onChange={(e) =>
              setNewCandidate({ ...newCandidate, birthday: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          <p>Email:</p>
          <input
            type="email"
            name=""
            id="candidateEmail"
            onInput={(e) =>
              setNewCandidate({ ...newCandidate, email: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          <p>Education:</p>
          <input
            type="text"
            name=""
            id="education"
            onInput={(e) =>
              setNewCandidate({ ...newCandidate, education: e.target.value })
            }
          />
        </label>
        <button
          onClick={() => {
            submitCandidate();
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

export default CreateCandidateModal;
