import React,{useContext} from 'react'
import './sortingButton.scss'
import { applicationContext } from "../../context";


const SortingButton = ({sortContent,sortToggle}) => {
  const {setFreshData} = useContext(applicationContext)
  return (
    <div className='sortingButton'>
<button onClick={()=>{sortToggle();setFreshData()}}>{sortContent}</button>
    </div>
  )
}

export default SortingButton