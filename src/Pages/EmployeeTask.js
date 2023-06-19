import React, { useState, useEffect } from "react";
import axios from "axios";





export const EmployeeTask = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(

          "https://jsonplaceholder.typicode.com/todo"

        );

        const userData = response.data;
        setData(userData);
        console.log(userData);

      } catch (error) {

        console.log(error);
      }

    };

    fetchData();

  }, []);




  return (

    <div>

      <div >
      <h1>Your dashboard</h1>
      <table >
        <thead>

          <tr>

            <th>Task</th>
            <th>Assigned on</th>
            <th>Due Date</th>
            <th>Status</th>

          </tr>

        </thead>
        <tbody>

          {data.map((item) => (

            <tr key={item.id}>
              <td>{item.Task}</td>
              <td>{item.AssignDate}</td>
              <td>{item.DueDate}</td>

              <td>

                <select value={item.Status}>

                  <option value="Pending">Select your status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>

                </select>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
      </div>
    </div>

  );

};