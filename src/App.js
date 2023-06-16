import './App.css';
import React from 'react';

import { EmployeePage } from './Pages/EmployeePage';
import { LoginForm } from './Pages/LoginForm';
import { SignUpForm } from './Pages/SignUpForm';
import { HomePage } from './Pages/HomePage';
import { EmployerTask } from './Pages/EmployerTask';
import { NewTaskForm } from './Components/NewTaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EmployeeTask } from './Components/EmployeeTask';

function App() {
  return (
		<div className='App'>
	
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginForm />} />
					<Route path='/new-user' element={<SignUpForm />} />
					<Route path='/manager-page' element={<EmployerTask />} />
					<Route path='/employee-page' element={<EmployeePage />} />
					<Route path='/employee-task' element={<EmployeeTask/>}/>
					<Route path='/newtask' element={<NewTaskForm />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
