
import React from "react"
import { Link } from "react-router-dom"
import arrow_back from "../assets/icons/arrow_back.svg"
import ColoredSymbolLogoCliniCamPlus from "../assets/icons/Colored Symbol Logo-CliniCam Plus.png"
import Messages from "../components/Messages.jsx"

export default function CliniCamAI(){

    // const [text, setText] = React.useState("")
    // const textareaRef = React.useRef(null)

    // React.useEffect(() => {
    //     if(textareaRef.current){
    //         textareaRef.current.style.height = "auto"
    //         textareaRef.current.style.height = `${Math.min(textareaRef.current.scrolHeight, 120)}px`
    //     }
    // }, [text])

    // const handleChange = (event) => {
    //     setText(event.target.value)
    // }

    const [messages, setMessages] = React.useState(["Hello", "World"])

    const messagesElements = messages.map(message => (
        <Messages
            text={message}
        />
    ))

    function addMessage(formData){
        const newMessage = formData.get("message")

        setMessages(prevMessages => [...prevMessages, newMessage])
    }

    return(
        <>
            <section className="clinicamAI">
                {/* <div className="AIHeader"><Link to="/"><img src={arrow_back} alt="Arrow back" /></Link></div> */}
                <div className="AIBody">
                    {messagesElements}
                </div>
                <div className="AIFooter  d-flex justify-content-center align-items-center">
                    <div className="AIFooterWrapper d-flex justify-content-between align-items-center gap-4">
                        <Link to="/"><div>
                            <img
                                src={ColoredSymbolLogoCliniCamPlus}
                                alt="Colored logo CliniCam"
                            />
                        </div></Link>
                        <div className="form_wrapper w-full">
                            <form action={addMessage} className="inputAI d-flex gap-2 align-items-center">
                                <input
                                    // ref={textareaRef}
                                    // value={text}
                                    // onChange={handleChange} 
                                    aria-label="New message" 
                                    placeholder="Ask something..."
                                    name="message"
                                    cols="40" 
                                    rows="1"
                                />
                                <button type="submit" >Send</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}