import React, {useState} from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5050/auth/adminlogin', values)
        .then(result => {
            if(result.data.loginStatus){
                localStorage.setItem('valid', true)
            navigate('/dashboard')
            }else{
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err)) 
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-danger'>
            {error && error}
        </div>
        <h2 className='text-dark'>Login Page</h2>
        <form onSubmit={handleSubmit} action='' method=''>
            <div className="form-group mb-3">
                <label htmlFor="email">Email address:</label>
                <input onChange={(e) => setValues({...values, email: e.target.value})} type="email" className="form-control rounded-0" id="email" placeholder="Enter Email"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <input onChange={(e) => setValues({...values, password: e.target.value})} type="password" className="form-control rounded-0" id="password" placeholder="Enter Password"/>
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">Login</button>
            
            </form> 
      </div>
    </div>
  )
}

export default Login
