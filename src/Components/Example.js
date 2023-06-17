import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Example = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const logout = () => {
    console.log("You are logged out");
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await axios.get("http://localhost:8080/tasks/"))
          .data;

      
        setData(response);

        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <div className="title">Your dashboard</div>
        <table>
          <thead>
            <tr>
              <th> Task Name</th>

              <th> Status</th>

              <th>Date Assigned</th>

              <th>Due Date</th>

              {/* <th>Assigned From</th> */}

              <th>Assigned To</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.task}</td>
                <td>{item.status}</td>
                <td>{item.due_date}</td>
                <td>{item.date_assigned}</td>
                <td>{item.assigned_to}</td>
                {/* <td>{item.assigned_from}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={logout}> Log out</button>
      </div>
    </>
  );
};
