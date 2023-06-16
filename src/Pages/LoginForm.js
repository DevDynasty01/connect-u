import React, { useEffect, useState } from 'react';
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';



export const LoginForm = () => {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [user, setUser] = useState({});

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
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
