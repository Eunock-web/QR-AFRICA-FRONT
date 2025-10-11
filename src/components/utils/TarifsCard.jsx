import Button from "./Button"
import { CheckIcon } from "lucide-react"
function TarifsCard(props) {
    return (
        <div>
            <div className="card card-border bg-base-100 w-96 mt-5">
                <div className="border border-gray-300 p-4 rounded-xl ">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-blue-950 text-[25px] font-bold">{props.titre || "Gratuit"}</h1>
                        <p className="text-gray-500 text-[15px] ">{props.description || "Parfait pour débuter avec les QR " }</p>
                        <p className="text-[20px]"><span className="text-blue-950 font-bold text-[20px]">{props.prix || "0"}</span> FCFA/mois </p>
                        <Button className={" w-full  rounded-xl  hover:bg-amber-500 hover:text-white" + props.className}>{props.children || "commencer maintenant"}</Button>
                    </div>
                    <div className="flex flex-col space-y-2 mt-2">
                        <h1 className="text-blue-950 font-bold text-[15px]">Fonctionnalités incluses :</h1>
                        <ul className="flex flex-col space-y-2">
                            <li className="flex flex-row gap-2 items-center text-[15px] text-gray-300 "> <CheckIcon className="w-5 h-5 text-blue-950 text-[15px] border border-blue-300 bg-blue-300 rounded-full p-1 " /> {props.fonctionnalites || "Gratuit"}</li>
                            <li className="flex flex-row gap-2 items-center text-[15px] text-gray-300 "> <CheckIcon className="w-5 h-5 text-blue-950 text-[15px] border border-blue-300 bg-blue-300 rounded-full p-1 " /> {props.fonctionnalites || "Gratuit"}</li>
                            <li className="flex flex-row gap-2 items-center text-[15px] text-gray-300 "> <CheckIcon className="w-5 h-5 text-blue-950 text-[15px] border border-blue-300 bg-blue-300 rounded-full p-1 " /> {props.fonctionnalites || "Gratuit"}</li>
                            <li className="flex flex-row gap-2 items-center text-[15px] text-gray-300 "> <CheckIcon className="w-5 h-5 text-blue-950 text-[15px] border border-blue-300 bg-blue-300 rounded-full p-1 " /> {props.fonctionnalites || "Gratuit"}</li>
                            <li className="flex flex-row gap-2 items-center text-[15px] text-gray-300 "> <CheckIcon className="w-5 h-5 text-blue-950 text-[15px] border border-blue-300 bg-blue-300 rounded-full p-1 " /> {props.fonctionnalites || "Gratuit"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TarifsCard