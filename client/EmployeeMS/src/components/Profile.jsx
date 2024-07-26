import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='employee-card d-flex justify-content-between  align-items-center mt-3 '>
        <div>
          <img src="../images/alden.jpg" className='emp_det_image'/>
        </div>
        <div>
            <div className='employee-deets'>
                <h3>Name: Alden Recharges</h3>
                <h3>Email: kathden@gmail.com</h3>
                <h3>Role: Admin</h3>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Profile
