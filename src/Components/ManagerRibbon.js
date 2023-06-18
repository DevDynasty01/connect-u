import React, {useState, useEffect} from 'react'
import { TestNavBar } from '../Pages/TestNavBar';
import axios from 'axios';
import '../Style/ManagerRibbon.css'

export const ManagerRibbon = () => {
  let [employees, setEmployees] = useState([]);
  let [manager, setManager] = useState([]);

  useEffect(() => {
    const fetch = async () => {
        const users = ( await axios.get(`http://localhost:8080/employees`)).data
        setEmployees(users);
    };
    fetch();
},[])

  
  
  return (
    <div className='main-page'>
      <TestNavBar />
      <section class="main">

        <div class="main-top">
          <h1>My profile</h1>
          {
        employees.map((p) => {
          if(p.role === 'Manager') {
              return <h1> {p.name} <img alt= 'profile'className='profile-pic' src={p.profile_pic}/></h1>
          } else{ return (
            <div class="profile">
                <img alt= 'profile-pictue'className='profile-pic' src={p.profile_pic}/>
                  <h4>{p.name}</h4>
                  <h3>{p.position}</h3>
                  <p>{p.email}</p>
            </div>
          )
          }
          
                  
          })}
        </div>
      </section>
    </div>
  )
}
