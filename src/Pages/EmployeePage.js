import React from 'react';

export const EmployeePage = () => {
	const task1Completed = () => {
		console.log('Task 1 completed');
	};

	const task2Completed = () => {
		console.log('Task 2 completed');
	};

	const task3Completed = () => {
		console.log('Task 3 completed');
	};

	return (
		<div>
			<h1>Welcome Valued Team Member!</h1>
			<p>Ada Lovelace</p>
			<img
				src='https://pbs.twimg.com/profile_images/626331479061233664/9BNQV22V_400x400.jpg'
				alt='Profile Pic'
			></img>
			<div>
				<p>Task Manager</p>
				<ol>
					<li>
						<button onClick={task1Completed}>Done</button> New Hire Orientation{' '}
					</li>
					<li>
						<button onClick={task2Completed}>Done</button> Client Meeting
					</li>
					<li>
						<button onClick={task3Completed}>Done</button> Coaching One-On-One
					</li>
				</ol>
			</div>
		</div>
	);
};
