
import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

export const EmployerDashboard = () => {
  const [userName, setUserName] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/users/1';
  const usersQuery = useQuery('user/1', async () => await axios.get(url), {
    refetchOnWindowFocus: false,
    enabled: false
  });

  if (usersQuery.isFetched) {
    if (userName === '') {
      setUserName(usersQuery.data.data.name);
    }
  }

  const onhandlePush = () => {
    usersQuery.refetch();
  };

  return (
    <>
      {/* <button onClick={() => onhandlePush()}>Get user</button>
      <div>Username: {userName}</div> */}

<table>
       <thead>
        <tr>
          <th>TaskName  <button onClick={() => onhandlePush()}>Get user</button>
          Username: {userName}
          
          </th>
         <th>Status</th>
          <th>Assigned to </th>
          <th>Assign Date</th>
         <th>Due Date</th>
        </tr>
     </thead>
    <tbody>
       <tr>
         <td>New Hire Orientation</td>
      <td>Assigned</td>
          <td>Karina Velasquez</td>
     <td>6/14/2023</td>
          <td>7/10/2023</td>
  </tr>
      <tr>
           <td>Backlog Grooming</td>
          <td>Assigned</td>
       <td>Rose Chai</td>
        <td>6/14/2023</td>
        <td>7/10/2023</td>
        </tr>
   </tbody>
    </table>
    </>
  );
 }




















    
  











