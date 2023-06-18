import React, { useState } from 'react'

export const TimeTracking = () => {
  let [start, setStart] = useState();
  let [lunch, setLunch] = useState();
  let [backLunch, setBackLunch] = useState();
  let [end, setEnd] = useState();

  const startTime = () =>{
    let time = new Date().toUTCString()
    setStart(time)

  }

  const lunchTime = () =>{
    let time = new Date().toUTCString()
    setLunch(time)
    
  }
  const backFromLunch = () =>{
    let time = new Date().toUTCString()
    setBackLunch(time)

  }

  const endTime = () =>{
    let time = new Date().toUTCString()
    setEnd(time)
    
  }

  return (
    <div>
      <button onClick={startTime}>Start of Day 🌞</button>
      Start of day: {start}
      <br/>
      <button onClick={lunchTime}>Lunch 🥙</button>
      Lunch: {lunch}
      <br/>
      <button onClick={backFromLunch}>Back from to work 👨‍💻</button>
      Back From lunch: {backLunch}
      <br/>
      <button onClick={endTime}>End of Day 💃</button>
      End of day: {end}
      
    </div>
  )
}
