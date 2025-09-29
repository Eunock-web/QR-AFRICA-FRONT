


function Input(props) {
    return (
        <div>
            <input
                type={props.type || "text"}
                className={props.className}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                {...props}
            />
        </div>
    )
}


export default Input