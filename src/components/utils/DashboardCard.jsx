

function DashboardCard({ text, soustitre, Icon, Icon2 }) {
    return (
        <div>
            <div className="flex flex-col space-y-3 p-7 border border-gray-200 rounded-xl hover: hover:shadow-lg hover:cursor-pointer w-[400px]">
                <div className="flex flex-row justify-between gap-2">
                    {Icon && <Icon className="w-10 h-10 p-2 text-blue-950 " />}
                    {Icon2 && <Icon2 className="w-10 h-10 p-2 text-blue-950 "/>}
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 text-[15px]"> {text} </p>
                    <h1 className="text-blue-950 font-bold text-[20px] "> {soustitre} </h1>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard