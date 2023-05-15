import Textspan from "../home/Textspan";
import Navbar from "../navbar/navbar";
import "./work.css";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";
import work6 from "../../assets/work6.png";
import work7 from "../../assets/work7.png";
import work8 from "../../assets/work8.png";
import kesh1 from "../../assets/kesh1.png";
import kesh2 from "../../assets/kesh2.jpg";
import zero1 from "../../assets/zero1.png";
import zero2 from "../../assets/zero2.png";
import valley1 from "../../assets/valley1.png";
import valley2 from "../../assets/valley2.png";
import crypto1 from "../../assets/crypto1.png";
import crypto2 from "../../assets/crypto2.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Work = () => {
  return (
    <>
      <div data-aos="fade-right" className="md:flex">
        <div className="absolute h-screen z-40 md:fixed top-0 left-0">
          {/* <Navbar /> */}
        </div>
      <div className="relative md:left-28 flex flex-col justify-center flex-wrap mt-10 mx-4 md:mx-16 gap-3 w-[90%] md:w-[60%]">
  
        <a href="https://www.keshroot.com/" className="transition bg-[#1d1d1d] border-[#1d1d1d] rounded-lg md:group-hover:opacity-50 md:hover:opacity-important hover:scale-[1.1]"> 
        <div  className="my-6 mx-8 font-Roboto">
          <p className="text-sm ">ReactJS</p>
          <h3 className="mt-2 text-2xl font-semibold">
            keshroot
          </h3>
          <p className="text-xs tracking-widest text-regal-silver">
          Transform your haircare routine with KeshRoot's nourishing products, enriched with natural ingredients.
          </p>
          </div>
          </a>
       
          <a href="https://www.zerozeroindia.com/" className="transition bg-[#1d1d1d] border-[#1d1d1d] rounded-lg md:group-hover:opacity-50 md:hover:opacity-important hover:scale-[1.1]"> 
        <div  className="my-6 mx-8 font-Roboto">
          <p className="text-sm ">ReactJS</p>
          <h3 className="mt-2 text-2xl font-semibold">
            Zero Zero
          </h3>
          <p className="text-xs tracking-widest text-regal-silver">
          Experience the ultimate smoothness with ZeroZero's gentle and effective hair removal cream.
          </p>
          </div>
          </a>

          <a href="https://crypto-tracker-tilak.netlify.app/" className="transition bg-[#1d1d1d] border-[#1d1d1d] rounded-lg md:group-hover:opacity-50 md:hover:opacity-important hover:scale-[1.1]"> 
        <div  className="my-6 mx-8 font-Roboto">
          <p className="text-sm ">ReactJS</p>
          <h3 className="mt-2 text-2xl font-semibold">
            Crypto Tracker
          </h3>
          <p className="text-xs tracking-widest text-regal-silver">
          Stay ahead of the game with Crypto Hunter's real-time tracking of cryptocurrency prices and trends.
          </p>
          </div>
          </a>

          <a href="https://github.com/tilak29/Valley-college" className="transition bg-[#1d1d1d] border-[#1d1d1d] rounded-lg md:group-hover:opacity-50 md:hover:opacity-important hover:scale-[1.1]"> 
        <div className="my-6 mx-8 font-Roboto">
          <p className="text-sm ">ReactJS</p>
          <h3 className="mt-2 text-2xl font-semibold">
          Valley College
          </h3>
          <p className="text-xs tracking-widest text-regal-silver">
          Unlock your full potential with Valley College - a premier institution offering diverse programs and an unparalleled educational experience.
          </p>
          </div>
          </a>
          </div>
      </div>
    </>
  );
};

export default Work;
