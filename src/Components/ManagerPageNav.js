import React, { useState, useEffect } from 'react';
import { ManagerNavBar } from '../Components/ManagerNavBar';
import axios from 'axios';
import '../Styles/ManagerPageNav.css';

export const ManagerPageNav = () => {
	let [employees, setEmployees] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			const users = (await axios.get(`http://localhost:8080/employees`)).data;
			setEmployees(users);
		};
		fetch();
	}, []);
const userName = localStorage.getItem('name');
	return (
		<body className='body'>
			<div className='container-page'>
				<ManagerNavBar />
				<h1>Welcome {userName}!</h1>
				<section className='main'>
					<div className='top'>
						{employees.map((p) => {
							if (p.role === 'Manager') {
								return (
									<h1>
										{' '}
										<img
											alt='profile'
											className='profile-pic-manager'
											src={p.profile_pic}
										/>
									</h1>
								);
							}
						})}
					</div>

					{employees.map((p) => {
						if (p.role === 'Employee') {
							return (
								<div className='employees'>
									<div className='profile'>
										<img
											alt='profile'
											className='profile-pic'
											src={p.profile_pic}
										/>
										<h4>{p.name}</h4>
										<h3>{p.position}</h3>
										<p>{p.email}</p>
									</div>
								</div>
							);
						}
					})}
				</section>
			</div>
		</body>
	);
};
