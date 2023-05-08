import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../assets/logot.png';
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import './navbar.css'


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  

function Navbar(){
    const [showNavbar, setShowNavbar] = useState(true);
    const [isOpen, setIsOpen] = useState(false)

    
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
      };

    //   useEffect(() => {
    //     if (showNavbar) {
    //       document.querySelector('.nav').style.display = 'flex';
    //     } else {
    //       document.querySelector('.nav').style.display = 'none';
    //     }
    //   }, [showNavbar]);

    return(
        <>
        {/* <div className="h-screen bg-[#100D15]"> 
            <div className='bg-black py-5 px-6 flex flex-col justify-center items-center '>
                <Link to='/'>
                <img className='ml-4' src={logo}/>
                <p className='font-Open text-white mt-1 text-[1.5rem] font-bold'>Tilak</p>
                </Link>
                <p className='font-Open text-xs text-regal-silver mt-2'>Web Developer</p>
            </div>
            <div className='bg-[#100D15] flex flex-col justify-center items-center text-regal-silver text-[1.1rem] '>
                <div className='border-regal-silver border-y-[1px] w-full h-full text-center py-4'> 
                <Link className='hover:text-[#19e4c3]' to='/about'>About</Link>
                </div>
                <div className='border-regal-silver border-b-[1px] w-full h-full text-center py-4'> 
                <Link className='hover:text-[#19e4c3]' to='/skills'>My skills</Link>
                </div>
                <div className='border-regal-silver border-b-[1px] w-full h-full text-center py-4'> 
                <Link className='hover:text-[#19e4c3]' to='/work'>Work</Link>
                </div>
                <div className='border-regal-silver border-b-[1px] w-full h-full text-center py-4'> 
                <Link className='text-[#19e4c3]' to='/contact'>Contact</Link>
                </div>
                <div className='mt-2 flex gap-3'>
                    <a href='https://www.linkedin.com/in/tilak-adroja/'><FaLinkedin/></a>
                    <a href='https://github.com/tilak29'><FaGithub/></a >
                    <a href='mailto:tilakadroja29@gmail.com'><IoMdMail/></a >
                </div>
            </div>  */}
            


    <div class="md:fixed md:min-h-screen md:flex md:bg-[#100D15]" 
    data-dev-hint="container"
    >
    <input type="checkbox" id="menu-open" class="hidden" />

    {/* <label for="menu-open" class="fixed right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg id="menu-open-icon" onClick={() => handleShowNavbar(false)} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg id="menu-close-icon" onClick={() => handleShowNavbar(true)} class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="M4 6h16M4 12h16M4 18h16" />
            </svg>
    </label> */}

    <header class="max-[800px]:w-screen text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
        <a href="#" class="block p-4 invisible text-white font-bold whitespace-nowrap truncate">
            Your App is cool
        </a>

        <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
            <svg id="menu-open-icon" onClick={() => handleShowNavbar(false)} class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="menu-close-icon" onClick={() => handleShowNavbar(true)} class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </label>
    </header>

    {/* <aside id="sidebar" class="md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"> */}
    <div id="sidebar" 
    class={`${showNavbar && "nav"}`}
    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
    > 
            <div className={`bg-black py-5 px-6 flex flex-col justify-center items-center`}>
                <Link to='/' onClick={() => handleShowNavbar(false)}>
                <img className='ml-4' src={logo}/>
                <p className='font-Open text-white mt-1 text-[1.5rem] font-bold'>Tilak</p>
                </Link>
                <p className='font-Open text-xs text-regal-silver mt-2'>Web Developer</p>
            </div>
            <div className='bg-[#100D15] max-md:mb-6 flex flex-col justify-center items-center text-regal-silver text-[1.1rem] '>
                <div className='border-regal-silver border-y-[1px] w-full h-full text-center py-4'> 
                <Link onClick={() => handleShowNavbar(false)} className='hover:text-[#19e4c3]' to='/about'>About</Link>
                </div>
                <div className='border-regal-silver border-b-[1px] w-full h-full text-center py-4'> 
                <Link onClick={() => handleShowNavbar(false)} className='hover:text-[#19e4c3]' to='/skills'>My skills</Link>
                </div>
                <div className='border-regal-silver border-b-[1px] w-full h-full text-center py-4'> 
                <Link onClick={() => handleShowNavbar(false)} className='hover:text-[#19e4c3]' to='/work'>Work</Link>
                </div>
                <div className='border-regal-silver border-b-[1px] w-full h-full text-center py-4'> 
                <Link onClick={() => handleShowNavbar(false)} className='text-[#19e4c3]' to='/contact'>Contact</Link>
                </div>
                <div className='mt-2 flex gap-3 mb-8'>
                    <a href='https://www.linkedin.com/in/tilak-adroja/'><FaLinkedin/></a>
                    <a href='https://github.com/tilak29'><FaGithub/></a >
                    <a href='mailto:tilakadroja29@gmail.com'><IoMdMail/></a >
                </div>
            </div> 
            </div>
            {/* </aside> */}
</div>


        {/* </div> */}
        </>
    )
}

export default Navbar;