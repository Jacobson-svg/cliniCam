
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Service from "../components/Service"


import Footer from "../components/Footer"
import React from "react"
import BlueAppointment from "../components/ui/BlueAppointment"

export default function Services(){

    return(
        <>
            <Header />

            <HeroSection
                h1={"Nos services"}
                h4={"Des soins complets pour toute la famille"}
            />

            <section className="services_section">
                <div className="part1">
                    <p>
                        Nous vous offrons un large éventail de services médicaux, adaptés à vos besoins et à ceux de votre famille.
                        Notre équipe de professionnels vous garantit des soins de qualité, personnalisés et accessibles.
                    </p>
                </div>

                <div className="part2">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>
            </section>

            <section className="contact_services">
                <div className="contact_services_container">
                    <div><p>Votre bien-être commence ici</p></div>
                    <div><h2>Prenez soin de votre santé dès Aujourd'hui</h2></div>
                    <div className="mt-3 mt-md-5 d-flex flex-column flex-md-row">
                        <a href="#"><button className="btn">Contactez-nous</button></a>
                        <BlueAppointment />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}