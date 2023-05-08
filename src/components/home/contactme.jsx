import Contact from "../contact/contact";
import '../contact/contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Contactme = () => {
    return(
        <>
        <div data-aos="fade-down" className="mb-16 md:relative md:left-6 w-[100vw]">
        <Contact/>
        </div>
        </>
    )
}

export default Contactme;