import Button from "./Button"

function TarifsCard(props) {
    return (
        <div>
            <div className="card card-border bg-base-100 w-96">
                <div className="border border-gray-300 p-4 rounded-xl">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-blue-950 text-[25px] font-bold">{props.titre || "Gratuit"}</h1>
                        <p className="text-gray-500 text-[15px] ">{props.description || "Parfait pour débuter avec les QR " }</p>
                        <p className="text-[20px]"><span className="text-blue-950 font-bold text-[20px]">{props.prix || "0"}</span> FCFA/mois </p>
                        <Button className={" py-2 px-5  rounded-2xl  text-white" + props.className}>{props.children || "commencer maintenant"}</Button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TarifsCard