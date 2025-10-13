function PostFooter({ Icon, titre, soustitres = [] }) {
    return (
        <div>
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row gap-1">
                    <div>
                        {Icon && <Icon className="w-10 h-10 p-2 text-blue-950" />}
                    </div>
                    <h1 className="text-blue-950 text-[18px] font-bold">{titre}</h1>
                </div>
                {soustitres.map((soustitre, index) => (
                    <p key={index} className="text-gray-500 text-[12px]">{soustitre}</p>
                ))}
            </div>
        </div>
    );
}
