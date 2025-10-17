import Button from "../utils/Button"
import { Plus, QrCode, Mail, Activity, TrendingUp, BarChart2,Globe } from "lucide-react"
import DashboardCard from "../utils/DashboardCard"
import Input from "../utils/Input"
import HistoriqueDashboardCard from "../utils/HistoriqueDashboardCard"
import ActivitesRecentes from "../utils/ActivitesRecentes"

function DashboardStandard() {
    return (
    <div className="">
        <div className="mx-[2%] my-[2%] flex flex-col space-y-7 ">
            <div className="flex flex-row justify-between border border-gray-300 rounded-xl py-7 px-8 ">
                <div className="flex flex-row">
                        <div className="flex flex-row gap-2">
                            <div className="flex items-center">
                                <BarChart2 className="w-12 h-12 text-white border border-blue-800 bg-blue-800 p-2 rounded-xl" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-blue-950 text-[30px] font-bold ">Tableau de bord</h1>
                                <p className="text-blue-900 text-[17px] ">Bienvenue  dans votre espace QR Africa</p>
                            </div>
                    </div>
                </div>

                <div className="flex flex-row gap-3 items-center">
                    
                    <Button className="text-white  bg-blue-800 border border-blue-800 rounded-xl " > <Plus className="w-5 h-5 text-white " />Nouveau QR Code</Button>
                </div>
            </div>

            <div className="flex flex-row flex-wrap  justify-between">
                <DashboardCard text="QR Codes Créés" soustitre="3/50" Icon={QrCode} iconClassName="text-blue-800"/>
                <DashboardCard text="Scans total"  soustitre="192" Icon={Activity} iconClassName="text-green-600" pourcentage="+12%"  />
                <DashboardCard text="Scans Ce mois" soustitre="87" Icon={TrendingUp} iconClassName="text-amber-600" pourcentage="+8%" />
            </div>

            <div className="flex flex-row justify-between px-7 py-8 border border-gray-300 rounded-xl  ">
                <div className="flex flex-col ">
                    <h1 className="text-blue-950 text-[18px] font-bold ">Passez au plan Premium</h1>
                    <p className="text-gray-500 text-[18px]">Qr code illimités analytics avancées, personnalisation complète et bien plus encore</p>
                </div>
                <div className="flex items-center">
                    <Button className="text-white bg-blue-800 border border-blue-800 rounded-xl p-4 ">voir les tarifs</Button>
                </div>
            </div>

            
            <div className="flex flex-row space-x-8">
                <div className="flex flex-col space-y-5 w-2/3">
                    <div className="border border-gray-200 rounded-2xl p-5 ">
                        <div className="relative">
                            <Mail className='w-5 h-5 text-blue-500 absolute left-3 top-2/3 -translate-y-1/2' />
                            <Input type="text" className='input text-gray-950 rounded-2xl w-full p-6 ' placeholder="Rechercher dans la FAQ..." />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 border border-gray-300 rounded-xl p-4 ">
                        <div className="flex flex-row justify-between">
                            <h1 className="text-blue-950 text-[25px] font-bold ">Vos QR Codes</h1>
                            <p className="text-blue-950 text-[13px] border-gray-300 bg-gray-300 px-2 rounded-xl flex items-center justify-center ">3 Actifs</p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <HistoriqueDashboardCard />
                            <HistoriqueDashboardCard />
                            <HistoriqueDashboardCard />
                            <HistoriqueDashboardCard />
                        </div>
                    </div>
                </div>

                <div className="w-1/3">
                    <ActivitesRecentes />
                </div>
            </div>

            </div>
    </div>

    )
}

export default DashboardStandard