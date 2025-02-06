


export default function Contact(props){

    return(
        <div className=" col-12 col-lg-6 pb-4">
            <div className="contactComponents w-100">
                <div className=""><img src={props.icon} /></div>
                <div className="">
                    <h2 className="fs-4">{props.h2}</h2>
                    <div>
                        <p className="mb-1">{props.p.p1}</p>
                        <p>{props.p.p2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}