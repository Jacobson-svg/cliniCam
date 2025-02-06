

export default function Input(props){

    return(
        <>
            <div className="input_wrapper"> 
                <label htmlFor={props.id} className="contact_label mb-2">{props.label}</label>
                <input className="contact_input" id={props.id} type={props.type} placeholder={props.placeholder} />
            </div>
        </>
    )
}