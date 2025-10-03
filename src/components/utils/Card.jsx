


function Card(props) {
    return (
        <div>
            <div className={" card w-96 bg-base-100 card-md shadow-sm " + props.className}>
                <div className="card-body flex flex-col space-y-2">
                    <div className="justify-left card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    
                    <h5 className="card-title text-blue-950"> { props.title } </h5>
                    <p className="text-gray-400 "> { props.description } </p>
                    
                </div>
            </div>
        </div>
    )
}


export default Card