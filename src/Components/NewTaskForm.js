import React, {useState, useRef} from 'react'
import Calendar from 'react-calendar'
import '../Style/NewTaskForm.css'

export const NewTaskForm = () => {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    let refTask = useRef(null);
    //TODO 1: add new task to DB everytime a manager writes a task
    //TODO 2: add calendar to select date the task is assigned to
    //TODO 3: add Drop down list of employees in DB for managers to assign tasks to
    //TODO 4: Atomatically assign date task was created and send it to DB

    const addNewTask = () => {
        refTask.current.value = '';
        console.log('it sent!!')
    }

    const pickDate = () => {
        setShowCalendar(!showCalendar);
    }

  return (
    <div className='taskForm'>
        <table>
            <tbody>
            <tr>
                <td>Task Name</td>
                <td><input ref={refTask}type = 'text' placeholder='write your task here'></input></td>
            </tr>
            <tr>
                <td>Due Date</td>
                <td> <button onClick={pickDate}>{showCalendar? "Hide Calendar":"Show Calendar"}</button></td>
                {showCalendar && <Calendar onChange={setDate} value={date}/>}
                {/* Selected date: {date.toDateString()}  */}
                
            </tr>
            <tr>
                <td>Assign to</td>
                <td>Drop down list with employees</td>
            </tr>
            </tbody>

            <button onClick={addNewTask}>Send Task</button>

        </table>

    </div>
  )
}
