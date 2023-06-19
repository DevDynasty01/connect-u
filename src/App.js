


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';


import { EmployeePage } from './Pages/EmployeePage';
import { LoginForm } from './Pages/LoginForm';
import { SignUpForm } from './Pages/SignUpForm';
import { HomePage } from './Pages/HomePage';
import { EmployerPage} from './Pages/EmployerPage';


import { NewTaskForm } from './Components/NewTaskForm';
import { AllTasks } from './Components/AllTasks';
import { EmployerDashboard } from './Components/EmployerDashboard';

import { EmployeeTask } from './Components/EmployeeTask';
import { TimeTracking } from './Components/TimeTracking';
import { ExPageForManager } from './Pages/ExPageForManager';


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
						<Route path='/employee-task' element={<EmployeeTask />} />
						<Route path='/all-tasks' element={<AllTasks />} />
						<Route path='/newtask' element={<NewTaskForm />} />
						<Route path='/clock' element={<TimeTracking />} />
						<Route path='/1' element={<ExPageForManager />} />
					</Routes>
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	);

}

export default App;
