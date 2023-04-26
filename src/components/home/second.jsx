import Work from "../work/work";
import Textspan from "./Textspan";


const Second = () => {
    const sentence1 = "My portfolio".split("");


    return(
        <>
        <div className="mt-8">
        <div className="text-bluee">
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

        <div className="text-[#e8e8e8] font-Roboto mt-4 ml-4 text-lg">
            <p className="text-ellipsis whitespace-normal w-[65%] break-word">
            A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.
            </p>
            <p>Interested to see some more? Visit my <a href="#" className="text-bluee"> work </a>  page.</p>
        </div>
        
        <a href="#" class="hbtn hb-fill-right left-[65%]">
        See more!
        </a>

        <Work/> 
        </div>
        </>
    )
}

export default Second;