import React from 'react'
import './sideBarModal.scss'

const SideBarModal = () => {
  return (
    <div className='sideBarModal'>
      <button type='radio' value="inProgress">In Progress</button>
      <button type='radio' value="interesting">Interesting</button>
      <button type='radio' value="declined">Declined</button>
      <button type='radio' value="otherCandidates">Other Candidates</button>

    </div>
  )
}

export default SideBarModal