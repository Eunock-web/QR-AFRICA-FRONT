import Button from '../utils/Button'
import Input from '../utils/Input'
import Aperçu from '../utils/Aperçu'
import Down from '../utils/Down'
import { User2 } from 'lucide-react'

function Contact() {
    return (
        <div className='flex flex-row justify-between mt-[5%] mx-[10%] '>
            <div className='flex flex-col space-y-3 w-3/5'>
                <div className='flex flex-col mb-5 '>
                    <h1 className='font-bold text-[27px] text-blue-950 '> Créer un code Qr </h1>
                    <p className='text-gray-400'>Choisissez le type de QR code que vous souhaitez créez </p>
                </div>

                <div className='flex flex-row justify-between mb-4 '>
                    <h1 className=' font-bold text-[16px] text-blue-950 '> Configuration de du Qr code </h1>
                    <Button className=" bg-white border-0 text-blue-950  hover:bg-amber-400 ">Changer de type </Button>
                </div>

                <div className=' space-y-5 border border-gray-200 rounded-xl p-6 '>
                    <div className='flex flex-row gap-2'>
                        <User2 className='w-6 h-6 text-blue-950 mt-1 ' />
                        <h3 className='text-blue-950 font-bold text-[20px] '>Contact vCard</h3>
                    </div>

                    <div className='flex flex-row  gap-2'>
                        <div className='w-1/2'>
                            <label htmlFor="prenom" className=' text-blue-950 font-semibold text-[17px]'>Prenom</label>
                            <Input placeholder="Jean" id="prenom" name="prenom" className=" w-full h-10 input  rounded-xl border-gray-200 px-3 ml-[-5px]" />
                        </div>

                        <div className='w-1/2' >
                            <label htmlFor="nom" className=' text-blue-950 font-semibold text-[17px]'>Nom</label>
                            <Input placeholder="Dupont" id="nom" name="nom" className=" w-full h-10 input rounded-xl border-gray-200 px-3 ml-[-5px]" />
                        </div>
                    </div>

                    <div className=''>
                        <label htmlFor="telephone" className=' text-blue-950 font-semibold text-[17px]'>Telephone</label>
                        <Input placeholder="+229 97 37 79 80" id="telephone" name="telephone" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                    </div>

                    <div>
                        <label htmlFor="email" className=' text-blue-950 font-semibold text-[17px]'>Email</label>
                        <Input type="email" placeholder="erwinmith@gmail.com" id="email" name="email" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                    </div>

                    <div>
                        <label htmlFor="entreprise" className=' text-blue-950  font-semibold text-[17px]'>Entreprise</label>
                        <Input placeholder="Magengo prime" id="entreprise" name="entreprise" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                    </div>

                    <Down />

                </div>
            </div>

            <div className=''>
                <Aperçu></Aperçu>
            </div>
        </div>
    )
}


export default Contact