import './App.css';
import React from 'react';

import { EmployeePage } from './Pages/EmployeePage';
import { LoginForm } from './Pages/LoginForm';
import { SignUpForm } from './Pages/SignUpForm';
import { HomePage } from './Pages/HomePage';
import { EmployerTask } from './Pages/EmployerTask';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginTest from './Pages/LoginTest';

function App() {
  return (
		<div className='App'>
			<header>
				<p>Hello.</p>
			</header>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginForm />} />
					<Route path='/new-user' element={<SignUpForm />} />
					<Route path='/manager-page' element={<EmployerTask />} />
					<Route path='/employee-page' element={<EmployeePage />} />
				</Routes>
			</BrowserRouter>
			<LoginTest />
		</div>
	);
}

export default App;
