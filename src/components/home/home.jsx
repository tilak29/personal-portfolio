import First from "./first.jsx";
import Navbar from "../navbar/navbar.jsx";
import './home.css'
import Second from "./second.jsx";
import Contactme from "./contactme.jsx";
import About from "../about/about.jsx";
import Skills from "../skills/skills.jsx";
import Workme from "./workme.jsx";

function Home(){
    return(
        < >
        <div className="flex">
        <div className="fixed top-0 left-0">
        <Navbar/>
        </div>
        <div >
            <div className="relative left-16 max-w-[88%]">
        <First/>
        <Second/>
        </div>
        <div className="relative left-6 w-[98vw]">
        <Workme/>
        <About/>
        <Contactme/>
        </div>
        </div>
        </div>
        </>
    )
}

export default Home;