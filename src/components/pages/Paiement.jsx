import Button from '../utils/Button'
import Input from '../utils/Input'
import Aperçu from '../utils/Aperçu'
import Down from '../utils/Down'
function Paiement() {
    return (
        <div className='flex flex-row justify-between mt-[5%] mx-[10%] '>
            <div className='flex flex-col space-y-3 w-3/5'>
                <div className='flex flex-col mb-5 '>
                    <h1 className=' font-bold text-[27px] text-blue-950 '> Créer un code Qr </h1>
                    <p className='text-gray-400'>Choisissez le type de QR code que vous souhaitez créez </p>
                </div>

                <div className='flex flex-row justify-between mb-4 '>
                    <h1 className=' font-bold text-[16px] text-blue-950 '> Configuration de du Qr code </h1>
                    <Button className=" bg-white border-0 text-blue-950  hover:bg-amber-400 ">Changer de type </Button>
                </div>

                <div className=' space-y-5 shadow rounded-xl p-6 '>
                    <div className='flex flex-row gap-2'>
                        <h3 className='text-blue-950 font-bold text-[20px] '> Paiement Mobile </h3>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="opérateur" className=' text-blue-950 font-semibold text-[17px]'>Opérateur</label>
                        {/* <Input type="select" placeholder="erwinmith@gmail.com" id="email" name="email" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " /> */}
                        <select   defaultValue=" choisir un operateur " className="select w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] ">
                            <option disabled={true}> choisir un operateur </option>
                            <option>Mtn Momo</option>
                            <option>Moov Money</option>
                            <option>Orange Money</option>
                        </select>
                    </div>

                    <div className=''>
                        <label htmlFor="telephone" className=' text-blue-950 font-semibold text-[17px]'>Telephone</label>
                        <Input placeholder="+229 XX XX XX XX" id="telephone" name="telephone" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                    </div>

                    <div>
                        <label htmlFor="montant" className=' text-blue-950  font-semibold text-[17px]'>Montant</label>
                        <Input type="number" placeholder="5000" id="montant" name="montant" className=" w-full h-10 input rounded-xl border-gray-200 px-3 ml-[-5px] number " />
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


export default Paiement