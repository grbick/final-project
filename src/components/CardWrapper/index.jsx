import React, { useContext } from "react";
import "./cardWrapper.scss";
import Card from "../Card";
import { applicationContext } from "../../context";

const CardWrapper = () => {
  const { candidates, setCandidates } = useContext(applicationContext);
  console.log(candidates);
  return (
    <div className="cardWrapper">
      {/* {candidates.map(
        (element) =>
          console.log(element) || (
            <Card
              key={element.id}
              char={element}
              setCandidates={setCandidates}
            />
          )
      )} */}
    </div>
  );
};

export default CardWrapper;
