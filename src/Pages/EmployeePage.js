import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';


export const EmployeePage = () => {
	const navigate = useNavigate();

	const logOut = async () => {
		await signOut(auth);
		navigate('/');
		localStorage.clear();
		console.log('User logged out');
	};
	
	const goToEmployeeTask = () => {
		navigate('/employee-task');
	};
	const userName = localStorage.getItem('name');
	return (
		<>
			<h1>Welcome {userName}!</h1>
			<h2>Employee Dashboard</h2>
			<img
				src='https://pbs.twimg.com/profile_images/626331479061233664/9BNQV22V_400x400.jpg'
				alt='Profile Pic'
			></img>
			<div>
				<button onClick={goToEmployeeTask}>View My Tasks</button>{' '}
				<button onClick={logOut}> Log Out </button>
			</div>
		</>
	);
};
