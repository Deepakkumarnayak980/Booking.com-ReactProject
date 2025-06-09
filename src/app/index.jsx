
import React from 'react'
import Header from '@/components/layouts/header.layout'
import Footer from '@/components/layouts/footer.layouts'
import HotelDetails from './hotel-details'
import { SignInPage, SignUpPage } from './auth'
import SignIn from './auth/signin'
import Home from './home'
import SearchPage from './search'

function App() {
  return (
    <div>
        
        <Header/>
        {/* <Home /> */}
        {/* <HotelDetails/> */}
       
        {/* <SignInPage /> */}
       {/* <SignUpPage  />  */}
       <SearchPage />
        <Footer />
    </div>
  )
}

export default App