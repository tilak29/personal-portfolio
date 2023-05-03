import Textspan from "../home/Textspan";
import Navbar from "../navbar/navbar";
import './skills.css'


const Skills = () => {
    const sentence1 = "Skills &".split("");
    const sentence2 = "Experience".split("");

    return(
        <>
        
        <div className="md:flex">
        <div className="absolute h-screen z-40 md:fixed top-0 left-0">
          <Navbar />
        </div>
        <div className="md:flex gap-10 items-center relative md:left-36 max-w-[90%]">
            <div className="w-[90%] md:w-[55%]">
        <div className="text-bluee ttext-fourth sm:text-third lg:text-secondary">
        {sentence1.map((letter, index) => {
            return(
                <Textspan key={index}>
                    {/* {letter} */}
                    {letter === " " ? "\u00A0" : letter}
                </Textspan>
            )
            }  
        )}
        </div>
        <div className="mt-[-2rem] text-bluee text-third lg:text-secondary">
        {sentence2.map((letter, index) => {
            return(
                <Textspan key={index}>
                    {/* {letter} */}
                    {letter === " " ? "\u00A0" : letter}
                </Textspan>
            )
            }  
        )}
        </div>

        <div className="text-[#e8e8e8] font-Roboto mt-2 md:ml-4 flex flex-col gap-4">
            <p className="text-ellipsis whitespace-normal break-word">
            As a ReactJS developer, I have extensive skills and experience in building dynamic and responsive web applications using the latest technologies and frameworks. My expertise includes HTML, CSS, and JavaScript, which are the foundational languages for building web applications.
            </p>
            <p className="text-ellipsis whitespace-normal break-word">
            I have also worked extensively with NextJS, which is a powerful framework for server-rendered React applications. My proficiency in NodeJS allows me to build fast, scalable, and efficient backend APIs that interact with frontend applications seamlessly.            </p>
            <p className="text-ellipsis whitespace-normal break-word">
            In addition to my technical skills, I have extensive experience working with popular CSS frameworks like Tailwind CSS, Material-UI (MUI), and Bootstrap. These frameworks enable me to create visually appealing, mobile-first, and responsive user interfaces that provide an excellent user experience.            </p>
            <p className="text-ellipsis whitespace-normal break-word">
            Visit my LinkedIn profile for more details or just contact me.
            </p>
        </div>
        </div>

        <div className="w-[90%] md:w-[60%] mt-8 md:mt-0 flex flex-col gap-1">
            <div>
                <p className="font-Roboto">Front-end</p>
                <div class="w-[80%] bg-gray-200 rounded-full h-[0.15rem] mb-4 dark:bg-gray-700">
                <div class="bg-bluee h-[0.15rem] rounded-full dark:bg-blue-500" style={{width: "90%"}}></div>
                </div>
            </div>
            <div>
                <p className="font-Roboto">ReactJS</p>
                <div class="w-[80%] bg-gray-200 rounded-full h-[0.15rem] mb-4 dark:bg-gray-700">
                <div class="bg-[#ff2253] h-[0.15rem] rounded-full dark:bg-blue-500" style={{width: "85%"}}></div>
                </div>
            </div>
            <div>
                <p className="font-Roboto">Next</p>
                <div class="w-[80%] bg-gray-200 rounded-full h-[0.15rem] mb-4 dark:bg-gray-700">
                <div class="bg-[#d26cd5] h-[0.15rem] rounded-full dark:bg-blue-500" style={{width: "75%"}}></div>
                </div>
            </div>
            <div>
                <p className="font-Roboto">NodeJS</p>
                <div class="w-[80%] bg-gray-200 rounded-full h-[0.15rem] mb-4 dark:bg-gray-700">
                <div class="bg-bluee h-[0.15rem] rounded-full dark:bg-blue-500" style={{width: "62%"}}></div>
                </div>
            </div>

            <div className="flex mt-4 max-w-[60%]">
            <div className="bg-[#14101b] max-w-[90%] p-4 border border-solid border-[#14101b] rounded-lg">
                <p className="font-Roboto font-semibold text-2xl">Frontend developer</p>
                <p className="mt-2 text-regal-silver font-Roboto">Reveation Technologies</p>
                <p className="text-sm text-regal-silver font-Roboto">Jan-2023 to present</p>
                <p className="mt-2 text-ellipsis text-regal-silver font-Roboto whitespace-normal w-[90%] break-word">
                    Creative brand, website design and development studio that can bring your online business dreams to life.</p>
            </div>
        </div>
        </div>
            
     
        </div>
        </div>
        </>
    )

}

export default Skills;