import { Wifi } from "lucide-react";



function Card(props) {
    return (
        <div>
            <div className={" card w-96 bg-base-100 card-md shadow-sm " + props.className}>
                <div className="card-body flex flex-col space-y-2">
                    <div className="justify-left card-actions">
                        <Wifi className="w-8 h-8  text-blue-950 bg-blue-100 p-1 border border-blue-100 rounded-sm " />
                    </div>
                    
                    <h5 className="card-title text-blue-950"> { props.title } </h5>
                    <p className="text-gray-400 text-[15px] "> { props.description } </p>
                    
                </div>
            </div>
        </div>
    )
}


export default Card