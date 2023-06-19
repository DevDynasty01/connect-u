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
	
	  const goToEmployeeTask = () => {
	    navigate('/employee-task');
	  };

	  const openChatBox=()=>{
		navigate('/employee-task');
	  }

	return (
		<div>
			<h1>Welcome Valued Team Member!</h1>
			<p>Ada Lovelace</p>
			<img
				src='https://pbs.twimg.com/profile_images/626331479061233664/9BNQV22V_400x400.jpg'
				alt='Profile Pic'
			></img>
			<div>
				<p>Task Manager</p>
				<ol>
						<button onClick={goToEmployeeTask}>View Tasks</button> Dashboard{' '}
				</ol>
			</div>
		</div>
	);
};
