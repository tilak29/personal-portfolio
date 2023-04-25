import { useEffect, useState } from "react";
import styled from "styled-components";
import { transform, motion , useAnimationControls} from "framer-motion";



const Textspan = ({children}) => {
    const controls = useAnimationControls();
    const [isPlaying, setIsplaying] = useState(false);

    const rubberband = () => {
        controls.start({transform: [
            "scale3d(1,1,1)",
            "scale3d(1.4,.55,1)",
            "scale3d(.75,1.25,1)",
            "scale3d(1.25,.85,1)",
            "scale3d(.9,1.05,1)",
            "scale3d(1,1,1)",
        ],
            trsnsitions: [0 , .4 , ,.6, .7 , .8, .9 ]
    })
    setIsplaying(true);
    }
    
    return(
        <>
        <motion.span
        animate={controls}
        onMouseOver={() => {
            if(!isPlaying)
            rubberband()
        }}
        onAnimationComplete={() => setIsplaying(false)}
        >
            {children}
        </motion.span>


       
        </>
    )
}

export default Textspan;