
import Card from "./TeamCard"
import myArray from "./TeamCardData"

export default function Cards(){

    const cardElements = myArray.map(card =>(
        <Card
            key={card.id}
            img={card.img}
            name={card.name}
            speciality={card.speciality}
        />
    ))

    return(
        <main className="mainEquipe">
            <div className="TeamCardWrapper">
                {cardElements}
            </div>
        </main>
    )
}