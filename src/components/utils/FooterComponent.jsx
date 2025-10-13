

function FooterComponent({Icon, titre, soustitre}) {
    return (
        <div>
            <div className="flex flex-col space-y-2 ">
              {Icon && <Icon className="w-5 h-5 text-gray-500 hover:text-blue-950 hover:cursor-pointer"/>}  
                <h1 className="text-blue-950 text-[20px] font-bold ">{titre}</h1>
                <p className="text-gray-500  text-[16px]">{soustitre}</p>
            </div>            
        </div>
    )
}

export default FooterComponent
