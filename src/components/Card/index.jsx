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
    <Link
      to={`/${JSON.parse(sessionStorage.getItem("user")).name.toLowerCase()}/${
        candidate?.id
      }`}
    >
      <div className={isInteresting?"card isInteresting":"card"}>
        <img src={candidate?.avatar} alt="happy people" />
        <InterestingButton isInteresting={isInteresting} setIsInteresting={setIsInteresting} candidate={candidate}/>
        <ProgressBar id={candidate?.id}/>
        <p>{candidate?.name}</p>
      </div>
    </Link>
  );
};

export default Card;
