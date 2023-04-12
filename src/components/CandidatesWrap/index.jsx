import React, { useContext, useEffect, useState } from "react";
import "./candidatesWrap.scss";
import RemoveItem from "../RemoveItem";
import { applicationContext } from "../../context";

const CandidatesWrap = () => {
  const [candidates, setCandidates] = useState(null);
  const { inputValue } = useContext(applicationContext);
  function fetchCandidates() {
    fetch("http://localhost:3333/664/api/candidates")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((candidate) =>
          candidate.name.toLowerCase().includes(inputValue)
        );
        setCandidates(filtered);
      });
  }
  useEffect(() => {
    fetchCandidates();
  }, [inputValue]);
  return (
    <div className="candidatesWrap">
      {candidates?.map((candidate) => {
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
            <RemoveItem />
          </div>
        );
      })}
    </div>
  );
};

export default CandidatesWrap;
