import First from "./first.jsx";
import Navbar from "../navbar/navbar.jsx";
import './home.css'

function Home(){
    return(
        < >
        <div className="flex bg-[#1d1d1d]">
        <div className="fixed top-0 left-0">
        <Navbar/>
        </div>
        <div className="relative  left-52">
        <First/>
        </div>
        </div>
        </>
    )
}

export default Home;