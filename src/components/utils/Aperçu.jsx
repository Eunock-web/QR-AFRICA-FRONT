import {QrCode} from "lucide-react";
import Button from "./Button";
function Aperçu() {
    return (
        <div>
            <div className="card w-90 h-[15%] bg-base-100 card-xl shadow-sm border-gray-200 rounded-xl">
                <div className="card-body flex items-center justify-between">
                    <h1 className="text-blue-950 font-bold text-[25px]">Aperçu en temps réel </h1>

                    <div className="">
                        <QrCode className="w-50 h-50 text-color-blue-950 flex items-center justify-center rounded-xl bg-gray-200 p-[10%]" />
                    </div>

                    <div className="flex flex-col space-y-2" >
                        <Button className=" w-full rounded-xl bg-white text-blue-950 hover:bg-amber-400">Personnalisé le Qr code </Button>
                        <Button className=" w-full rounded-xl bg-green-400 text-white ">Télécharger </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aperçu