
import medicalKit from "../assets/icons/Medical Kit.png"

export default function Services(){

    return(
        <>
            <div className="service row">
                <div className="col-2">
                    <img src={medicalKit} alt="icon" />
                </div>
                <div className="col-10">
                    <h2>Médecine Générale</h2>
                    <p>Des soins personnalisés pour maintenir votre santé et prévenir les maladies.</p>
                </div>
            </div>
        </>
    )
}