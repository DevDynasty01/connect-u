import React from 'react';

export const EmployerTask = () => {
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
