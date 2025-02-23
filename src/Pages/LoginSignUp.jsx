import React from 'react'
import './CSS/loginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name...'/>
          <input type="email" placeholder='Your Email Address...'/>
          <input type="password" placeholder='Your Password...'/>
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already Have An Account <span>Login Here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
