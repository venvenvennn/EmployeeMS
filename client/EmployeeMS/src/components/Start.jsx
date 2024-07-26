import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Start = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:5050/verify')
    .then(result => {
      if(result.data.Status){
        if(result.data.role === 'admin'){
            navigate('/dashboard')
        }else{
          navigate('/employee_detail/' + result.data.id)
        }
      }
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage2'>
      <div className='p-3 rounded w-25 border loginForm2' >
        <h2 className='text-center'>Login As</h2>
        <div className='d-flex justify-content-around mt-5 mb-2'>
          <div className='d-flex flex-column'>
            <button className='btn btn-warning btn-admin' onClick={() => {navigate('/adminlogin')}}>
              <i className="bi bi-person-fill-check fs-1"></i><br></br>
              Admin
              </button>
          </div>
          <div>
            <button className='btn btn-success' onClick={() => {navigate('/employee_login')}}>
              <i className="bi bi-person-fill fs-1"></i><br></br>
              Employee
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
