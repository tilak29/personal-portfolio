import Textspan from '../home/Textspan';
import Navbar from '../navbar/navbar';
import './work.css';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import work4 from '../../assets/work4.png';


const Work = () => {

    return(
        <>
        {/* <Navbar/> */}
        <div className='flex mt-10 mx-8 gap-6 relative items-center left-10 max-w-[25%]'>
            <img src={work4} className='basis-full border border-solid'/>
            <img src={work2} className='basis-full border border-solid'/>
            <img src={work3} className='basis-full border border-solid'/>
        </div>

        </>
    )

}

export default Work;