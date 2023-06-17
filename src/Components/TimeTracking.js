import React, { useState } from 'react'

export const TimeTracking = () => {
  let [start, setStart] = useState([]);
  let [lunch, setLunch] = useState([]);
  let [end, setEnd] = useState([]);

  const recordTime = (timeOfDay) =>{
    if (timeOfDay === 'start') setStart(new Date().toUTCString())
    if (timeOfDay === 'lunch') setLunch(new Date().toUTCString())
    else setEnd(new Date().toUTCString())
  }

  
  return (
    <div>
      <button onClick={recordTime =>('start')}>Start of Day</button>
      Start of day: {start}
      <br/>
      <button onClick={recordTime =>('lunch')}>Lunch</button>
      Lunch: {lunch}
      <br/>
      <button onClick={recordTime =>('end')}>End of Day</button>
      End of day: {end}
      
    </div>
  )
}
