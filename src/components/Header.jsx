
import { Link } from "react-router-dom";
import coloredLogoClinicamPlus from "../assets/icons/Colored Logo-CliniCam Plus.png"
import burger_bar from "../assets/icons/burger_bar.png"
import GreenAppointment from "./ui/GreenAppointment";

export default function Header(){

    return(
        <>
            <nav className="navbar navbar-expand-xl">
                <div className="container-fluid container-xxl navbar_container">
                    <div className="navbar-brand header_logo">
                        <Link to="/"><img className = "logo" src={coloredLogoClinicamPlus} alt="Logo-CliniCam Plus" /></Link>
                    </div>

                    <button className="navbar-toggler burger_bar_btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <img id="burger_bar" src={burger_bar} />
                    </button>

                    <div className="header_nav py-3 collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                        <ul className="navbar_ul navbar-nav  navbar-nav-scroll">
                            <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Accueil</Link></li>
                            <li className="nav-item"><Link to="/notre equipe" className="nav-link">Notre équipe</Link></li>
                            <li className="nav-item"><Link to="/services" className="nav-link">Nos services</Link></li>
                            <li className="nav-item"><Link to="/horaires et contacts" className="nav-link">Horaires et Contacts</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link">Prendre rendez-vous</Link></li>
                        </ul>
                        <GreenAppointment />
                    </div>
                </div>
            </nav>
        
        </>
    )
}