import Skills from "../skills/skills.jsx";
import '../skills/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Skillsme = () => {
    return(
        <>
        <div data-aos="fade-down" className="mb-12 mt-12 md:relative md:left-6 w-[100vw]">
        <Skills/>
        </div>
        </>
    )
}

export default Skillsme;