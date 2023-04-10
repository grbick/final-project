import React, {useContext} from "react";
import "./dataSelector.scss";
import { adminContext } from "../../context";
import { applicationContext } from "../../context";

const DataSelector = () => {
  const {data, setData} = useContext(adminContext);
  const {setInputValue} = useContext(applicationContext);
  return (
    <div className='dataSelector'>
      <span className={data==='reports'?'selected':''}
      onClick={()=>{setData('reports');setInputValue('')}}>Reports</span>
      <span className={data==='companies'?'selected':''}
      onClick={()=>{setData('companies');setInputValue('')}}>Companies</span>
      <span className={data==='candidates'?'selected':''}
      onClick={()=>{setData('candidates');setInputValue('')}}>Candidates</span>
    </div>
  )
}

export default DataSelector;
