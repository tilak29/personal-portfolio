import { useEffect, useState } from "react";
import styled from "styled-components";
import { transform, motion , useAnimationControls} from "framer-motion";
import Textspan from "./Textspan.jsx";
import './hovertree.js'


const First = ({children}) => {
    const sentence1 = "Hi,".split("");
    const sentence2 = "I'm Tilak,".split("");
    const sentence3 = "Web Developer".split("");
    return(
        <>
         <div className="mt-20 h-screen " >
        <div className="text-primary text-white">
        {sentence1.map((letter, index) => {
            return(
                <Textspan key={index}>
                    {/* {letter} */}
                    {letter === " " ? " " : letter}
                </Textspan>
            )
            }  
        )}
        <div className="mt-[-2rem]">
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
        <div className="mt-[-2rem]">
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
        </div>
       

       <div>
        <p className="text-xl text-regal-silver">Frontend Developer / React.Js Developer</p>
       </div>

        
            
       <a href="#" class="hbtn hb-fill-right mt-8">
        Contact me!
        </a>
        
        
       </div>
        </>
    )
}

export default First;


