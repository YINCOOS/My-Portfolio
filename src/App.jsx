import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Nav/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Service from './components/Services/Service'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
