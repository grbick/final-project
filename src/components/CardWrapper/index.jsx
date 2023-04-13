import React, { useContext } from "react";
import "./cardWrapper.scss";
import Card from "../Card";
import { applicationContext } from "../../context";

const CardWrapper = () => {
  const { candidates } = useContext(applicationContext);

  return (
    <div className="cardWrapper">
      {candidates?.map((element) => (
        <Card key={element.id} char={element} candidates={candidates} />
      ))}
    </div>
  );
};

export default CardWrapper;
