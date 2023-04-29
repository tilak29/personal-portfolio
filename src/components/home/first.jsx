import { useEffect, useState } from "react";
import styled from "styled-components";
import { transform, motion , useAnimationControls} from "framer-motion";
import Textspan from "./Textspan.jsx";
import './hovertree.js'
import logot from '../../assets/logot.png'
import { Link } from "react-router-dom";


const First = ({children}) => {
    const sentence1 = "Hi,".split("");
    const sentence2 = "I'm ".split("");
    const sentence3 = "ilak,".split("");
    const sentence4 = "Web Developer".split("");
    return(
        <>
         <div className="mt-20 h-screen relative left-16 " >
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
        <div className="flex items-baseline -mt-10">
            <div>
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
        <img src={logot} className="h-16"></img>
        <div>
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
        <div className="mt-[-2rem]">
        {sentence4.map((letter, index) => {
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

        
            
       <Link to='/contact' class="hbtn hb-fill-right mt-8">
        Contact me!
        </Link>
        
        
       </div>
        </>
    )
}

export default First;


