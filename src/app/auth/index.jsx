import AuthLayout from '@/components/layouts/auth.layout'
import React from 'react'
import SignIn from './signin'
import SignUp from './signup'

const SignInPage = () => {
  return (
    <AuthLayout title="WelCome Back" desctiption="Please enter your details to Sign in">
        <SignIn />
    </AuthLayout>
  )
}

const SignUpPage = () => {
    return (
      <AuthLayout title="Create Account" desctiption="Please fill the form to Sign up">
          <SignUp />
      </AuthLayout>
    )
  }
  
export  { SignInPage,SignUpPage}