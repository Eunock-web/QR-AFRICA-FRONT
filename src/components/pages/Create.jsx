import Card from "../utils/Card";

function Create() {
    return (
        <div className=" mt-[8%] mx-[3%]  ">
            <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-[30px] text-blue-950 ">Créer un code QR</h1>
                <p className="font-extralight text-[20px] text-blue-900">Choisissez le type de QR Code que vous souhaitez créer </p>
            </div>

            <div className="flex flex-row mt-7">
                <div className="flex flex-col space-y-5 ">
                    <h1 className="text-[23px] font-semibold text-blue-950 ">Type de Code QR </h1>
                    <div className="flex flex-row space-x-4 space-y-4 flex-wrap ">
                        <Card title="Lien Web" description="Site web, boutique en ligne, réseaux sociaux" className=" hover:shadow-blue-200  border border-gray-300 cursor-pointer " />
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer border border-gray-300"/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer border border-gray-300 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer border border-gray-300 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer border border-gray-300 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer border border-gray-300 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-500 cursor-pointer border border-gray-300 cursor-pointer "/>
                    </div>
                </div>

                <div className="flex flex-col space-y-2 ">
                    <h1 className="text-[23px] font-semibold text-blue-950 "> Aperçu en temps réel </h1>
                    <Card title="Card" description="Card" className="" />
                </div>
            </div>
        </div>
    )
}


export default Create