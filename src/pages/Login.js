import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <>
    
    <div className='container'>
     <div className='header'>
      <div className='text'>Sign Up</div>
      <div className='underline'></div>
</div>
     <div className='inputs'>
      <div className='input'>
        <img className='img' src='/person.png' alt=''/>
        <input type='name' />
      </div>
      <div className='input'>
        <img className='img' src='mail.png'alt=''/>
        <input  type='email' />
      </div>
      <div className='input'>
        <img className='img' src='lock.png' alt=''/>
        <input type='Password' />
      </div>
     </div>
     <div className='forgot-password'>Forgot Password?<span>Click here</span></div>
     <div className='submit-container'> Sign Up</div>
     <div className='submit-container'>Login</div>
    </div>

    </>
  )
}

