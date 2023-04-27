import Textspan from "../home/Textspan";
import Navbar from "../navbar/navbar";
import './skills.css'

const Skills = () => {
    const sentence1 = "Skills &".split("");
    const sentence2 = "Experience".split("");

    return(
        <>
        {/* <Navbar/> */}
        <div className="flex gap-10 items-center relative left-10 max-w-[90%]">
            <div className="w-[55%]">
        <div className="text-bluee text-secondary">
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
        <div className="mt-[-2rem] text-bluee text-secondary">
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

        <div className="text-[#e8e8e8] font-Roboto mt-2 ml-4 flex flex-col gap-4">
            <p className="text-ellipsis whitespace-normal break-word">
            Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
            </p>
            <p className="text-ellipsis whitespace-normal break-word">
            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
            </p>
            <p className="text-ellipsis whitespace-normal break-word">
            I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
            </p>
            <p className="text-ellipsis whitespace-normal break-word">
            Visit my LinkedIn profile for more details or just contact me.
            </p>
        </div>
        </div>

        <div className="w-[60%] flex flex-col gap-1">
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
                <p className="mt-2 text-ellipsis text-regal-silver font-Roboto whitespace-normal w-[90%] break-word">Creative brand, website design and development studio that can bring your online business dreams to life</p>
            </div>
        </div>
        </div>
            
     
        
        </div>
        </>
    )

}

export default Skills;