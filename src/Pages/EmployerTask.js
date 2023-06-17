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
        My projects
        <br />
        <button onClick= {TaskAssignment}>Task managment </button>
        <button> Assign new task </button>

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

