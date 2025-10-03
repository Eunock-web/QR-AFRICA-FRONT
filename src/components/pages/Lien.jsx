import Button from '../utils/Button'
import Input from '../utils/Input'
import Aperçu from '../utils/Aperçu'

function Lien() {
    return (
        <div className='flex flex-row justify-between mx-50'>
            <div className='flex flex-col space-y-3 w-3/5'>
                <div className='flex flex-row justify-between  '>
                    <h1 className=' font-bold text-[20px] text-blue-950 '> Configuration de du Qr code </h1>
                    <Button className=" bg-gray-100 hover:bg-amber-400 ">Changer de type </Button>
                </div>

                <div className=' space-y-5 shadow-xl border border-gray-200 rounded-xl p-6 '>
                    <div className='flex flex-col gap-2'>
                        <img src="" alt="" />
                        <h3 className='text-blue-950 font-bold text-[20px] '> Lien Web </h3>
                    </div>

                    <div>
                        <label htmlFor="url" className=' text-blue-950 font-semibold text-[17px]'>URL du site web</label>
                        <Input placeholder="https://exemple.com" id="url" name="url" className=" w-full h-10 input rounded-xl border-gray-200 px-3 ml-[-5px]"/>
                    </div>

                    <div className='flex flex-row justify-left gap-3'>
                        <Button className="bg-blue-800 text-white rounded-xl"> Génerer le QR </Button>
                        <Button className="text-blue-900 rounded-xl hover:bg-amber-400 "> Aperçu </Button>
                    </div>
                </div>
            </div>

            <div className=''>
                <Aperçu></Aperçu>
            </div>
        </div>
    )
}


export default Lien 