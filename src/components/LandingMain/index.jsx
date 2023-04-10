import React from 'react'
import './landingPage.scss'
import FilterButton from "../FilterButton"
import SideBarModal from "../SideBarModal"
import CardWrapper from "../CardWrapper"
import Pagination from "../Pagination"

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='titleDiv'>
        <FilterButton />
        <h2>Candidates</h2>
      </div>
      <SideBarModal />
      <CardWrapper />
      <Pagination />
    </div>
  )
}

export default LandingPage