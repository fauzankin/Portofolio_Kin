import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPreview from "./components/AboutPreview";

function App() {
  
  return(
    <div className="scroll-smooth">
      <Navbar/>

      <main className="pt-[81px]">
      <Hero/>
      <AboutPreview />
      <Skills/>
      <Project/>
      <Contact/>
      </main>

      <Footer/>
    </div>
  )
}

export default App