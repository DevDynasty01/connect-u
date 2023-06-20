import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';


import { HomePage } from './Pages/HomePage';
import { LoginForm } from './Pages/LoginForm';
import { SignUpForm } from './Pages/SignUpForm';

/* Old Dashboards */
import { EmployerPage} from './Pages/EmployerPage';
import { EmployeePage } from './Pages/EmployeePage';

/* New Dashboards */
import { PageForManager } from './Pages/PageForManager';
import { PageForEmployees } from './Pages/PageForEmployees';

import { NewTaskForm } from './Components/NewTaskForm';

/* Tasks Tables */
import { EmployeeTask } from './Components/EmployeeTask';
import { AllTasks } from './Components/AllTasks';

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

						<Route path='/newtask' element={<NewTaskForm />} />
						

						{/* Old Dashboards */}
						<Route path='/employee-page' element={<EmployeePage />} />
						<Route path='/manager-page' element={<EmployerPage />} />
						
						{/* New Dashboards */}
						<Route path='/manager-dashboard' element={<PageForManager />} />
						<Route path='/employee-dashboard' element={<PageForEmployees />} />

						{/* Tasks Tables */}
						<Route path='/employee-task' element={<EmployeeTask />} />
						<Route path='/all-tasks' element={<AllTasks />} />
					</Routes>
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	);

}

export default App;
