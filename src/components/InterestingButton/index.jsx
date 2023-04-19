import React,{useContext} from "react";
import "./interestingButton.scss";
import { applicationContext } from "../../context";


const InterestingButton = ({isInteresting, setIsInteresting, candidate}) => {
  const { setInteresting, removeInteresting } = useContext(applicationContext);

  return <div className="interestingButton"
  onClick={(e)=>{
    e.preventDefault()
    isInteresting ? removeInteresting(candidate?.id) : setInteresting(candidate?.id)
    setIsInteresting(!isInteresting)
  }}
  >*</div>;
};

export default InterestingButton;
