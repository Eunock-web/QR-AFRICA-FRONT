import { GitGraphIcon, Eye } from "lucide-react"
function ActivitesRecentes() {
    return (
        <div className="flex flex-col space-y-5 border border-gray-300 p-8 rounded-xl ">
            <div className="flex flex-row gap-1">
                <GitGraphIcon className="w-7 h-7 text-blue-800" />
                <h1 className="text-blue-950 text-[20px] font-bold  ">Activité Récente</h1>
            </div>

            <div className="flex flex-row gap-2">
                <Eye className="w-10 h-10 text-green-300 border border-green-100 bg-green-100 rounded-2xl p-2 " />
                <div className="flex flex-col space-y-1">
                    <h1 className="text-blue-950 font-bold text-[20px] ">QR Code scanné </h1>
                    <p className="text-gray-500 text-[12px] ">Site Web Personnel</p>
                    <p className="text-gray-500 text-[12px]">Il y a 12 min</p>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <Eye className="w-10 h-10 text-green-300 border border-green-100 rounded-2xl bg-green-100 p-2 " />
                <div className="flex flex-col space-y-1">
                    <h1 className="text-blue-950 font-bold text-[20px] ">QR Code scanné </h1>
                    <p className="text-gray-500 text-[12px] ">Site Web Personnel</p>
                    <p className="text-gray-500 text-[12px]">Il y a 12 min</p>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <Eye className="w-10 h-10 text-green-300 border border-green-100 rounded-xl bg-green-100 p-2 " />
                <div className="flex flex-col space-y-1">
                    <h1 className="text-blue-950 font-bold text-[20px] ">QR Code scanné </h1>
                    <p className="text-gray-500 text-[12px] ">Site Web Personnel</p>
                    <p className="text-gray-500 text-[12px]">Il y a 12 min</p>
                </div>
            </div>
        </div>
    )
}

export default ActivitesRecentes