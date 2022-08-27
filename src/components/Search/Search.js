import React, { useState,CSSProperties } from 'react'
import '../../assets/search.css'
import DateComponent from '../Date/DateComponent'



const Search = () => {
  return (
      <div className='flex tour-search absolute inset-x-0 -bottom-16 h-16 z-10 bg-gradient-to-r from-fuchsia-400 to-blue-500'>
        <div><input placeholder='From' /></div>
        <div><input placeholder='To' /></div>
        <div className='datePicker relative'>
        <input placeholder='To' />
        </div>
        <div className=''>
            <select class="searchSelect">
              <option defaultValue={'Travel Types'}>Travel Type</option>
              <option value="cityTour">City Tours</option>
              <option value="vacationTour">Vacation Tours</option>
              <option value="coupleTour">Couple Tours</option>
              <option value="groupTours">Group Tours</option>
            </select>
        </div>
        <div><button className='bg-orange-600' type='submit'>Find Now</button></div>
      </div>
  )
}

export default Search