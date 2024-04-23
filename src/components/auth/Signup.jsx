import React from 'react'
import { SignUp } from '@clerk/clerk-react';
import './Login.css';
import Header from '../../components/UI/Header/Header';

function Signup() {
  return (
    <div className="login-container"> {/* Add a class name for styling */}
      <SignUp afterSignUpUrl={"/dashboard"} signInUrl='/login'/>
    </div>

  )
}
export default Signup