import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const EmployerTask = () => {
	const navigate = useNavigate();

	const logOut = async () => {
		await signOut(auth);
		navigate('/');
		localStorage.clear();
		console.log('User logged out');
	};

	const seeTasks = () => {
		navigate('/all-tasks');
	};

	const userName = localStorage.getItem('name');
	return (
		<>
			<h1>Welcome {userName}</h1>
			<h2>Manager Dashboard</h2>
			<img
				src='https://pbs.twimg.com/profile_images/626331479061233664/9BNQV22V_400x400.jpg'
				alt='Profile Pic'
			></img>
			<br />
			<div className=' project'>
				<br />
				<button onClick={seeTasks}>See tasks</button>{' '}
				<button>Assign Task</button>
			</div>

			<br />
			<div className='chat'>
				Chat
				<br />
				<button>Team chat and messaging</button>
			</div>
			<br />
			<div className='Logout'>
				<button onClick={logOut}> Log out</button>
			</div>
		</>
	);
};
