import Card from "../utils/Card"
function Tarifs() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center space-y-2">
                <p className="text-white border border-blue-900 rounded-2xl p-1 bg-blue-900">Tarifs simples et transparents</p>
                <h1 className="text-blue-950 font-bold text-[30px]">Choisissez votre plan idéal</h1>
                <p className="text-gray-500">Des solutions adaptées a tous les besoins, du particulier a la grande entreprise</p>
            </div>


            <div>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Tarifs