import Textspan from "../home/Textspan";
import Navbar from "../navbar/navbar";
import './contact.css'
import Form from "./form";

const Contact = () => {
    const sentence1 = "Contact me".split("");

    return(
        <>
        {/* <Navbar/> */}
        <div className="flex gap-1 items-center relative left-10 w-[85%]">
            <div className="basis-full">
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

        <div className="text-[#e8e8e8] font-Roboto mt-2 ml-4">
            <p className="text-ellipsis whitespace-normal break-word">I’m interested in fulltime opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
            </p>
        </div>

        <div>
        <Form/>
        </div>
        </div>

        <div className="google-map-code basis-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14770312.740531959!2d73.21443309717152!3d25.33666076877706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1snl!2sae!4v1682488564371!5m2!1snl!2sae" className="fourth-map" width="100%" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

            
            
        </div>
        </>
    )

}

export default Contact;