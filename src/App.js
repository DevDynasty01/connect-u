

import './App.css';
import React from 'react';

import { EmployeePage } from './Pages/EmployeePage';
import { LoginForm } from './Pages/LoginForm';
import { SignUpForm } from './Pages/SignUpForm';
import { HomePage } from './Pages/HomePage';
import { EmployerTask } from './Pages/EmployerTask';
import { NewTaskForm } from './Components/NewTaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EmployerDashboard } from './Components/EmployerDashboard';
import { QueryClientProvider, QueryClient } from 'react-query';
import {Example} from './Components/Example'
import { EmployeeTask } from './Components/EmployeeTask';

// Create a new instance of QueryClient
const queryClient = new QueryClient();


function App() {
  return (

    // Wrap your application with QueryClientProvider and provide the queryClient instance
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/new-user' element={<SignUpForm />} />
            <Route path='/manager-page' element={<EmployerTask />} />
            <Route path='/employee-page' element={<EmployeePage />} />
            <Route path='/employer-dashboard' element={<EmployerDashboard />} />
			<Route path='/employee-task' element={<EmployeeTask/>}/>
            <Route path='/Example' element={<Example />} />
            <Route path='/newtask' element={<NewTaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );

}

export default App;
