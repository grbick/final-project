import React, {useContext} from "react";
import "./landingMain.scss";
import CardWrapper from "../CardWrapper";
import Pagination from "../Pagination";
import FilterButton from "../FilterButton";
import { applicationContext } from "../../context";


const LandingMain = () => {
  const { setSideFilter,sideFilter } = useContext(applicationContext);

  return (
    <div className="landingMain">
      <p className="message3">“I never dreamed about success. I worked for it.” —Estée Lauder</p>
      <div className="titleDiv">
        <FilterButton/>
        <h2>Candidates</h2>
        <button 
        onClick={()=>setSideFilter(null)}
        className={sideFilter?"visible":""}
        >x Clear</button>
      </div>
      <CardWrapper />
      <Pagination />
    </div>
  );
};

export default LandingMain;
