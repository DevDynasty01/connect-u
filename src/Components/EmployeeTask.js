import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Style/EmployeeTask.css'


export const EmployeeTask = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  const logout = () => {
    console.log("You are logged out");
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (
          await axios.get(`http://localhost:8080/tasks/`)
        ).data;
        setData(response);
       console.log('response:', response)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
};
