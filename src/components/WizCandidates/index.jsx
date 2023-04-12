import React, { useContext } from "react";
import "./wizCandidates.scss";
import { applicationContext } from "../../context";
import { wizardContext } from "../../context";

const WizCandidates = () => {
  const { setSelectedCandidate, selectedCandidate } = useContext(wizardContext);
  const { inputValue, candidates } = useContext(applicationContext);

  const filtered = candidates?.filter((candidate) =>
    candidate.name.toLowerCase().includes(inputValue)
  );
  return (
    <div className="wizCandidates">
      {filtered?.map((candidate) => {
        return (
          <div
            className={
              selectedCandidate?.name === candidate?.name
                ? "wizCandidateItem active"
                : "wizCandidateItem"
            }
            key={candidate?.id}
            onClick={() => setSelectedCandidate(candidate)}
          >
            <img src={candidate?.avatar} alt="" />
            <span>Candidate:{candidate?.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WizCandidates;
