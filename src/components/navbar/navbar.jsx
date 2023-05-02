import { Link } from 'react-router-dom';
import logo from '../../assets/logot.png';
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

function Navbar(){
    return(
        <>
        <div className="h-screen bg-[#100D15]">
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
            </div>
        </div>
        </>
    )
}

export default Navbar;