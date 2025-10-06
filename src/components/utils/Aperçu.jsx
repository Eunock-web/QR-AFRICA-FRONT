import QrCode from "lucide-react";
import Button from "./Button";
function Aperçu() {
    return (
        <div>
            <div className="card w-90 h-90 bg-base-100 card-xl shadow-sm">
                <div className="card-body">
                    <h1 className="text-blue-950 font-bold text-[25px]">Aperçu en temps réel </h1>

                        <div className="">
                            <QrCode className="w-10 h-10 text-color-blue-950 flex items-center justify-center rounded-xl bg-gray-300 p-[2%]" />
                        </div>
                    
                    <div className="flex flex-col " >
                        <Button className=" bg-white text-blue-950 ">Personnalisé le qr code </Button>
                        <Button className="">Telecharger le qr code </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aperçu