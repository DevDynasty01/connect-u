import React from 'react';

import { useNavigate } from 'react-router-dom';





export const EmployeePage = () => {

      const navigate = useNavigate();

   

      const goToEmployeeTask = () => {

        navigate('/employee-task');

      };

	//   const goToEmployerTask = () => {
	// 	navigate('/manager-page')
	//   }




   



  




  




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

                       <button onClick={goToEmployeeTask}>View Tasks</button> Dashboard{' '}
					   {/* <li><button onClick={goToEmployerTask}>View Dashboard</button></li> */}

                </ol>

            </div>

        </div>

    );

};