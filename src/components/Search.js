import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Search = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <>
    <div><input value={selectedDay} type='date' /><button>Click</button></div>
    
    <div className="hidden">
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        
      />
    </div>
    </>
  );
};

export default Search;