import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { NavbarDemo } from "./components/Navbar";
import { TypewriterEffectDemo } from "./components/TypewriterIntro";
import SkillsShowcase from './components/Skills';
import ProjectsCarousel from './components/Projects';
import ContactSection from './components/Contact';
import { BackgroundBoxesDemo } from './components/About';
function App() {
  return (
    <>
      <Home />
      <div className='fixed top-0 left-0 w-full z-50 py-6 text-lg bg-transparent'>
        <NavbarDemo />
      </div>
      <TypewriterEffectDemo id="home" />
      < BackgroundBoxesDemo id="about" />
      <SkillsShowcase id="skills"/>
      <ProjectsCarousel id="projects" />
      <ContactSection id="contact"/>
    </>
  )
}

export default App
