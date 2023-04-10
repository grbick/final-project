import React from 'react'
import './candidateProfilePage.scss'
import Header from "../components/Header"
import PersonInfo from "../components/PersonInfo"
import ReportTable from "../components/ReportTable"
import Footer from "../components/Footer"

const CandidateProfilePage = () => {
  return (
    <div className='candidateProfilePage'>
      <Header />
      <main >
        <div className="personDiv">
          <img src="" alt="" />
          <PersonInfo />
        </div>
        <ReportTable />
      </main>
      <Footer />
    </div>
  )
}

export default CandidateProfilePage