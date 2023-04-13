import React, { useContext } from "react";
import "./candidatesWrap.scss";
import RemoveItem from "../RemoveItem";
import { applicationContext } from "../../context";
import moment from "moment/moment";

const CandidatesWrap = () => {
  const { inputValue, candidates } = useContext(applicationContext);

  const filtered = candidates?.filter((candidate) =>
    candidate.name.toLowerCase().includes(inputValue)
  );

  return (
    <div className="candidatesWrap">
      {filtered?.map((candidate) => {
        return (
          <div className="candidateItem" key={candidate?.id}>
            <img src={candidate?.avatar} alt="" />
            <span>Candidate:{candidate?.name}</span>
            <span>
              Birthday:
              {moment(candidate?.birthday).format("DD-MM-YYYY")}
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
