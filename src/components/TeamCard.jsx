

export default function TeamCard(props){

    return(
        <div className="TeamCard">
            <div><img src={props.img} alt="Our doctor's images" /></div>
            <h4 className="mt-3">{props.name}</h4>
            <p>{props.speciality}</p>
            <a href="#"><button className="btn">Prendre rendez-vous</button></a>
        </div>
    )
}