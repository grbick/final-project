import React, {useContext} from 'react'
import { applicationContext } from "../../context";
import './filterButton.scss'

const FilterButton = () => {
  const {setSide } = useContext(applicationContext);

  return (
    <button className="filterButton" onClick={()=>setSide('filter')}>
    Filter</button>
  )
}

export default FilterButton