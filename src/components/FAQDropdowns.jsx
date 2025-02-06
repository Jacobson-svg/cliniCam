
import React from "react"
import chevronDown from "../assets/icons/Chevron down.png"
import chevromUp from "../assets/icons/Chevron up.png"

export default function FAQDropdowns(props){

    const [isVisible, setIsVisible] = React.useState(false)

    const handleClick = () => {
        setIsVisible(prev => !prev)
    }
    const StyleColor = isVisible ? "#fff" : null

    return(
        <div className="faqDropdown py-2 px-4 mb-3" style={{backgroundColor:StyleColor}}>
            <div className="d-flex mb-2 justify-content-between align-items-center">
                <h5>{props.question}</h5>
                <img 
                    onClick={handleClick}
                    src={isVisible ? chevromUp : chevronDown}
                    className="btn bg bg-danger px-1 py-1 rounded-circle" 
                />
            </div>
            <div className="faqPara" style={{ display: isVisible ? 'block' : 'none' }}>
                <p>{props.answer}</p>
            </div>
        </div>
    )
}