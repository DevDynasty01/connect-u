import React, { useRef } from 'react';

export const SignUpForm = () => {
	const firstNameRef = useRef('');
	const lastNameRef = useRef('');
	const emailRef = useRef('');
	const userNameRef = useRef('');
	const passWordRef = useRef('');
	const phoneNumberRef = useRef('');
	const addressRef = useRef('');

	const handleFirstBox = (change) => {
		firstNameRef.current = change.target.value;
	};

	const handleSecondBox = (change) => {
		lastNameRef.current = change.target.value;
	};

	const handleThirdBox = (change) => {
		emailRef.current = change.target.value;
	};

	const handleFourthBox = (change) => {
		userNameRef.current = change.target.value;
	};

	const handleFifthBox = (change) => {
		passWordRef.current = change.target.value;
	};

	const handleSixthBox = (change) => {
		phoneNumberRef.current = change.target.value;
	};

	const handleSeventhBox = (change) => {
		addressRef.current = change.target.value;
	};
	const handleClick = () => {
		alert('User created');
		console.log(userNameRef.current);
		console.log(passWordRef.current);
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
			<input type='email' onChange={handleThirdBox} />

			<br />

			<label>Username</label>
			<input type='username' onChange={handleFourthBox} />

			<br />

			<label>Password</label>
			<input type='password' onChange={handleFifthBox} />

			<br />

			<label>Phone Number</label>
			<input type='phone number' onChange={handleSixthBox} />

			<br />

			<label>Address</label>
			<input type='address' onChange={handleSeventhBox} />

			<button onClick={handleClick}>Submit</button>
		</>
	);
};
