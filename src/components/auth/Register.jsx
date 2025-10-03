import Input from '../utils/Input.jsx'
import Button from '../utils/Button.jsx'
import Link   from '../Header/Link.jsx'
import { Mail, QrCode, User, Phone ,Lock} from "lucide-react";
import { Facebook } from "lucide-react";
import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";

function Register() {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-green-900 to-green-500'>
            <div className="  flex flex-col justify-center  items-center  w-[500px] ">
                <div className=' flex flex-col space-y-3 mb-10'>
                    <div className='flex justify-center '>
                        <QrCode className="w-20 h-20 text-white " /> 
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-center font-extrabold text-white text-[35px]'>QR Africa </h1>
                        <p className='text-gray-300 text-[20px]'> Connexion a votre compte </p>
                    </div>
                </div>
                <div className='bg-blue-50 px-5  space-y-5 rounded-xl py-5'>
                    <div className="space-y-4">
                        <h3 className="text-2xl text-center font-bold text-blue-800">S'inscrire</h3>
                        <p className="text-center text-gray-400 "> Rejoignez Qr Africa et créez vos QR codes personnalisés </p>
                    </div>

                    <div className="flex flex-row space-x-4 ">
                        <div className='w-1/2 text-blue-800 space-y-2 flex flex-col '>
                            <label htmlFor="prenom" className='text-blue-900 font-semibold'>Prénom</label>
                            <div className='flex items-center border rounded-lg px-3'>
                                <User className='w-5 h-5 text-gray-500' />
                                <Input type="text" placeholder="Jean" id="prenom" name="prenom" className = " w-full  h-10 border-0 input ml-2  font-semibold" />
                            </div>
                        </div>

                        <div className='w-1/2  text-blue-800 space-y-2 flex flex-col'>
                            <label htmlFor="prenom" className='text-blue-900 font-semibold' >Nom</label>
                            <div className='flex items-center border rounded-lg px-3'>
                                <User className='w-5 h-5 text-gray-500' />
                                <Input type="text" placeholder="Dupont" id="nom" name="nom" className = " w-full  h-10 border-0 input ml-2  font-semibold" />
                            </div>
                        </div>
                    </div>

                    <div className='flex left flex-col space-y-2  text-blue-800 '>

                        <div className=" flex flex-col space-y-2 ">
                            <label htmlFor="email" className='text-blue-900 font-semibold' >Adresse email</label>
                            <div className='flex items-center border rounded-lg px-3'>
                                <Mail className='w-5 h-5 text-gray-500' />
                                <Input type="email" placeholder="erwinmith@gmail.com" id="mail" name="mail" className = " h-10 border-0 email ml-2  font-semibold w-full " />
                            </div>
                        </div>

                        <div className=" flex flex-col space-y-2 ">
                            <label htmlFor="telephone" className='text-blue-900 font-semibold' >Numero  de téléphone</label>
                            <div className='flex items-center border rounded-lg px-3'>
                                <Phone className='w-5 h-5 text-gray-500' />
                                <Input type="number" placeholder="+33 45 25 45 78 08" id="telephone" name="telephone" className = " h-10 border-0 number ml-2  font-semibold w-full " />
                            </div>
                        </div>

                        <div className=' flex flex-col space-y-3 '>
                            <label htmlFor="password" className='text-blue-900 font-semibold' >Mot de passe</label>
                            <div className='flex items-center border rounded-lg px-3'>
                                <Lock className='w-5 h-5 text-gray-500' />
                                <Input type="password" placeholder="******" id="password" name="password" className = " w-full  h-10 border-0 password ml-2  font-semibold" />
                            </div>
                        </div>

                        <div className=' flex flex-col space-y-3 ' >
                                <label htmlFor="confirm_password" className='text-blue-900 font-semibold' >Confirmer le mot de passe</label>
                            <div className='flex items-center border rounded-lg px-3'>
                                <Lock className='w-5 h-5 text-gray-500' />
                                <Input type="password" placeholder="******" id="password" name="password" className = " w-full  h-10 border-0 password ml-2  font-semibold focus:border-blue-900    " />
                            </div>
                        </div>

                        <div className='flex flex-row gap-2 space-y-3'>
                            <Input type="checkbox" />
                            <p className='font-semibold text-blue-950 '>J'accepte les <a href=" " className=' text-blue-800 '> conditions  d'utilisation </a> et la <a href="" className=' text-blue-800 ' > politique de confidentialité </a> </p>
                        </div>

                        <div className='space-y-2'> 
                            <Button className=" w-full bg-blue-300 rounded-2xl " > Créer mon compte </Button>
                            <p className='text-center'> ou s'inscrire avec </p>
                        </div>

                        <div className='flex flex-row justify-center gap-4'>
                            <Button className="rounded-2xl hover:bg-amber-500 hover:text-white "> <Icon path={mdiGoogle} size={1} className="text-current w-5 h-5" /> Google</Button>
                            <Button className="rounded-2xl hover:bg-amber-500 hover:text-white "> <Facebook className="w-5 h-5" /> Facebook</Button>
                        </div>

                        <div className='mb-[8px] '>
                            <p className='flex flex-row justify-center gap-4'>Vous avez déjà un compte ? <span> <Link className=""> Se connecter  </Link> </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register