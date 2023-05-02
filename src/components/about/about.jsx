import Textspan from '../home/Textspan';
import './about.css';
import download from '../../assets/download.png';
import Navbar from '../navbar/navbar';


const About = () => {
    const sentence1 = "Me Myself and I".split("");

    return(
        <>
        {/* <Navbar/> */}
        <div className='flex relative items-center justify-center left-10 max-w-[85%]'>
            <div className=''>
        <div className="text-bluee text-fourth sm:text-third lg:text-secondary">
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
        
        <div className='flex flex-col gap-4'>
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

        <div>
            <img className='w-[100rem]' src={download} />
        </div>

        </div>

        </>
    )

}

export default About;