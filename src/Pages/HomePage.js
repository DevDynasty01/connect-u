import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/HomePage.css';

export const HomePage = () => {
	const navigate = useNavigate();
	localStorage.clear();
	const login = () => {
		console.log('You are logged in');
		navigate('/login');
	};

	const newUser = () => {
		navigate('/new-user');
	};

	return (
		<div className='wrapper'>
			<nav className='navbar'>
				<img
					alt='Company Logo ConnectU'
					className='logo'
					src='connectU-logo-removebg-preview.png'
				/>
				<ul>
					<li>
						<a href='/'>About</a>
					</li>
					<li>
						<a href='/'>Services</a>
					</li>
					<li>
						<a href='/'>Contact</a>
					</li>
				</ul>
			</nav>
			<div className='center'>
				<h1> Welcome to ConnectU</h1>
				<h2> Do you have an account?</h2>
				<div>
					<button className='buttons' onClick={login}>
						{' '}
						Log in{' '}
					</button>
				</div>
				<h2> Register with us</h2>
				<div>
					<button className='buttons' onClick={newUser}>
						{' '}
						I'm new
					</button>
				</div>
			</div>
		</div>
	);
};
