import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import '../Styles/NewTaskForm.css';

export const NewTaskForm = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [showCalendar, setShowCalendar] = useState(false);
	const [employees, setEmployees] = useState([]);
	const [selectedID, setSelectedID] = useState('');
	// const [username, setUserName] = useState('');
	let refTask = useRef(null);
	//TODO 1: add new task to DB everytime a manager writes a task
	//TODO 2: add calendar to select date the task is assigned to
	//TODO 3: add Drop down list of employees in DB for managers to assign tasks to
	//TODO 4: Atomatically assign date task was created and send it to DB
	useEffect(() => {
		const fetch = async () => {
			const users = (await axios.get(`http://localhost:8080/employees`)).data;
			setEmployees(users);
		};
		fetch();
	}, []);

	const addNewTask = (e) => {
		let currentDate = new Date().toUTCString();

		const url = `http://localhost:8080/tasks/`;

		e.preventDefault();

		const userData = {
			guid: selectedID,
			task: refTask.current.value,
			status: 'new',
			due_date: selectedDate.toDateString(),
			date_assigned: currentDate,
		};

		axios.post(url, userData).then((response) => {
			console.log(response.status, response.data);
		});
	};

	const pickDate = () => {
		setShowCalendar(!showCalendar);
	};

	return (
		<div className='taskForm'>
			<table>
				<tbody>
					<tr>
						<td>Task Name</td>
						<td>
							<input
								ref={refTask}
								type='text'
								placeholder='Write your task here'
							></input>
						</td>
					</tr>
					<tr>
						<td>Due Date</td>
						<td>
							{' '}
							<button onClick={pickDate}>
								{showCalendar ? 'Hide Calendar' : 'Show Calendar'}
							</button>
							{showCalendar && (
								<Calendar onChange={setSelectedDate} value={selectedDate} />
							)}
							Selected date: {selectedDate.toDateString()}
						</td>
					</tr>
					<tr>
						<td>Assign to</td>

						<td>
							<select
								value={selectedID}
								onChange={(e) => setSelectedID(e.target.value)}
							>
								<option>Select employee</option>
								{employees.map((value) => (
									<option value={value.guid} key={value.row_key}>
										{value.name}
									</option>
								))}
							</select>
						</td>
					</tr>
				</tbody>

				<button onClick={addNewTask}>Send Task</button>
			</table>
		</div>
	);
};
