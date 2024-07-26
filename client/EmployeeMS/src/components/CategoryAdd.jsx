import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CategoryAdd = () => {
    const [category, setCategory] = useState();
    
    const navigate = useNavigate();
    const handleSubmit = (e) =>{{
        e.preventDefault()
        axios.post('http://localhost:5050/auth/add_category', {category})
        .then(result => {
            if(result.data.Status){
                navigate('/dashboard/category')
            }else{
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }}
  return (
    <div className='d-flex justify-content-center align-items-center h-75 '>
        <div className='p-3 rounded w-25 border '>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="category">Category: </label>
                    <input onChange={(e) => setCategory(e.target.value)} type="text" className="form-control rounded-0" id="category" placeholder="Enter Category"/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0 mb-2" >Add Category</button>
            </form> 
        </div>
    </div>
  )
}

export default CategoryAdd
