import { useState, useEffect} from 'react'
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

  // const [showNavbar, setShowNavbar] = useState(false);

  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar)
  // };


  // useEffect(() => {
  //   if (showNavbar) {
  //     document.querySelector('.cover_').style.display = 'flex';
  //   } else {
  //     document.querySelector('.cover_').style.display = 'none';
  //   }
  // }, [showNavbar]);

  return (
    <>
    <div className='md:flex md:h-screen header'>
    <div className={`absolute h-screen z-40 top-0 left-0`}>
          <Navbar />
        </div>
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
