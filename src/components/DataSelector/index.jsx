import React from 'react'
import './dataSelector.scss'

const DataSelector = ({data,setData}) => {
  return (
    <div className='dataSelector'>
      <span className={data==='reports'?'selected':''} onClick={()=>setData('reports')}>Reports</span>
      <span className={data==='companies'?'selected':''} onClick={()=>setData('companies')}>Companies</span>
      <span className={data==='candidates'?'selected':''} onClick={()=>setData('candidates')}>Candidates</span>
    </div>
  )
}

export default DataSelector