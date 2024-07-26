import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:5050/employee/detail/' + id)
    .then(result => {
      setEmployee(result.data[0])
    })
    .catch(err => console.log(err))
  }, [])

  const handleLogout = () => {
    axios.get('http://localhost:5050/employee/logout')
    .then(result => {
      if(result.data.Status){
        localStorage.removeItem('valid')  
        navigate('/')
      }
    })
  }

  return (
    <div>
      <div className="p-2 d-flex justify-content-center shadow bg-success text-light">
          <h4>Employee Management System</h4>
      </div>
      <div className='employee-card d-flex justify-content-between  align-items-center mt-3 '>
        <div>
          <img src={`http://localhost:5050/Images/`+employee.image} className='emp_det_image'/>
        </div>
        <div>
            <div className='employee-deets'>
                <h3>Name: {employee.name}</h3>
                <h3>Email: {employee.email}</h3>
                <h3>Salary: ${employee.salary}</h3>
            </div>
            <div className='buttons'>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
         </div>
      </div>
    
    </div>

    
  )
} 


export default EmployeeDetail
