import { useState, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

function LoginTest() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

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
		} catch (error) {
			console.log(error.message);
		}
	};

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
		<div className='App'>
			<div>
				<h3> New User </h3>
				<input
					placeholder='Email...'
					onChange={(event) => {
						setRegisterEmail(event.target.value);
					}}
				/>
				<br />
				<input
					placeholder='Password...'
					onChange={(event) => {
						setRegisterPassword(event.target.value);
					}}
				/>
				<br />
				<button onClick={register}> Create User</button>
			</div>

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

			<button onClick={logout}> Sign Out </button>
		</div>
	);
}

export default LoginTest;
