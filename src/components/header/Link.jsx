


function Link( props ) {
    return (
        <div className="">
            <a href={ props.href } className={" link link-info " +  props.className } > { props.children } </a>
        </div>
    )
}

export default Link