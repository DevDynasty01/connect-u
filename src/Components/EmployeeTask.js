<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Style/EmployeeTask.css'

>>>>>>> dev

export const EmployeeTask = () => {
	const navigate = useNavigate();

<<<<<<< HEAD
	const [data, setData] = useState([]);
=======
  const [data, setData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
>>>>>>> dev

  const userName = localStorage.getItem('name');

// TODO: Get specific tasks per user
  	useEffect(() => {
			const fetchData = async () => {
        let guid = localStorage.getItem('guid');
        console.log('guid: ', guid ) 
				try {
					const response = (
						await axios.get(`http://localhost:8080/employee/` + guid + `/tasks`)
					).data;
					setData(response);
					console.log('response:', response);
				} catch (error) {
					console.log(error);
				}
			};
			fetchData();
		}, []);

<<<<<<< HEAD
	// UPDATE task status to server
	const updateTaskStatus = async (id, status) => {
		try {
			const url = `http://localhost:8080/tasks/:id`;
			await axios.put(url, {
				id: id,
				status: status,
			});
		} catch (error) {
			console.log(error);
		}
	};

  // Update task status on UI and send it to server
	const handleStatusChange = (itemId, selectedValue) => {
		const updatedData = data.map((item) =>
			item.id === itemId ? { ...item, status: selectedValue } : item
		);
		setData(updatedData);
		console.log('updatedData: ', updatedData);
		updateTaskStatus(itemId, selectedValue);
	};

	//Back to Dashboard
	const returnToDashboard = () => {
		console.log('Going back to dashboard');
		navigate('/employee-page');
	};

	return (
		<div className='Table'>
			<h1>{userName}'s Tasks</h1>
			<br />
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Date Assigned</th>
						<th>Due Date</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.task}</td>
							<td>{item.date_assigned}</td>
							<td>{item.due_date}</td>
							<td>
								<select
									onChange={(e) => handleStatusChange(item.id, e.target.value)}
								>
									<option>{item.status}</option>
									<option value='Pending'>Pending</option>
									<option value='In Progress'>In Progress</option>
									<option value='Completed'>Completed</option>
								</select>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={returnToDashboard}>Go to Dashboard</button>
		</div>
	);
=======
  // const handleStatusChange = (itemId, selectedValue) => {
  //   const updatedData = data.map((item) =>
  //     item.id === itemId ? { ...item, Status: selectedValue } : item
  //   );
  //   setData(updatedData);
  // };

  axios.put('http://localhost:8080/statusUpdate', {status: selectedStatus} ).then((response) => 
      {console.log(response.status, response.data);})

  return (
    <div className="page">
      <div className='emp-dashboard'>
      <h1>Your dashboard</h1>
      <table className='emp-table'>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assign Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.date_assigned}</td>
              <td>{item.due_date}</td>
              <td>
                <select className='status-select'
                  value={selectedStatus}
                  // onChange={(e) => handleStatusChange(item.id, e.target.value)}
                > onChange={(e) => setSelectedStatus(e.target.value)}
                  <option value="Pending">Select your status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
>>>>>>> dev
};
