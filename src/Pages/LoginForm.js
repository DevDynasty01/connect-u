import React, { useRef } from 'react';

export const LoginForm = () => {
	const userNameRef = useRef('');
	const passWordRef = useRef('');

	const handleFirstBox = (change) => {
		userNameRef.current = change.target.value;
	};

	const handleSecondBox = (change) => {
		passWordRef.current = change.target.value;
	};

	const handleClick = () => {
		alert('Hello User');
		console.log(userNameRef.current);
		console.log(passWordRef.current);
	};

	return (
		<div className='boxes'>
			<h1>Login</h1>

			<label>username</label>

			<input type='username' onChange={handleFirstBox} />
			<br />
			<label>password</label>
			<input type='password' onChange={handleSecondBox} />

			<button onClick={handleClick}>Submit</button>
		</div>
	);
};
