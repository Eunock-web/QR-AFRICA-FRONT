


function Link( props ) {
    return (
        <div className="">
            <a href={ props.href } className={" link text-blue-700 " +  props.className } > { props.children } </a>
        </div>
    )
}

export default Link