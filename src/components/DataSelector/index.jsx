import React, {useContext} from "react";
import "./dataSelector.scss";
import { applicationContext,adminContext } from "../../context";

const DataSelector = () => {
  const {data, setData,setSort} = useContext(adminContext);
  const {setInputValue} = useContext(applicationContext);
  return (
    <div className='dataSelector'>
      <span className={data==='reports'?'selected':''}
      onClick={()=>{setData('reports');setInputValue('');setSort({company:"",candidate:""})}}>Reports</span>
      <span className={data==='companies'?'selected':''}
      onClick={()=>{setData('companies');setInputValue('');setSort({company:"",candidate:""})}}>Companies</span>
      <span className={data==='candidates'?'selected':''}
      onClick={()=>{setData('candidates');setInputValue('');setSort({company:"",candidate:""})}}>Candidates</span>
    </div>
  )
}

export default DataSelector;
