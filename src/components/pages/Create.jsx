import Card from "../utils/Card";


function Create() {
    return (
        <div className="">
            <div className="flex flex-col space-y-2">
                <h1 className="font-extrabold text-blue-950 ">Créer un code QR</h1>
                <p className="font-extralight  text-gray-400">Choisissez le type de QR Code que vous souhaitez créer </p>
            </div>

            <div className="flex flex-row  ">
                <div className="flex flex-col space-y-2 ">
                    <h1 className="text-sm font-semibold text-blue-950 ">Type de Code QR </h1>
                    <div className="flex flex-row space-x-8 space-y-4 flex-wrap ">
                        <Card title="Lien Web" description="Site web, boutique en ligne, réseaux sociaux" className=" hover:shadow-blue-200 cursor-pointer " />
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-200 cursor-pointer "/>
                        <Card title="Card" description="Card" className=" hover:shadow-blue-500 cursor-pointer "/>
                    </div>
                </div>

                <div className="flex flex-col space-y-2 ">
                    <h1 className="text-sm font-semibold text-blue-950 "> Aperçu en temps réel </h1>
                    <Card title="Card" description="Card" className="" />
                </div>
            </div>
        </div>
    )
}


export default Create