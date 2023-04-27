import Textspan from '../home/Textspan';
import Navbar from '../navbar/navbar';
import './work.css';

const Work = () => {
    const sentence1 = "work".split("");

    return(
        <>
        {/* <Navbar/> */}
        <div className='flex relative items-center left-10 max-w-[90%]'>
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
        </div>

        </>
    )

}

export default Work;