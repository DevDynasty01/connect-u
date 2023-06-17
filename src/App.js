import React from 'react';
import './App.css';
import { EmployeePage } from './Pages/EmployeePage';
import { LoginForm } from './Pages/LoginForm';
import { SignUpForm } from './Pages/SignUpForm';
import { HomePage } from './Pages/HomePage';
import { EmployerPage} from './Pages/EmployerPage';
import { NewTaskForm } from './Components/NewTaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EmployerDashboard } from './Components/EmployerDashboard';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Example } from './Components/Example'
import { EmployeeTask } from './Components/EmployeeTask';
import { Window } from './Components/Window';
import { TimeTracking } from './Components/TimeTracking';
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
            <Route path='/manager-page' element={<EmployerPage />} />
            <Route path='/employee-page' element={<EmployeePage />} />
            <Route path='/employer-dashboard' element={<EmployerDashboard />} />
			      <Route path='/employee-task' element={<EmployeeTask/>}/>
            <Route path='/Example' element={<Example />} />
            <Route path='/newtask' element={<NewTaskForm />} />
            <Route path='/window' element={<Window />}/>
            <Route path='/clock'  element={<TimeTracking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );

}

export default App;
