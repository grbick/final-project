import React, {useContext} from 'react'
import { applicationContext } from "../../context";
import './sideBarModal.scss'


const SideBarModal = () => {
  const { setSide,setSideFilter } = useContext(applicationContext);

  return (
    <div className='sideBarModal' onClick={() => setSide("")}>
      <div onClick={(e) => e.stopPropagation()}>
        <span onClick={()=>setSideFilter('process')}>In process</span>
        <span onClick={()=>setSideFilter('declined')}>Declined</span>
        <span onClick={()=>setSideFilter('interesting')}>Interesting</span>
        <span onClick={()=>setSideFilter('other')}>Other</span>
        <span onClick={()=>setSideFilter(null)}>Clear</span>
        <button className="closeModal" onClick={() => setSide("")}>
          Close
        </button>
      </div>
    </div>
  )
}

export default SideBarModal