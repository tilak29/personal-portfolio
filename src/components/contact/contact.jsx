import Textspan from "../home/Textspan";

const Contact = () => {
    const sentence1 = "Contact me".split("");

    return(
        <>
        <div className="flex w-[90%]">
            <div className="max-w-[45%]">
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

        <div className="text-[#e8e8e8] font-Roboto mt-2 ml-4">
            <p className="text-ellipsis whitespace-normal break-word">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
            </p>
        </div>
        </div>

        <div className="google-map-code w-[48%]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" className="fourth-map" width="100%" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>


        </div>
        </>
    )

}

export default Contact;