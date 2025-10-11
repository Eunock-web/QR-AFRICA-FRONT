import Card from "../utils/Card"
import TarifsCard from "../utils/TarifsCard"
import Button from "../utils/Button"
function Tarifs() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center space-y-2 ">
                <p className="text-white border border-blue-900 rounded-2xl p-1 bg-blue-900">Tarifs simples et transparents</p>
                <h1 className="text-blue-950 font-bold text-[60px] "> Choisissez votre <span className="text-blue-800 font-bold  text-center">plan</span>  </h1>
                <span className="text-blue-800 font-bold text-[60px] text-center mt-[-40px]">idéal</span>
                <p className="text-gray-500 text-[20px] ">Des solutions adaptées a tous les besoins, du particulier a la grande entreprise</p>
            </div>


            <div>
                <div className="flex flex-row justify-center items-center space-x-5">
                    <TarifsCard />
                    <TarifsCard />
                    <TarifsCard />
                </div>
            </div>


            <div className="flex flex-col justify-center items-center space-y-4 mb-[10px]">
                <h1 className=" text-blue-950 font-bold text-[30px] "> Des questions ? </h1>
                <p className="text-gray-500  text-[18px] ">Notre équipe est là pour vous aider à choisir le meilleur plan</p>
                <Button className="rounded-xl text-blue-950 bg-white px-8 hover:bg-amber-400 hover:text-white">Contactez-nous</Button>
            </div>
        </div>
    )
}

export default Tarifs