import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { NewTaskForm } from './NewTaskForm';
import '../Styles/AllTasks.css';

export const AllTasks = () => {
	const [data, setData] = useState([]);

	const navigate = useNavigate();

	const logout = () => {
		console.log('You are logged out');
		navigate('/');
	};

	//Back to Dashboard
	const returnToDashboard = () => {
		console.log('Going back to dashboard');
		navigate('/manager-dashboard');
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = (await axios.get('http://localhost:8080/tasks/')).data;
				setData(response);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const userName = localStorage.getItem('name');

	return (
		<body id='manager-body'>
			<div className='body-page'>
				<div className='manager-dashboard'>
					<div className='button-container'>
						<h1>{userName}'s dashboard</h1>
						<Popup
							trigger={<button className='send-task'> Assign new task </button>}
							position='right center'
						>
							<NewTaskForm />
						</Popup>
					</div>
					<table className='manager-table'>
						<thead>
							<tr>
								<th>id</th>
								<th>Responsable</th>
								<th>Task</th>
								<th>Assigned on</th>
								<th>Due Date</th>
								<th> Status</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.assigned_to}</td>
									<td>{item.task}</td>
									<td>{item.date_assigned}</td>
									<td>{item.due_date}</td>
									<td>{item.status}</td>
								</tr>
							))}
						</tbody>
					</table>
					<button onClick={returnToDashboard}>Back to your home page</button>
				</div>
			</div>
		</body>
	);
};
