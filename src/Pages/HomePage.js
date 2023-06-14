import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const navigate = useNavigate();

	const login = () => {
		console.log('You are logged in');
		navigate('/login');
	};

	const newUser = () => {
		console.log(
			'User not in the system / enter organization to verify info  (depending of time available)'
		);
	};

	return (
		<div className='Home-page'>
			<h1>Hello!</h1>
			<h2> What do you want to do?</h2>
			<button onClick={login}> Log in to your account</button>
			<br />
			<button onClick={newUser}> I'm new</button>
		</div>
	);
};
