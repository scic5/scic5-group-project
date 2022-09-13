import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/search.css'
import {motion} from 'framer-motion'
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <motion.div 
    className="flex flex-row justify-evenly items-center tour-search absolute inset-x-0 -bottom-10 lg:-bottom-2 h-16 z-10 bg-gradient-to-r from-fuchsia-400 to-blue-500"
      initial={{y:250}}
      animate={{y:-10}}
      transition={{delay:0.2,type:'spring',stiffness:120}}
    >
      <div><input placeholder='From' /></div>
      <div><input placeholder='To' /></div>
      <div className=''>
              <select class="searchSelect">
                <option defaultValue={'Travel Types'}>Travel Type</option>
                <option value="cityTour">City Tours</option>
                <option value="vacationTour">Vacation Tours</option>
                <option value="coupleTour">Couple Tours</option>
                <option value="groupTours">Group Tours</option>
              </select>
      </div>
      <div className="dateView">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div><button className='bg-orange-600' type='submit'>Find Now</button></div>
    </motion.div>
  );
};

export default Search;