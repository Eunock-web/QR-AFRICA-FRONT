


function Button(props) {
    return (
        <div>
            <button className={" btn " + props.className}>
                {props.children}
            </button>
        </div>
    )
}

export default Button