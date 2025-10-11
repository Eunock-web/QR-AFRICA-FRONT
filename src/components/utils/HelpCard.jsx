

function HelpCard(props) {
    return (
        <div className="" >
            <div className="flex flex-col " >   
                <div className="flex flex-col ">
                    <h2 className=" text-blue-950 text-[30px] font-bold ">{props.titre}</h2>
                    <p className="text-gray-500 text-[15px]"> {props.text} </p>
                </div>
            </div>
        </div>
    )
}

export default HelpCard