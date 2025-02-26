import React from 'react'
import PolicyFooter from './PolicyFooter'

const ResetPassword = () => {
  return (
    <>
    
    <div className="change-password-container">
        <form className="change-password-form">
            <h2 className="form-title">Reset Password</h2>
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            placeholder="Enter Email Addres"
            required
            />
            <button type="submit" className='create-account-button'>Submit</button>
        </form>
    </div>

    <div>
            <PolicyFooter />
    </div>

    </>

    
    
  )
}

export default ResetPassword