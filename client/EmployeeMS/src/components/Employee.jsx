import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Employee = () => {

  const [employee, setEmployee] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:5050/auth/employee')
    .then(result => {
        if(result.data.Status){
          setEmployee(result.data.Result)
        }else{
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:5050/auth/delete_employee/'+id)
    .then(result => {
      if(result.data.Status){
        window.location.reload()
      }else{
          alert(result.data.Error)
      }
  })
  .catch(err => console.log(err))
  }
  return (
    <div  className='px-5 mt-3'>
      <div  className='d-flex justify-content-center '>
        <h3>Employee List</h3>
      </div>

      <Link to="/dashboard/add_employee" className='btn btn-success'>Add Employee</Link>

      <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    employee.map(emp => (
                        <tr key={emp.id} value={emp.id}>
                            <td>{emp.name}</td>
                            <td>
                              <img src={`http://localhost:5050/Images/` + emp.image} className='employee_images' alt="" />
                            </td>
                            <td>{emp.email}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.address}</td>
                            <td>
                              <Link to={`/dashboard/edit_employee/`+ emp.id} className='btn btn-success btn-sm mx-1'>Edit</Link>
                              <button className='btn btn-danger btn-sm' onClick={() => {
                                handleDelete(emp.id)
                              }}>Delete</button>
                            </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>



      </div>
  )
}

export default Employee
