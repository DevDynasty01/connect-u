import React, { useState, useEffect, useRef } from 'react';

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const SignUpForm = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

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
			);
			console.log(user);
			alert('User created');
		} catch (error) {
			console.log(error.message);
		}
	};
	const logout = async () => {
		await signOut(auth);
	};

	const firstNameRef = useRef('');
	const lastNameRef = useRef('');
	const userNameRef = useRef('');
	const phoneNumberRef = useRef('');
	const addressRef = useRef('');

	const handleFirstBox = (change) => {
		firstNameRef.current = change.target.value;
	};

	const handleSecondBox = (change) => {
		lastNameRef.current = change.target.value;
	};

	const handleFourthBox = (change) => {
		userNameRef.current = change.target.value;
	};

	const handleSixthBox = (change) => {
		phoneNumberRef.current = change.target.value;
	};

	const handleSeventhBox = (change) => {
		addressRef.current = change.target.value;
	};

	return (
		<>
			<h1>Sign Up</h1>

			<label>First Name</label>
			<input type='text' onChange={handleFirstBox} />

			<br />

			<label>Last Name</label>
			<input type='text' onChange={handleSecondBox} />

			<br />

			<label>Email</label>
			<input
				placeholder='Email...'
				onChange={(event) => {
					setRegisterEmail(event.target.value);
				}}
			/>
			<br />

			<label>Username</label>
			<input type='username' onChange={handleFourthBox} />

			<br />

			<label>Password</label>
			<input
				placeholder='Password...'
				onChange={(event) => {
					setRegisterPassword(event.target.value);
				}}
			/>
			<br />

			<label>Phone Number</label>
			<input type='phone number' onChange={handleSixthBox} />

			<br />

			<label>Address</label>
			<input type='address' onChange={handleSeventhBox} />

			<br />

			<button onClick={register}> Create User</button>

			<h4> User Logged In: </h4>
			{user?.email}
			<p>User ID: </p>
			{user?.uid}
			<br />
			<button onClick={logout}> Sign Out </button>
		</>
	);
};
