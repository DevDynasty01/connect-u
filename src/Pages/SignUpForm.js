import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

import { auth } from '../firebase/firebaseConfig';
import '../Styles/SignUpForm.css';

export const SignUpForm = () => {
	const navigate = useNavigate();

	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	//Data for SQL DB
	const [registeredName, setRegisteredName] = useState('');
	const [registeredUserName, setRegisteredUserName] = useState('');
	const [registeredRole, setRegisteredRole] = useState('');
	const [registeredPosition, setRegisteredPosition] = useState('');
	const [registeredPhoto, setRegisteredPhoto] = useState('');

	const [user, setUser] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const register = async () => {
		console.log('register');
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
					profile_pic: registeredPhoto,
				});
			});

			console.log(user);
			alert('Thank you, user was created');
			navigate('/login');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className='signup-page'>
			<div className='signup-form'>
				<div className='signup-text'>
					<div className='signup-header'>
						<h3>Registration</h3>
						<p>Create your account here!</p>
						<br />
					</div>
				</div>
				<div className='login-form'>
					<input
						placeholder='your name'
						type='text'
						onChange={(event) => {
							setRegisteredName(event.target.value);
						}}
					/>

					<input
						placeholder='your username'
						type='text'
						onChange={(event) => {
							setRegisteredUserName(event.target.value);
						}}
					/>
					<input
						placeholder='noimage.png'
						type='text'
						onChange={(event) => {
							setRegisteredPhoto(event.target.value);
						}}
					/>

					<input
						placeholder='email'
						onChange={(event) => {
							setRegisterEmail(event.target.value);
						}}
					/>

					<input
						placeholder='password'
						type='password'
						onChange={(event) => {
							setRegisterPassword(event.target.value);
						}}
					/>

					<input
						placeholder=' your position'
						type='text'
						onChange={(event) => {
							setRegisteredPosition(event.target.value);
						}}
					/>

					<br />
					<select
						className='bigger'
						name='role'
						onChange={(event) => {
							setRegisteredRole(event.target.value);
						}}
					>
						{' '}
						<option value='' disabled selected hidden>
							choose your role
						</option>
						<option key='employee' value='Employee'>
							Employee
						</option>
						<option key='manager' value='Manager'>
							Manager
						</option>
					</select>
					<br />
					<div>
						<button onClick={register}>Complete registration</button>
					</div>
					<br />
					<p>
						Back to
						<a href='http://localhost:3000/'> home page</a>
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
	<br /> */
