import React from 'react'
import { useState } from 'react';
import cross_icon from '../LogIn/cross_icon.png';
import './LogIn.css';
const Log = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState('Login');
    return (
      <div className='login-popup'>
      <form className='login-popup-container'>
          <div className='loginpopup-title'>
            <h2>{currentState}</h2>
             <img onClick={()=>setShowLogin(false)} src={cross_icon} alt='cross' style={{width:'20px',height:'20px'}}/>
          </div>
          <div className='login-popup-inputs'>
            {currentState==='Login'?<></>: <input type='text' placeholder='Your name' required/>}
      
            <input type='email' placeholder='Your mail' required/>
            <input type='password' placeholder='Password' required/>
          </div>
           <button>{currentState==='Sign up'? 'Create Account': 'Login'}</button>
           <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>I agree to the term & conditions</p>
           </div>
           {currentState==='Login'?<p>Create a new account? <span onClick={()=>setCurrentState('Sign up')}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login here</span></p>}
       
          
      </form>
  
  </div>
    )
  }

export default Log;
