import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Work from './Work/Work'
import TCourses from './TopCourses/TCourses'
import People from './People/People'
import Experties from './Experties/Experties'
import Footer from './Footer/Footer'
import Certificate from './Certificate/Certificate'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Experties/>
      <Work/>
      <TCourses/>
      <People/>
      <Certificate/>
      <Footer/>
    </>
  )
}

export default Home