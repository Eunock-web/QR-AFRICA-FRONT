import { UserCircle2Icon, Eye, Download } from "lucide-react"

function HistoriqueDashboardCard() {
    return (
        <div>
            <div className="border border-gray-300 p-3 rounded-2xl ">
                <div className="flex flex-row  justify-between  items-center">
                    <UserCircle2Icon className="w-10 h-10  text-blue-900 border border-white bg-gray-100  rounded-2xl p-2 mt-2  " />
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-blue-900 text-[18px] font-bold">Site Web Personnel</h1>
                        <div className="flex flex-row gap-2">
                            <p className="text-blue-800 border border-gray-300 rounded-2xl px-2 text-[13px]  bg-gray-300">URL</p>
                            <p className="text-gray-500 text-[13px] flex justify-center items-center ">15 Nov 2024</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-blue-950 font-bold ">124</h1>
                        <p className="text-gray-500">scans</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-white text-[13px] border border-gray-100 rounded-2xl bg-blue-800 px-2 ">Actif</p>
                    </div>

                        <Eye className="w-5 h-5 text-gray-500 hover:text-amber-500 hover:cursor-pointer " />
                        <Download className="w-5 h-5 text-gray-500 hover:text-amber-500 hover:cursor-pointer " />
                        <Eye className="w-5 h-5 text-gray-500 hover:text-amber-500 hover:cursor-pointer " />
                </div>
            </div>
        </div>
    )
}

export default HistoriqueDashboardCard