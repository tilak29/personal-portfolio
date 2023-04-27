import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home.jsx'
import Navbar from './components/navbar/navbar'
import './components/home/hovertree.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Skills from './components/skills/skills'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Work from './components/work/work'

function App() {

  return (
    <>
    <div className='header'>
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/skills' element={<Skills/>}/>
     <Route path='/work' element={<Work/>}/>
     <Route path='/contact' element={<Contact/>}/>
     </Routes>
       <canvas id="canvas"></canvas>

       </div>
    </>
  )
}

export default App
