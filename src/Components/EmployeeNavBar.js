import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    FaTh,
    FaUserAlt,
    FaCommentAlt,
	FaSignOutAlt
}from "react-icons/fa";
import '../Styles/NavBar.css'

export const EmployeeNavBar = () => {

    const menuItem = [
			{
				path: '/employee-task',
				name: 'Tasks',
				icon: <FaTh />,
			},
			{
				path: '/under-construction',
				name: 'About',
				icon: <FaUserAlt />,
			},

			{
				path: '/under-construction',
				name: 'Chat with your team',
				icon: <FaCommentAlt />,
			},
			{
				path: '/',
				name: 'Log out',
				icon: <FaSignOutAlt />,
			},
		];
    

  return (
    <div className="container">
           <div className="sidebar">
               <div className="top_section">
                   <h1 className="logo">
                    <img alt= 'Company Logo ConnectU'className='logo' src='connectU-logo-removebg-preview.png'/>
                    </h1>
                   <div className="bars">
    
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        </div>
  )
}