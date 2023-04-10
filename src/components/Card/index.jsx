import React from "react";
import "./card.scss";
import ProgressBar from "../ProgressBar";
import InterestingButton from "../InterestingButton";

const Card = (char) => {
  console.log(123);
  console.log(char);
  return (
    <div className="card">
      <InterestingButton />
      <img src={char.char.avatar} alt="happy people" />
      <ProgressBar />
      <p>{char.char?.name}</p>
    </div>
  );
};

export default Card;
