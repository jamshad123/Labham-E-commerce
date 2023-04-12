import React from 'react'
import "./App.css"
import "./styles/responsive.css"
import Category from './Elements/Category/Category'
import Footer from './Elements/Footer/Footer'
import HeroSection from './Elements/HeroSection/HeroSection'
import Navbar from './Elements/Navbar/Navbar'
import NewArrivals from './Elements/NewArrivals/NewArrivals'

const Main = () => {
  return (
    <div className='mainContainer' >
        <Navbar/>
        <HeroSection/>
        <NewArrivals/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Main