import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './Login.css';
import Header from '../../components/UI/Header/Header';

function Login() {
  return (
    <>
    <div>
    <Header />
    </div>
    <div className="login-container"> {/* Add a class name for styling */}
      <SignIn afterSignInUrl={"/dashboard"} signUpUrl='/sign-up'/>
    </div>
    </>
  );
}

export default Login;
