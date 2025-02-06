
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Cards from "../components/Cards"
import Footer from "../components/Footer"

import Contact from "../components/Contact"
import LocationIcons from "../assets/icons/LocationIcons.png"
import MailIcons from "../assets/icons/MailIcons.png"
import PhoneIcons from "../assets/icons/PhoneIcons.png"

export default function NotreEquipe(){

    return(
        <>
            {/* --------------------------------- HEADER --------------------------------- */}
            <Header />

            {/* --------------------------------- HERO SECTION --------------------------------- */}

            <HeroSection
                h1={"Notre Équipe Médicale"}
                h4={"Une équipe pluridisciplinaire à votre écoute"}
            />

            {/* --------------------------------- TEAM CARD --------------------------------- */}

            <Cards />

            {/* ---------------------------------  CONTACT --------------------------------- */}

            <section className="contact">
                <h2 className="contactNous">Contactez-nous</h2>

                <div className="row">
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
            </section>

            {/* ---------------------------------  FOOTER --------------------------------- */}
            <Footer />

        </>
    )
}
