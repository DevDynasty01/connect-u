import React, {useState, useRef, useEffect} from 'react'
import Calendar from 'react-calendar'
import axios from 'axios'; 
import '../Style/NewTaskForm.css'

export const NewTaskForm = () => {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [selected, setSelected] = useState(employees[0]);
    let refTask = useRef(null);
    //TODO 1: add new task to DB everytime a manager writes a task
    //TODO 2: add calendar to select date the task is assigned to
    //TODO 3: add Drop down list of employees in DB for managers to assign tasks to
    //TODO 4: Atomatically assign date task was created and send it to DB
    useEffect(() => {
        const fetch = async () => {
            const users = ( await axios.get("http://localhost:8080/employees")).data
            setEmployees(users);
        };
        fetch();
    },[])

    const addNewTask = () => {
        console.log(refTask.current.value)
        refTask.current.value = '';
        console.log(selected)
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
                <td><input ref={refTask}type = 'text' placeholder='Write your task here'></input></td>
            </tr>
            <tr>
                <td>Due Date</td>
                <td> <button onClick={pickDate}>{showCalendar? "Hide Calendar":"Show Calendar"}</button></td>
                {showCalendar && <Calendar onChange={setDate} value={date}/>}
                {/* Selected date: {date.toDateString()}  */}
                
            </tr>
            <tr>
                <td>Assign to</td>
                
                <td>
                <select  value={selected} onChange={e => setSelected(e.target.value.first_name)}>
                     {employees.map((value) => (
                       <option value={value.first_name} key={value.id}>
                          {value.first_name}
                          {console.log (employees)}
                       </option>
                     ))}
                </select>
                </td>
            </tr>
            </tbody>

            <button onClick={addNewTask}>Send Task</button>

        </table>

    </div>
  )
}
