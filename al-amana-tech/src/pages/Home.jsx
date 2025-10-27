// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Home