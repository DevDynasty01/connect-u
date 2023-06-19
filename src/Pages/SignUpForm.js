import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const SignUpForm = () => {
	const navigate = useNavigate();

	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	//Data for SQL DB
	const [registeredName, setRegisteredName] = useState('');
	const [registeredUserName, setRegisteredUserName] = useState('');
	const [registeredRole, setRegisteredRole] = useState('');
	const [registeredPosition, setRegisteredPosition] = useState('');

	const [user, setUser] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			).then((userCredential) => {
				const url = `http://localhost:8080/employees`;
				axios.post(url, {
					email: userCredential.user.email,
					guid: userCredential.user.uid,
					name: registeredName,
					username: registeredUserName,
					role: registeredRole,
					position: registeredPosition,
				});
			});

			console.log(user);
			alert('Thank you, user was created');
			navigate('/login');
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
		<>
			
				<h1>Sign Up</h1>

				<label>Full Name</label>
				<input
					placeholder='Your Name...'
					type='text'
					onChange={(event) => {
						setRegisteredName(event.target.value);
					}}
				/>
				<br />
				<label>Username</label>
				<input
					placeholder='Your Username...'
					type='text'
					onChange={(event) => {
						setRegisteredUserName(event.target.value);
					}}
				/>
				<br />
				<label>Email</label>
				<input
					placeholder='Email...'
					onChange={(event) => {
						setRegisterEmail(event.target.value);
					}}
				/>
				<br />
				<label>Password</label>
				<input
					placeholder='Password...'
					type='password'
					onChange={(event) => {
						setRegisterPassword(event.target.value);
					}}
				/>
				<br />
				<label>Position</label>
				<input
					placeholder='Your Position...'
					type='text'
					onChange={(event) => {
						setRegisteredPosition(event.target.value);
					}}
				/>
				<label>Role</label>
				<select
					name='role'
					onChange={(event) => {
						setRegisteredRole(event.target.value);
					}}
				>
					{' '}
					<option key='clear' value=''></option>
					<option key='employee' value='Employee'>
						Employee
					</option>
					<option key='manager' value='Manager'>
						Manager
					</option>
				</select>
				<br />
				<button onClick={register}>Create User!</button>
				<br />
				<button onClick={logout}> Sign Out </button>
				{/* <h4> User Logged In: </h4>
			{user?.email}
			<p>User ID: </p>
			{user?.uid}
			<br /> */}
			
		</>
	);
};
