import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginBttn from '../LoginBttn/LoginBttn';
import LoginForm from '../LoginForm/LoginForm';
import LogoutBttn from '../LogoutBttn/LogoutBttn';
import Profile from '../Profile/Profile';
const LoginPage = () => {
  return (
    <div>
      <LoginBttn/>
      <LogoutBttn/>
      <Profile/>
    </div>
  )
}

export default LoginPage
