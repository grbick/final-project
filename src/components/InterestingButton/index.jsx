import React,{useContext} from "react";
import "./interestingButton.scss";
import { applicationContext } from "../../context";
import removeCandidate from '../../assets/images/user-remove-svgrepo-com.svg'
import addCandidate from '../../assets/images/user-add-svgrepo-com.svg'


const InterestingButton = ({isInteresting, setIsInteresting, candidate}) => {
  const { setInteresting, removeInteresting } = useContext(applicationContext);

  return <div className="interestingButton"
  onClick={(e)=>{
    e.preventDefault()
    isInteresting ? removeInteresting(candidate?.id) : setInteresting(candidate?.id)
    setIsInteresting(!isInteresting)
  }}
  ><img src={isInteresting?removeCandidate:addCandidate} alt="" /> </div>;
};

export default InterestingButton;
