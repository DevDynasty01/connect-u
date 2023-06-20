import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

import '../Styles/LoginForm.css';

export const LoginForm = () => {
	const navigate = useNavigate();

	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [userInfo, setUserInfo] = useState('');

	const [user, setUser] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const login = async () => {
		try {
			await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
				(userCredential) => {
					//Getting user info from mysql according to Firebase returned data
					axios
						.get(`http://localhost:8080/employees/` + userCredential.user.uid)
						.then((userData) => {
							// setUserInfo(userData);
							localStorage.setItem('guid', userData.data.guid);
							localStorage.setItem('name', userData.data.name);
							if (userData.data.role === 'Manager') {
								navigate('/manager-dashboard');
							} else {
								navigate('/employee-dashboard');
							}
						});
				}
			);
		} catch (error) {
			console.log(error.message);
		}
	};
	const logout = async () => {
		await signOut(auth);
		localStorage.clear();
		console.log('User logged out');
	};

	return (
		<div className='login-page'>
			<div className='form'>
				<div className='login-text'>
					<div className='login-header'>
						<h3>Login</h3>
						<p>Enter you credentials to login</p>
					</div>
				</div>

				<div className='login-form'>
					<input
						placeholder='email'
						onChange={(event) => {
							setLoginEmail(event.target.value);
						}}
					/>

					<input
						placeholder='password'
						type='password'
						onChange={(event) => {
							setLoginPassword(event.target.value);
						}}
					/>
					<div>
						<button onClick={login}>LOGIN</button>
					</div>
					<br />
					<p>
						Don't have an account?
						<br />
						<a href='http://localhost:3000/new-user'> Create one here!</a>
					</p>
				</div>
			</div>
		</div>
	);
};


	/* <h4> User Logged In: </h4>
			{user?.email}
			<p>User ID: </p>
			{user?.uid}
			<br />
			<button onClick={logout}> Log Out </button> */
