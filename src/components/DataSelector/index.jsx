import React from "react";
import "./dataSelector.scss";

const DataSelector = () => {
  return (
    <div className="dataSelector">
      <button type="radio" value="Report">
        Report
      </button>
      <button type="radio" value="Company">
        Company
      </button>
      <button type="radio" value="Candidate">
        Candidate
      </button>
    </div>
  );
};

export default DataSelector;
