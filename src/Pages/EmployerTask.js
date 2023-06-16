import React from "react";

import { useNavigate } from 'react-router-dom'




// import './EmployerStyle.css'




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
			<div>Welcome to Employer Dashboard</div>

			<img
				src='https://pbs.twimg.com/profile_images/626331479061233664/9BNQV22V_400x400.jpg'
				alt='Profile Pic'
			></img>

			<br />
			<div>
				Project Management:
				
				<br />
				<button> 1.Task assignments </button>
				<br />
				<button> 2.Project timelines and milestones</button>
				<br />
				<button> 3.Progress tracking</button>
				<br />
				<button>4.Priority tasks </button>
			</div>
			<br />

			<div>
				Task Management
				<br />
				<button>1.To-do lists</button>
				<br />
				<button>2.Task deadlines and reminders</button>
				<br />
				<button>3.Task dependencies</button>
				<br />
				<button>4.Task status updates</button>
			</div>
			<br />
	
			<div>
				<button> Log Out</button>
			</div>

		</>
	);
};

