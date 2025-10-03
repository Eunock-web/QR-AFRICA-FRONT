import Input from '../utils/Input.jsx'
import Button from '../utils/Button.jsx'
import Link from '../Header/Link.jsx'
import { Mail, QrCode, Lock } from "lucide-react";
import { Facebook } from "lucide-react";
import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";

function Login() {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-green-900 to-green-500'>
            <div className="flex flex-col items-center space-y-4">
                <div className='flex flex-col space-y-3 mb-10'>
                    <div className='flex justify-center'>
                        <QrCode className="w-20 h-20 text-white" /> 
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-center font-extrabold text-white text-[35px]'>QR Africa</h1>
                        <p className='text-gray-300 text-[20px]'>Connexion à votre compte</p>
                    </div>
                </div>

                <div className='bg-blue-50 px-5 border rounded-xl border-blue-50 py-3 w-[350px] md:w-[400px]'>
                    <div className="space-y-2 mb-5">
                        <h3 className="text-2xl text-center font-semibold text-blue-800">Se connecter</h3>
                        <p className="text-center text-gray-400">Entrez vos informations pour accéder à votre compte</p>
                    </div>

                    <div className='flex flex-col space-y-4 text-blue-800'>
                        <div className="relative">
                            <label htmlFor="email" className='text-blue-900 font-semibold'>Adresse email</label>
                            <Mail className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                            <Input 
                                type="email" 
                                placeholder="erwinmith@gmail.com" 
                                id="mail" 
                                name="mail" 
                                className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className='text-blue-900 font-semibold mt-3'>Mot de passe</label>
                            <Lock className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                            <Input 
                                type="password" 
                                placeholder="******" 
                                id="password" 
                                name="password" 
                                className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                            />
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <Input type="checkbox" />
                                <p className='font-semibold'>Se souvenir de moi</p>
                            </div>
                            <a href='' className='text-blue-800 underline'>Mot de passe oublié ?</a>
                        </div>

                        <div className='space-y-2'>
                            <Button className="w-full bg-blue-900 rounded-2xl h-[50px] text-white text-[15px]">Se connecter</Button>
                            <p className='text-center'>ou s'inscrire avec</p>
                        </div>

                        <div className='flex flex-row justify-center gap-4'>
                            <Button className="rounded-2xl hover:bg-amber-500 hover:text-white flex items-center gap-2">
                                <Icon path={mdiGoogle} size={1} className="w-5 h-5" /> Google
                            </Button>
                            <Button className="rounded-2xl hover:bg-amber-500 hover:text-white flex items-center gap-2">
                                <Facebook className="w-5 h-5" /> Facebook
                            </Button>
                        </div>

                        <div>
                            <p className='flex justify-center gap-2 font-extralight'>Vous n'avez pas de compte ? 
                                <span><Link className="font-semibold"> S'inscrire </Link></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
