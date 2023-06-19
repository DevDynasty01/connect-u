import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/HomePage.css'

export const HomePage = () => {
	const navigate = useNavigate();

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
				<img alt= 'Company Logo ConnectU'className='logo' src='connectU-logo-removebg-preview.png'/>
				<ul>
					<li><a href='about page'>About</a></li>
					<li><a href='our services'>Services</a></li>
					<li><a href='Contact us'>Contact</a></li>
				</ul>
			</nav>
			<div className='center'>
			     <h1> Welcome to ConnectU</h1>
			     <h2> Do you have an account?</h2>
			     <h2> Register with us</h2>
			 <div className='buttons'>
			     <button className='home-button' onClick={login}> Log in </button>
			    <button className='home-button'onClick={newUser}> I'm new</button>
			 </div>
			</div>
		</div>
	);
};
