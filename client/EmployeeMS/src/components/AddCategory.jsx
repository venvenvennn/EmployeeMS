import React, {useState} from 'react'

const addCategory = () => {

    const [category, setCategory] = useState();
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 '>
        <div className='p-3 rounded w-25 border '>
            <h2>Add Category</h2>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="category">Add Category</label>
                    <input onChange={(e) => setCategory(e.target.value)} type="text" className="form-control rounded-0" id="category" placeholder="Enter Category"/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">Add Category</button>
            </form> 
        </div>
    </div>
  )
}

export default addCategory
