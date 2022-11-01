import React from 'react'
import CuisineList from '../components/CuisineList'
import Header from '../components/Header'
import Modal from '../components/modal'

function Cuisine() {
  return (
    <div>
        <Header/>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <CuisineList/>
        </div>
        <Modal/>
    </div>
  )
}

export default Cuisine