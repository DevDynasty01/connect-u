import React from "react";
import { useNavigate } from 'react-router-dom'

import './EmployerStyle.css'

export const EmployerTask = () => {
  const navigate = useNavigate(); 
  const logout = () => {
      
      console.log('You are logged out');
      navigate('/')
  }

  const TaskAssignment = () => {
      
	console.log('You are logged out');
	navigate('/Example')
}

  return (
    <>
      <div className="Dashboard">Welcome to Employer Dashboard</div>
      <br />
      <div className=" project">
        Project Management:
        <br />
        <button onClick= {TaskAssignment}>Task assignments </button>
        <button> Task Assigened </button>

      </div>
      <br />
      <div className="ProjectM">
    
      </div>
      <br />
      <div className="chat">
        Chat
        <br />
        <button>Team chat and messaging</button>
      </div>
      <br />
      <div className="Logout">
      <button onClick= {logout}> Log out</button>
      </div>
      
    </>
  );
};
