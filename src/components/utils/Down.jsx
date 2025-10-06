import Button from "./Button"


function Down() {
    return (
        <div>
            <div className='flex flex-row justify-left gap-3'>
                <Button className="bg-blue-800 text-white rounded-xl"> Génerer le QR </Button>
                <Button className="text-blue-950 rounded-xl "> Aperçu </Button>
            </div>
        </div>
    )
}   

export default Down