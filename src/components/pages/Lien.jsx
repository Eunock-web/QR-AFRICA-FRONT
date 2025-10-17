import Button from '../utils/Button'
import Input from '../utils/Input'
import Aperçu from '../utils/Aperçu'
import { Webcam } from 'lucide-react'
import Down from '../utils/Down'
function Lien() {
    return (
        <div className='flex flex-row justify-between mx-[10%]  my-[8%]'>
            <div className='flex flex-col space-y-3 w-3/5'>
                <div className='flex flex-row justify-between  '>
                    <h1 className=' font-bold text-[20px] text-blue-950 '> Configuration de du Qr code </h1>
                    <Button className=" bg-white border-0 text-blue-950  hover:bg-amber-400 ">Changer de type </Button>
                </div>

                <div className=' space-y-5  border border-gray-200 rounded-xl p-6 '>
                    <div className='flex flex-row gap-2 mt-1'>
                        <Webcam className='W-5 h-5 text-blue-900' />
                        <h3 className='text-blue-950 font-bold text-[20px] '> Lien Web </h3>
                    </div>

                    <div>
                        <label htmlFor="url" className=' text-blue-950 font-semibold text-[17px]'>URL du site web</label>
                        <Input placeholder="https://exemple.com" id="url" name="url" className=" w-full h-10 input rounded-xl border-gray-200 px-3 ml-[-5px]"/>
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


export default Lien 