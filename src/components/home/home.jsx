import First from "./first.jsx";
import Navbar from "../navbar/navbar.jsx";
import './home.css'
import Second from "./second.jsx";
import Contactme from "./contactme.jsx";

function Home(){
    return(
        < >
        <div className="flex ">
        <div className="fixed top-0 left-0">
        <Navbar/>
        </div>
        <div className="relative left-52">
        <First/>
        <Second/>
        <Contactme/>
        </div>
        </div>
        </>
    )
}

export default Home;