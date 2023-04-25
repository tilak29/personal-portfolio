import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home.jsx'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <div>
        {/* <Navbar/> */}
        <Home/>
       </div>
    </>
  )
}

export default App
