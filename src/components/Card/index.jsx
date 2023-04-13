import React from "react";
import "./card.scss";
import ProgressBar from "../ProgressBar";
import InterestingButton from "../InterestingButton";
import { Link } from "react-router-dom";

const Card = ({ char }) => {
  return (
    <Link
      to={`/${JSON.parse(sessionStorage.getItem("user")).name.toLowerCase()}/${
        char?.id
      }`}
    >
      <div className="card">
        <img src={char?.avatar} alt="happy people" />
        <InterestingButton />
        <ProgressBar />
        <p>{char?.name}</p>
      </div>
    </Link>
  );
};

export default Card;
