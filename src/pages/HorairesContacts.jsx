
import Header from "../components/Header.jsx"
import HeroSection from "../components/HeroSection.jsx"
import Contact from "../components/Contact.jsx"
import Input from "../components/ui/Input.jsx"
import Footer from "../components/Footer.jsx"

import LocationIcons from "../assets/icons/LocationIcons.png"
import MailIcons from "../assets/icons/MailIcons.png"
import PhoneIcons from "../assets/icons/PhoneIcons.png"
import arrow from "../assets/icons/arrow.png"

export default function HorairesContacts(){

    const inputs = [
        {
            key: 1,
            id: "1",
            label: "Votre Nom",
            type: "text",
            placeholder: "John Doe"
        },
        {
            key: 2,
            id: "2",
            label: "Email",
            type: "email",
            placeholder: "johndoe@email.com"
        },
        {
            key: 3,
            id: "3",
            label: "Numéro de Téléphone",
            type: "number",
            placeholder: "+237"
        },
        {
            key: 4,
            id: "4",
            label: "Commentaire",
            type: "text",
            placeholder: "Comment pouvons-nous vous aider ? Décrivez votre demande..."
        }
    ]

    const inputsElements = inputs.map(input =>(
        <Input
            key={input.key}
            id={input.id}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            
        />
    ))


    return(
        <>
            <Header />


            <HeroSection
                h1={"Contactez-Nous"}
                h4={"À votre service 7j/7"}
            />

            <section>
                <section className="horaires_contacts_section px-3 d-flex flex-column flex-lg-row px-md-5 w-full">
                    <div className="part1 col-12 col-lg-5 col-xxl-6 d-flex align-items-md-center flex-column align-items-start align-items-xxl-center">
                        <div className="contact_part1">
                            <Contact
                                icon={LocationIcons}
                                h2={"Notre adresse"}
                                p={{p1:"Akwa, Douala Cameroon", p2:""}}
                            />

                            <Contact
                                icon={PhoneIcons}
                                h2={"Numéro de téléphone"}
                                p={{p1:"+237 696 767 542", p2:"+237 658 123 103"}}
                            />

                            <Contact
                                icon={MailIcons}
                                h2={"Adresse Email"}
                                p={{p1:"help@clinicam.com", p2:""}}
                            />
                        </div>
                    </div>

                    <div className="part2 col-12 col-lg-7 col-xxl-6">
                        <div className="part21">
                            <h2 className="mb-3">Laissez-nous prendre soin de vous</h2>
                            <p className="w-75">Vous avez des questions ? Écrivez-nous et nous vous répondrons dans les plus brefs délais.</p>
                        </div>
                        <form>
                            {inputsElements}
                        </form>
                        <a href="#" className="message_btn"><button className="">Envoyez le message <img src={arrow} /></button></a>
                    </div>
                </section>
            </section>

            <Footer />
        </>
    )
}