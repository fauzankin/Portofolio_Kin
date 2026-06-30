import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  
  return(
    <div className="scroll-smooth">
      <Navbar/>

      <main>

      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>

      </main>
    </div>
  )
}

export default App