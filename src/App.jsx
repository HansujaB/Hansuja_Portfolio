import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { NavbarDemo } from "./components/Navbar";
import { TypewriterEffectDemo } from "./components/TypewriterIntro";
import Model from './components/Model3d'
function App() {
  return (
    <>
      <Home />
      {/* <div className='fixed inset-0 z-10 pointer-events-none'>
        <Model />
      </div> */}
      <div className='fixed top-0 left-0 w-full z-50 py-6 text-lg bg-transparent'>
        <NavbarDemo />
      </div>
      <div className='relative z-20'>
        <TypewriterEffectDemo />
      </div>
    </>
  )
}

export default App
