import Textspan from '../home/Textspan';
import './about.css';
import download from '../../assets/download.png';
import Navbar from '../navbar/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const About = () => {
    const sentence1 = "Me Myself and I".split("");


    return(
        <>
        <div className="md:flex">
        <div className="absolute h-screen z-40 md:fixed top-0 left-0">
          {/* <Navbar /> */}
        </div>
        <div className='md:flex relative left-6 items-center justify-center md:left-36 max-w-[85%]'>
            <div className=''>
        <div data-aos="fade-right" className="text-bluee text-fourth sm:text-third lg:text-secondary">
        {sentence1.map((letter, index) => {
            return(
                <Textspan key={index} >
                    {/* {letter} */}
                    {letter === " " ? "\u00A0" : letter}
                </Textspan>
            )
            }  
        )}
        </div>
        
        <div data-aos="fade-right" className='flex flex-col gap-4'>
            <p>Hello, I am a passionate ReactJS developer with a great interest in frontend development. My expertise includes HTML, CSS, and JavaScript, which are the foundational languages for building web applications.
</p>

<p> 
Over the years, I have honed my skills in various frameworks and libraries, including NextJS, NodeJS, Tailwind CSS, Material-UI (MUI), and Bootstrap. I am always excited to learn about new technologies and trends in frontend development, which allows me to keep up with the fast-paced nature of the industry.
</p>

<p>
I have experience working with clients from different industries, which has given me a broader perspective on the needs and challenges faced by businesses. This experience has enabled me to provide custom solutions that meet the unique requirements of each client.
</p>
        </div>
        </div>

        <div data-aos="fade-right">
            <img className='w-[100rem]' src={download} />
        </div>

        </div>
</div>
        </>
    )

}

export default About;