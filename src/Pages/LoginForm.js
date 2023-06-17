import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

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
			await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			).then((userCredential) => {
				//Getting user info from mysql according to Firebase returned data
				axios
					.get(`http://localhost:8080/employees/` + userCredential.user.uid)
					.then((userData) => {
						setUserInfo(userData);
						console.log('role:', userData);
						if (userData.data.role === 'Manager') {
							navigate('/manager-page');
						} else {
							navigate('/employee-page');
						}
					});	
			});
		} catch (error) {
			console.log(error.message);
		}
	};
	const logout = async () => {
		await signOut(auth);
	};

	return (
		<div className='boxes'>
			<div>
				<h3> Login </h3>
				<input
					placeholder='Email...'
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<br />
				<input
					placeholder='Password...'
					type='password'
					onChange={(event) => {
						setLoginPassword(event.target.value);
					}}
				/>
				<br />

				<button onClick={login}> Login</button>
			</div>

			<h4> User Logged In: </h4>
			{user?.email}
			<p>User ID: </p>
			{user?.uid}
			<br />
			<button onClick={logout}> Log Out </button>
		</div>
	);
};
