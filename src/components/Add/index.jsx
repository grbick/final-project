import React, {useContext} from "react";
import "./add.scss";
import { adminContext } from "../../context";
import { Link } from "react-router-dom";

const Add = () => {
  const {data,setCreateModal} = useContext(adminContext);
  return (
    <div className="add">
      {data === 'reports'? <Link to="wizard"><button >Add</button></Link>
      :data === 'companies' ? <button onClick={()=>setCreateModal('company')}>Add</button>
      : <button onClick={()=>setCreateModal('candidate')}>Add</button>}
   </div>
    );
  };

export default Add;
