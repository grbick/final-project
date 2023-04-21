import React, { useContext } from "react";
import "./candidatesWrap.scss";
import RemoveItem from "../RemoveItem";
import { applicationContext,adminContext } from "../../context";
import moment from "moment/moment";
import SortingButton from "../SortingButton";


const CandidatesWrap = () => {
  const { inputValue, candidates } = useContext(applicationContext);
  const {sort,setSort} = useContext(adminContext)

  const filtered = candidates?.filter((candidate) =>
    candidate.name.toLowerCase().includes(inputValue)
  );

  return (
    <div className="candidatesWrap">
      <table>
      <tbody>
        <tr>
        <th>Candidate <SortingButton
           sortToggle={()=>{ 
            sort.candidate === 'descending' ? setSort({company:'', candidate: 'ascending' }) 
           : sort.candidate === 'ascending'? setSort({ company:'', candidate: 'descending' }) : setSort({ company:'', candidate: 'descending' })}}
           sortContent={sort.candidate === 'descending' ?<>&#8593;</>:<>&#8595;</>}/></th>
          <th>Birthday</th>
          <th>Email</th>
          <th>Education</th>
        </tr>
      {filtered?.map((candidate) => {
        return (
          <tr className="candidateItem" key={candidate?.id}>
            
            <td>{candidate?.name}
            {/* {<img src={candidate?.avatar} alt="" />} */}
            </td>
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
    </div>
  );
};

export default CandidatesWrap;
