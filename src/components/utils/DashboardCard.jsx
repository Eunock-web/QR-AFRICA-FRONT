function DashboardCard({ pourcentage, text, soustitre, Icon, iconClassName = "" }) {
    return (
            <div className="flex flex-col space-y-6 py-9 px-7 border border-gray-200 rounded-xl hover:shadow-xl hover:cursor-pointer w-[380px]">
                <div className="flex flex-row justify-between ">
                    {Icon && <Icon className={`w-6 h-6 ${iconClassName}`} />}
                    <p className="text-green-600 border flex items-center border-green-100 bg-green-100  px-2 rounded-4xl ">{pourcentage}</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 text-[15px]"> {text} </p>
                    <h1 className="text-blue-950 font-bold text-[20px] "> {soustitre} </h1>
                </div>
            </div>
    )
}

export default DashboardCard
