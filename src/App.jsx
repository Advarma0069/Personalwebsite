import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Index.css'
import Headers from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Skills from './Components/Pages/Skills'
import Projects from './Components/Pages/Project'
import Achievements from './Components/Pages/Achievements'
import Contact from './Components/Pages/Contact'
import HireMe from './Components/Pages/HireMe'
import MapPage from './Components/Pages/MapPage'
import Icons from './Components/Pages/Icons'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Headers />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hireme" element={<HireMe />} />
          <Route path="/mappage" element={<MapPage />} />
          <Route path="/icons" element={<Icons />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
