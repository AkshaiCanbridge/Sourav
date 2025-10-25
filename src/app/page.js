import React from 'react'
import AboutSection from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import MarqueeSection from './components/Marquee'
import Projects from './components/Projects'
import Build from './components/Build'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <MarqueeSection />
      <Build />
      <Projects />
      <Footer />
    </div>
  )
}

export default page
