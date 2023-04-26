import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home.jsx'
import Navbar from './components/navbar/navbar'
import './components/home/hovertree.js'

function App() {

  return (
    <>
    <div className='header'>
      <div >
        {/* <Navbar/> */}
        <Home/>
       </div>
       <canvas id="canvas"></canvas>
       </div>
    </>
  )
}

export default App
