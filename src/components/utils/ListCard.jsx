


function ListCard() {
    return (
        <div className="flex flex-row justify-between border border-gray-300 p-1 rounded-xl">
            <div className="flex flex-col ">
                <h1 className="text-blue-900 font-bold ">QR Code créé</h1>
                <p className="text-gray-500">Menu Restaurant </p>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-500">20/10/2025</p>
            </div>
        </div>
    )
}

export default ListCard