import React, { useContext } from "react";
import "./card.scss";
import ProgressBar from "../ProgressBar";
import InterestingButton from "../InterestingButton";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";

const Card = ({ char }) => {
  const { user, setSelectedChar } = useContext(applicationContext);

  return (
    <Link
      to={`/${user?.name.toLowerCase()}/${char?.id}`}
      onClick={() => {
        setSelectedChar(char);
      }}
    >
      <div className="card">
        <InterestingButton />
        <img src={char?.avatar} alt="happy people" />
        <ProgressBar />
        <p>{char?.name}</p>
      </div>
    </Link>
  );
};

export default Card;
