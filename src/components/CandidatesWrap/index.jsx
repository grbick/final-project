import React, { useContext } from "react";
import "./candidatesWrap.scss";
import RemoveItem from "../RemoveItem";
import { applicationContext } from "../../context";

const CandidatesWrap = () => {
  const { inputValue, candidates } = useContext(applicationContext);

  const filtered = candidates?.filter((candidate) =>
    candidate.name.toLowerCase().includes(inputValue)
  );

  return (
    <div className="candidatesWrap">
      {filtered?.map((candidate) => {
        const date = new Date(candidate?.birthday);
        return (
          <div className="candidateItem" key={candidate?.id}>
            <img src={candidate?.avatar} alt="" />
            <span>Candidate:{candidate?.name}</span>
            <span>
              Birthday:
              {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            </span>
            <span>E-mail:{candidate?.email}</span>
            <span>Education:{candidate?.education}</span>
            <RemoveItem id={candidate?.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CandidatesWrap;
