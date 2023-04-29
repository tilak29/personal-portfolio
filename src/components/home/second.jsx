import Work from "../work/work";
import Textspan from "./Textspan";


const Second = () => {
    const sentence1 = "My portfolio".split("");


    return(
        <>
        <div className="mt-0 relative left-16 ">
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

        <div className="text-[#e8e8e8] font-Roboto mt-4 ml-4">
            <p className="text-ellipsis whitespace-normal w-[75%] break-word">
            A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe.
            </p>
            <p>Interested to see some more? Visit my <a href="https://github.com/tilak29" className="text-bluee"> Github </a>  page.</p>
        </div>
        
        <a href="https://github.com/tilak29" class="hbtn hb-fill-right left-[80%]">
        See more!
        </a>

        </div>
        </>
    )
}

export default Second;