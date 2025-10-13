function PostFooter({ Icon, titre, soustitres = [] }) {
    return (
        <div>
            <div className="flex flex-col  space-y-1">
                <div className="flex flex-row gap-1 ml-[-7px] ">
                    <div className="mt-[-3px] ">
                        {Icon && <Icon className="w-8 h-8 p-2 text-blue-950" />}
                    </div>
                    <h1 className="text-blue-950 text-[15px] font-bold mb-4">{titre}</h1>
                </div>
                <div className="flex flex-col space-y-2">
                    {soustitres.map((soustitre, index) => (
                        <p key={index} className="text-gray-400 text-[16px] ">{soustitre}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostFooter