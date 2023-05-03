import First from "./first.jsx";
import Navbar from "../navbar/navbar.jsx";
import "./home.css";
import Second from "./second.jsx";
import Contactme from "./contactme.jsx";
import Workme from "./workme.jsx";
import Aboutme from "./aboutme.jsx";
import Skillsme from "./slillsme.jsx";

function Home() {
  return (
    <>
      <div className="md:flex">
        <div className="absolute h-screen z-40 md:fixed top-0 left-0">
          <Navbar />
        </div>
        <div className="w-[88%]">
        <First/>
        <Second/>
        <Workme/>
        <Skillsme/>
        {/* <Aboutme/> */}
        <Contactme/>
        </div>
        {/* <div>
          <div className="relative left-16 max-w-[88%]">
            <First />
            <Second />
          </div>
          <div className="relative left-6 w-[100vw]">
            <Workme />
            <About />
            <Contactme />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
