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
    <table className="candidatesWrap">
      <tbody>
        <tr>
          <th>Candidate</th>
          <th>Birthday</th>
          <th>Email</th>
          <th>Education</th>
        </tr>
      {filtered?.map((candidate) => {
        return (
          <tr className="candidateItem" key={candidate?.id}>
            
            <td>{candidate?.name}<img src={candidate?.avatar} alt="" /></td>
            <td>
             
              {moment(candidate?.birthday).format("DD-MM-YYYY")}
            </td>
            <td>{candidate?.email}</td>
            <td>{candidate?.education}</td>
            <td><RemoveItem id={candidate?.id} /></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default CandidatesWrap;
