import Button from '../utils/Button'
import Input from '../utils/Input'
import Aperçu from '../utils/Aperçu'
import { Wifi } from 'lucide-react'
import Down from '../utils/Down'

function Wifis() {
    return (
        <div className='flex flex-row justify-between mx-[8%] my-[7%]'>
            <div className='flex flex-col space-y-3 w-3/5'>
                <div className='flex flex-col mb-5 '>
                    <h1 className=' font-bold text-[27px] text-blue-950 '> Créer un code Qr </h1>
                    <p className='text-gray-400'>Choisissez le type de QR code que vous souhaitez créez </p>
                </div>

                <div className='flex flex-row justify-between  '>
                    <h1 className=' font-bold text-[20px] text-blue-950 '> Configuration de du Qr code </h1>
                    <Button className=" bg-white border-0 text-blue-950  hover:bg-amber-400 ">Changer de type </Button>
                </div>

                <div className=' space-y-5 shadow-xl border border-gray-200 rounded-xl p-6 '>
                    <div className='flex flex-row gap-2'>
                        <Wifi className='w-5 h-5 text-blue-900 mt-1' />
                        <h3 className='text-blue-950 font-bold text-[20px] '> Wifi </h3>
                    </div>

                    <div className=' flex flex-col space-y-2'>
                        <label htmlFor="url" className=' text-blue-950 font-semibold text-[17px]'> Contenu </label>
                        <Input type="textarea" placeholder="Entrez votre contenu ici" id="url" name="url" className=" w-full h-10 textarea rounded-xl border-gray-200 px-3 ml-[-5px]" />
                    </div>

                    <Down />
                </div>
            </div>

            <div className=''>
                <Aperçu />
            </div>
        </div>
    )
}


export default Wifis