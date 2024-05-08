import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Prices from './components/Prices'
import ProjectsSection from './components/Projects'
import ContactSection from './components/ContactSection'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Prices />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default page