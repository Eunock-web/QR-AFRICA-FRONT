import TutorielCard from "../utils/TutorielCard"
import { VideoIcon } from "lucide-react"
import { TimerReset } from "lucide-react"
import { ListCheckIcon } from "lucide-react"
import Button from "../utils/Button"
function Tutoriel() {
    return (
        <div className="mx-[2%] my-[2%]">
            <div className="flex flex-col justify-center items-center space-y-3">
                <VideoIcon className="w-15 h-15 text-white border border-blue-100 p-3 rounded-full bg-blue-800" />
                <h1 className="text-blue-950 font-bold text-[30px]">Tutoriels Video</h1>
                <p className="text-gray-500 text-[20px]">Découvrez comment utiliser QR Africa à travers nos guides vidéo détaillés</p>
            </div>

            <div className="flex flex-row gap-3 mt-15">
                <TutorielCard Icon={ VideoIcon } />
                <TutorielCard Icon={ TimerReset } titre="Durée Totale" soustitre="30 min" />
                <TutorielCard Icon={ListCheckIcon} titre="Niveaux" soustitre="3"/>
            </div>
            
            <div className="flex flex-col space-y-5">
                <h1 className="text-blue-950 font-bold text-[25px]"> Tous les tutoriels </h1>
                <div className="flex flex-row">

                </div>
            </div>

            <div className="flex flex-col space-y-3 items-center justify-center border border-blue-50 bg-blue-50 p-8 rounded-xl ">
                <h1 className="text-blue-950 font-bold text-[28px]">Besoin d'aide personnalisée ?</h1>
                <p className="text-gray-500 text-[18px]">Notre équipe est disponible pour vous accompagner et répondre à toutes vos questions</p>

                <div className="flex flex-row gap-2">
                    <Button className="text-blue-950 rounded-xl hover:bg-amber-500 hover:text-white " > Consulter la FAQ </Button>
                    <Button className="text-white border border-blue-800 bg-blue-800 rounded-xl "> Contacter le Support </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Tutoriel
