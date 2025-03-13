
import React from 'react'
import Header from '@/components/layouts/header.layout'
import Footer from '@/components/layouts/footer.layouts'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import SignIn from './auth/signin'

function App() {
  return (
    <div>
        
        <Header/>
        {/* <Home /> */}
        {/* <HotelDetails/> */}
       
        <SignInPage />
       {/* <SignUpPage  />  */}
        <Footer />
    </div>
  )
}

export default App