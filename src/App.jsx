import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <a href="#hero" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
