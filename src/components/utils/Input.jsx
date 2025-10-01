


function Input(props) {
    return (
        <div>
            <input
                type={props.type || "text"}
                className={"  focus:ring-2 focus:ring-blue-500  " + props.className}
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