import { useEffect, useState } from "react";
import styled from "styled-components";
import { transform, motion , useAnimationControls} from "framer-motion";
import Textspan from "./Textspan.jsx";



const First = ({children}) => {
    const sentence1 = "Hi,".split("");
    const sentence2 = "i'm Tilak,".split("");
    const sentence3 = "Web Developer".split("");
    return(
        <>
       <div>
        {sentence1.map((letter, index) => {
            return(
                <Textspan key={index}>
                    {/* {letter} */}
                    {letter === " " ? " " : letter}
                </Textspan>
            )
            }  
        )}
        <div className="flex self-start">
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
        {sentence3.map((letter, index) => {
            return(
                <Textspan key={index}>
                    {/* {letter} */}
                    {letter === " " ? "\u00A0" : letter}
                </Textspan>
            )
            }  
        )}
       </div>

       <div>
        <p className="text-xl text-regal-silver">Frontend Developer</p>
       </div>
        </>
    )
}

export default First;