import React, { useState, useEffect } from "react";

import axios from "axios";

export const Example = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
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
      Employer Dashboard
      <br />
      <table>
        <thead>
          <tr>
            <th>Task </th>

            <th>Assign To</th>

            <th>Assign Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.Task}</td>

              <td>{item.AssignTo}</td>
              <td>{item.DueDate}</td>
              <td>{item.AssignDate}</td>
              <td>{item.Status}</td>

              <td>
                <select value={item.Status}>
                  <option value="completed">completed</option>

                  <option value="In Progress">In Progress</option>

                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
