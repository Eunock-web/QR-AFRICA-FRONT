import Button from "../utils/Button"
import { Plus } from "lucide-react"

function DashboardStandard() {
    return (
        <div className="mx-[2%] my-[2%]">
            <div className="flex flex-row justify-between border border-gray-300 rounded-xl p-4 ">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h1 className="text-blue-950 text-[25px] font-bold ">Tableau de bord</h1>
                        <p className="text-gray-500 ">Bienvenue  dans votre espace QR Africa</p>
                    </div>
                </div>

                <div className="flex flex-row gap-3 items-center">
                    
                    <Button className="text-white  bg-blue-800 border border-blue-800 rounded-xl " > <Plus className="w-5 h-5 text-white " />Nouveau QR Code</Button>
                </div>
            </div>

            <div className="flex flex-row justify-between p-5 border border-gray-300 rounded-xl  ">
                <div className="flex flex-col ">
                    <h1 className="text-blue-950 text-[18px] font-bold ">Passez au plan Premium</h1>
                    <p className="text-gray-500 text-[18px]">Qr code illimités analytics avancées, personnalisation complète et bien plus encore</p>
                </div>
                <div className="flex items-center">
                    <Button className="text-white bg-blue-800 border border-blue-800 rounded-xl p-4 ">voir les tarifs</Button>
                </div>
            </div>
        </div>  
    )
}

export default DashboardStandard