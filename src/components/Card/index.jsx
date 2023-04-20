import React, { useState, useContext } from "react";
import "./card.scss";
import ProgressBar from "../ProgressBar";
import InterestingButton from "../InterestingButton";
import { Link } from "react-router-dom";

// import { applicationContext } from "../../context";


const Card = ({ candidate }) => {
  // const { getInteresting } = useContext(applicationContext);

  const [isInteresting,setIsInteresting]= useState(false)
  // ()=>getInteresting(candidate?.id)
  return (
    
      <div className={isInteresting?"card isInteresting":"card"}>
        <Link
      to={`/${JSON.parse(sessionStorage.getItem("user")).name.toLowerCase()}/${
        candidate?.id
      }`}
    >
        <img src={candidate?.avatar} alt="happy people" id="avatar"/>
        
        <ProgressBar id={candidate?.id}/>
        <div className="candidateName">{candidate?.name} <InterestingButton isInteresting={isInteresting} setIsInteresting={setIsInteresting} candidate={candidate}/></div>
        </Link>
      </div>
  );
};

export default Card;
