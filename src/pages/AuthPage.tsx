import React from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import IMAGE from "../assets/photo.jpg"

const AuthPage = () => {
  return (
    <div className='authpage'>
      <AuthForm/>
      <img src={IMAGE} alt="image" className='authpage__image'/>
    </div>
  )
}

export default AuthPage