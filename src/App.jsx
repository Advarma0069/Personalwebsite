import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Headers from './Components/header'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Skills from './Components/Pages/skills'
import Projects from './Components/Pages/Project'
import Achievements from './Components/Pages/achievements'
import Contact from './Components/Pages/Contact'
import HireMe from './Components/Pages/HireMe'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/HireMe" element={<HireMe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
