import React, {useState, useEffect} from 'react'
import { TestNavBar } from '../Pages/TestNavBar';
import axios from 'axios';
import '../Style/ManagerRibbon.css'

export const ManagerRibbon = () => {
  let [employees, setEmployees] = useState([]);
  

  useEffect(() => {
    const fetch = async () => {
        const users = ( await axios.get(`http://localhost:8080/employees`)).data
        setEmployees(users);
    };
    fetch();
},[])

  
  
  return (
    <body className='body'>
    <div className='container-page'>
      <TestNavBar />

      <section className="main">
        <div className="top">
          {
        employees.map((p) => {
          if(p.role === 'Manager') {
              return <h1> {p.name} <img alt= 'profile'className='profile-pic-manager' src={p.profile_pic}/></h1>
              
          } })}

          </div>

          <h2>My team</h2>

          {
        employees.map((p) => {
          if(p.role === 'Employee') {
          return (
          <div className='employees'>
            <div className="profile">
                <img alt= 'profile' className='profile-pic' src={p.profile_pic}/>
                  <h4>{p.name}</h4>
                  <h3>{p.position}</h3>
                  <p>{p.email}</p>
            </div>
          </div>
          ) } })}
        
        
      </section>
    </div>
    </body>
  )
}
