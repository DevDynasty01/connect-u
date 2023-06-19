import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../Styles/SignUpForm.css';

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
	};

	return (
		<div className='page'>
			<div className='signup-page'>
				<div classname='form-signup'>
					<div className='signup-text'>
						<h1>Sign Up</h1>
						<div className='signup-header'>
							<div className='signup-form input'></div>
						</div>
						<div className='form-signup button '>
							<form className='signup-form'>
								<h3 className='register'>Registration</h3>

								<label>Full Name</label>

								<input
									placeholder='👤 Your Name'
									type='text'
									onChange={(event) => {
										setRegisteredName(event.target.value);
									}}
								/>

								<form className='username-form'></form>
								<label>Username</label>
								<input
									placeholder='👥 Your Username'
									type='text'
									onChange={(event) => {
										setRegisteredUserName(event.target.value);
									}}
								/>

								<label>Email</label>
								<input
									placeholder=' 📧 Email'
									onChange={(event) => {
										setRegisterEmail(event.target.value);
									}}
								/>

								<label>Password</label>
								<input
									placeholder='🔒 Password'
									type='password'
									onChange={(event) => {
										setRegisterPassword(event.target.value);
									}}
								/>

								<label>Position</label>
								<input
									placeholder=' ❍ Your Position'
									type='text'
									onChange={(event) => {
										setRegisteredPosition(event.target.value);
									}}
								/>

								<label>Role</label>
								<br />
								<select
									className='bigger'
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
								<br />

								<button onClick={register}>Create User</button>
								<button onClick={logout}> Sign Out </button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
