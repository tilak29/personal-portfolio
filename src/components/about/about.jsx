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
        <div className="text-bluee text-secondary">
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
        
        <div>
            <p>Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as standards of the current web I've been passionate about web.

For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.

I currently work remotely with a selected freelance client base being open for new opportunities.

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