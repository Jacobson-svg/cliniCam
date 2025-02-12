
import React from "react"

import ChatAI from "../components/ChatAI.jsx"
import Header from "../components/Header.jsx"
import SplashCursor from '../components/SplashCursor'
import GreenAppointment from '../components/ui/GreenAppointment'
import AboutUs1 from "../assets/images/AboutUs1.png"
import AboutUs2 from "../assets/images/AboutUs2.png"
import AboutUs3 from "../assets/images/AboutUs3.png"

import CountUp from '../components/CountUp.jsx'
import DecryptedText from '../components/DecryptedText.jsx'

import mainImage from "../assets/images/mainImage.png"
import arrow from "../assets/icons/arrow.png"
import ok from "../assets/icons/ok.png"

import Insurence1 from "../assets/icons/Insurence1.png"
import Insurence2 from "../assets/icons/Insurence2.png"
import Insurence3 from "../assets/icons/Insurence3.png"
import Insurence4 from "../assets/icons/Insurence4.png"
import Insurence5 from "../assets/icons/Insurence5.png"

import FAQDropdowns from "../components/FAQDropdowns.jsx"
import faqQuestionAnswer from "../components/faqQuestionAnswer.js"

import Footer from "../components/Footer.jsx"


export default function Home(){

    /*----------------------------------------- MAIN ------------------------------------------------- */

    const decryptedText1 = "Quam amet egestas ut gravida amet. Nisi turpis libero rhoncus nibh donec fermentum. Massa cursus lacus mattis sed eget elementum in vestibulum. Mi arcu odio tempus fringilla vulputate. Etiam euismod pretium mauris sit ac varius elit. Leo velit netus a lorem non. Lectus vitae molestie felis vitae elementum eros dolor libero massa. Sed proin turpis rhoncus morbi massa nisi tortor. Facilisi eget ultrices aliquet accumsan."
    const decryptedText2 = "Pretium ac molestie at diam leo fames. Vestibulum egestas placerat in volutpat. Lectus turpis et egestas auctor urna quis morbi. Magna feugiat purus venenatis id. Nibh condimentum est nunc velit sit porttitor. Habitasse felis rhoncus quisque tortor."

    const experience = 10
    const satisfiedPatient = 2000
    const awards = 12
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('countUp')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    /*----------------------------------------- FAQ ------------------------------------------------- */

    const faqDropdown = faqQuestionAnswer.map(questionAnswer => {
        return(
            <FAQDropdowns
                key={questionAnswer.id}
                question = {questionAnswer.question}
                answer = {questionAnswer.answer}
            />
        )
    })

    return(
        <>
            {/* ---------------------- CHAT AI-------------------------- */}
            <ChatAI />

            {/* ---------------------- HEADER-------------------------- */}
            <Header />

            {/* ---------------------- HERO SECTION -------------------------- */}
            <section className="heroSection">
                {/* <SplashCursor /> */}
                <div className="heroSectionContainer">
                    <h2 className="mb-3">Votre santé entre les meilleures mains</h2>
                    <h3 className="w-50">Des soins de qualité, des spécialistes expérimentés, pour votre santé et bien-être au quotidien.</h3>
                    <div className="mt-5 d-flex">
                        <a href="#"><button className="btn">Contactez-nous</button></a>
                        <GreenAppointment />
                    </div>
                </div>
            </section>

            {/* ---------------------- MAIN SECTION -------------------------- */}

            <section className="main_section">
                <div className="part1">
                    <h2 className="h2-secondary-deep-trust-500">A propos de nous</h2>
                </div>
                <div className="part2 row justify-content-center align-items-center">
                    <div className="main_image p-0 col-xl-6 col-12 justify-content-center text-center"><img src={mainImage} className="mainImage" alt="Image d'une infimière" /></div>
                    <div className="ps-xl-4 pt-5 pt-xl-0 col-xl-6 col-12 text-center text-lg-start">
                        <p>
                            <DecryptedText 
                                text={decryptedText1}
                                animateOn="view"
                                speed={100}
                                revealDirection="center"
                            />
                        </p>
                        <p>
                            <DecryptedText 
                                text={decryptedText2}
                                animateOn="view"
                                speed={100}
                                revealDirection="center"
                            />
                        </p>
                        <p><img src={ok} /><span className="main_quality">Expertise</span></p>
                        <p><img src={ok} /><span className="main_quality">Écoute</span></p>
                        <p><img src={ok} /><span className="main_quality">Innovation</span></p>
                        <button className="greenAppointment">Prendre rendez-vous <img src={arrow} /></button>

                    </div>
                </div>
                <div className="part3 row" id="countUp">
                    <div className="col-12 col-md-4 pt-3 pt-lg-0">
                        <h1 id="counter-value-1">
                            <CountUp
                                from={0}
                                to={experience}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text"
                            />
                            +
                        </h1>
                        <p>Avis d'expérience</p>
                    </div>
                    <div className="col-12 col-md-4 pt-3 pt-lg-0">
                        <h1 id="counter-value-2">
                            <CountUp
                                from={0}
                                to={satisfiedPatient}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text"
                            />
                            +
                        </h1>
                        <p>Patients satisfaits</p>
                    </div>
                    <div className="col-12 col-md-4 pt-3 pt-lg-0">
                        <h1 id="counter-value-3">
                            <CountUp
                                from={0}
                                to={awards}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text"
                            />
                        </h1>
                        <p>Prix remportés</p>
                    </div>
                </div>
            </section>

            {/* ---------------------- ABOUT US -------------------------- */}

            <section className="aboutUs">
                <div className="part1">
                    <h2 className="h2-secondary-deep-trust-500">Nos points forts</h2>
                </div>
                <div className="part2 row">
                    <div className="col-12 col-lg-4 pt-3 pt-lg-0">
                        <img src={AboutUs1} />
                        <h2>Équipements modernes</h2>
                        <p>Euismod tellus fusce rhoncus vitae ullamcorper gravida elit. Feugiat tellus tristique tempor diam egestas a urna urna.</p>
                    </div>
                    
                    <div className="col-12 col-lg-4 pt-3 pt-lg-0">
                        <img src={AboutUs2} />
                        <h2>Équipe qualifiée</h2>
                        <p>Nam orci hendrerit congue non eget in ut massa neque. Neque turpis vulputate ultrices velit auctor. Auctor tristique.</p>
                    </div>
                    <div className="col-12 col-lg-4 pt-3 pt-lg-0">
                        <img src={AboutUs3} />
                        <h2>Urgences acceptées</h2>
                        <p>Volutpat ornare ullamcorper sed scelerisque a. Laoreet facilisi gravida elit pretium ultrices vestibulum. Porttitor posuere lacus.</p>
                    </div>

                </div>
            </section>

            {/* ---------------------- INSURENCES SECTION -------------------------- */}

            <section className="insurence">
                <div className="bg_insurence">
                    <div className="d-flex h-100 flex align-items-end justify-content-between">
                        <h2 className="w-50 fw-500">Une prise en charge simplifiée grâce à nos partenariats avec les leaders de l'assurance</h2>
                        <div className=" insurence_images d-flex flex-column align-items-center">
                            <div className="d-flex w-100 justify-content-around">
                                <img src={Insurence1} />
                                <img src={Insurence2} />
                                
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <img src={Insurence3} />
                                <img src={Insurence4} />
                                <img src={Insurence5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------- FAQ SECTION -------------------------- */}

            <section className="faq">
                <h2 className="h2-secondary-deep-trust-500 mb-5">Questions fréquemments posées</h2>
                <div>
                    {faqDropdown}
                </div>
            </section>

            {/* ---------------------- FOOTER -------------------------- */}

            <Footer />
        </>
    )
}
