
import { Link } from "react-router-dom";

import WhiteLogoCliniCamPlus from "../assets/icons/White Logo-CliniCam Plus.png"
import instagram from "../assets/icons/instagram.png"
import linkedin from "../assets/icons/linkedin.png"
import pinterest from "../assets/icons/pinterest.png"
import tiktok from "../assets/icons/tiktok.png"
import twitter from "../assets/icons/twitter.png"
import youtube from "../assets/icons/youtube.png"

export default function Footer(){

    return(
        <>
            <footer>
                <section className="section1 row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                        <img className="logo mb-4" src={WhiteLogoCliniCamPlus} />
                        <p className="w-50">Blandit malesuada ornare iaculis elit dui eu magnis pellentesque. Eu tellus iaculis facilisis id ultricies mauris ac.</p>
                    </div>
                    <div className="col-12 col-lg-6 row">
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <h6 className="mb-3">Accès Rapide</h6>
                            <ul className="footer_nav">
                                <li className="mb-3"><Link to="/">Accueil</Link></li>
                                <li className="mb-3"><Link to="/notre equipe">Notre équipe</Link></li>
                                <li className="mb-3"><Link to="/services">Nos services</Link></li>
                                <li className="mb-3"><Link to="/horaires et contacts">Horaires et Contacts</Link></li>
                                <li className="mb-3"><Link to="">Prendre rendez-vous</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <h6 className="mb-3">Horaires</h6>
                            <ul>
                                <li className="mb-3">Lundi - Vendredi : 7h30 - 20h</li>
                                <li className="mb-3">Samedi : 8h - 16h</li>
                                <li className="mb-3">Dimanche : Services d'urgence uniquement</li>
                                <li className="mb-3">Urgences : 24h/24, 7j/7</li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="col-12 mb-4 mb-lg-0">
                                <h6 className="mb-3">Addresse</h6>
                                <ul>
                                    <li className="mb-3">Akwa, Douala Cameroun</li>
                                </ul>
                                
                            </div>
                            <div className="col-12 mb-4 mb-lg-0">
                                <h6 className="mb-3">Téléphone</h6>
                                <ul>
                                    <li className="mb-3"><a href="tel:+237 6 96 76 75 42">+237 6 96 76 75 42</a></li>
                                    <li className="mb-3"><a href="tel:+237 6 58 12 31 03">+237 6 58 12 31 03</a></li>
                                </ul>
                            </div>
                            <div className="col-12 mb-4 mb-lg-0">
                                <h6 className="mb-3">Email</h6>
                                <ul>
                                <li className="mb-3">help@clinicam.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="section2 d-flex justify-content-between row">
                    <div className="col-12 col-lg-9 text-center text-lg-start">
                        <p>@ 0225 CliniCam Plus, Inc. Tous droits réservés</p>
                    </div>
                    <div className="col-12 col-lg-3 text-center justify-content-end float-end">
                        <img className="ms-3" src={twitter} />
                        <img className="ms-3" src={instagram} />
                        <img className="ms-3" src={pinterest} />
                        <img className="ms-3" src={linkedin} />
                        <img className="ms-3" src={tiktok} />
                        <img className="ms-3" src={youtube} />
                    </div>
                </section>
            </footer>

        </>
    )
}