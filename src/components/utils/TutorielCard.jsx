

function TutorielCard({Icon, titre="Total Tutoriels", soustitre="10"}) {
    return (
        <div className="w-[40%]">
            <div className="flex flex-row justify-between items-center  border border-gray-100  rounded-xl p-5">
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 text-[15px]"> {titre} </p>
                    <p className="text-blue-950 font-bold text-[20px]"> {soustitre}</p>
                </div>
                {Icon && (
                    <Icon className="w-12 h-12 text-blue-800 border border-blue-100 p-3 rounded-2xl bg-blue-200" />
                )}
            </div>
        </div>
    )
}

export default TutorielCard