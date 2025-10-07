import ListCard from "../utils/ListCard"
import { User } from "lucide-react"
import Input from "../utils/Input"
import Button from "../utils/Button"
function Profil() {
    return (
        <div>
            
            <div className=" flex flex-col space-y-5 mx-[2%] my-[2%] ">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col space-y-2">
                        <h1 className=" text-blue-950 text-[30px] font-bold ">Mon Profil</h1>
                        <p className=" text-gray-400  ">Gérez vos informations personnelles et parametres</p>
                    </div>

                    <div>
                        <Button className="bg-blue-950 text-white border border-blue-950 rounded-xl "> Modifier le profil </Button>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-5">
                    <div className="flex flex-col justify-center items-center space-y-2 border border-gray-300 p-4 rounded-xl w-1/4">
                        <h1 className="bg-blue-900 text-white p-10 text-[20px] rounded-full">JD</h1>
                        <h1 className="text-[20px] text-blue-950 font-bold">John Doe</h1>
                        <p className="text-gray-400">john.doe@gmail.com</p>
                        <p className=" text-blue-800 bg-blue-100 p-1 rounded-xl">Plan premium</p>

                        <div className="flex flex-row justify-between space-x-15">
                            <div className="flex flex-col">
                                <h1 className="text-[20px] font-bold text-blue-900 text-center">24</h1>
                                <p className="text-gray-500">QR Codes</p>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-[20px] font-bold text-blue-900 text-center">24</h1>
                                <p className="text-gray-500">QR Codes</p>
                            </div>
                        </div>

                        <hr className="border border-gray-300 w-[90%]" />

                        <div className="flex flex-row justify-between ">
                                <User className="w-5 h-5" />
                            <p className="text-gray-500">Membre depuis Janvier 2024</p>
                        </div>
                    </div>
                    
                    <div className="w-3/4">
                        <div className='flex flex-col space-y-3 '>
                            <div className=' space-y-5 shadow rounded-xl p-6 '>
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

                                <div>
                                    <label htmlFor="email" className=' text-blue-950 font-semibold text-[17px]'>Email</label>
                                    <Input type="email" placeholder="erwinmith@gmail.com" id="email" name="email" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                                </div>

                                <div className="flex flex-row gap-2 ">
                                    <div className=' w-1/2 '>
                                        <label htmlFor="telephone" className=' text-blue-950 font-semibold text-[17px]'>Telephone</label>
                                        <Input placeholder="+229 97 37 79 80" id="telephone" name="telephone" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                                    </div>


                                    <div className="w-1/2">
                                        <label htmlFor="entreprise" className=' text-blue-950  font-semibold text-[17px]'>Entreprise</label>
                                        <Input placeholder="Magengo prime" id="entreprise" name="entreprise" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="adresse" className=' text-blue-950  font-semibold text-[17px]'>Adresse</label>
                                    <Input placeholder="Agla " id="adresse" name="adresse" className=" w-full h-10  rounded-xl border-gray-200 px-3 ml-[-5px] input " />
                                </div>

                                {/* <Down /> */}

                            </div>
                        </div>
                    </div>
                </div>

                


                <div className="  flex flex-col border border-gray-300 p-3 rounded-xl  space-y-3">
                        <div className="flex flex-col">
                            <h1 className="text-blue-900 font-bold text-[23px] ">Activité récente</h1>
                            <p className="text-gray-500">Vos dernières actions sur la plateformes</p>
                        </div>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>


            </div>



        </div>
    )
}

export default Profil