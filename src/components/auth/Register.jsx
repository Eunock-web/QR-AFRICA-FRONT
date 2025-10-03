import Input from '../utils/Input.jsx'
import Button from '../utils/Button.jsx'
import Link from '../Header/Link.jsx'
import { Mail, QrCode, User, Phone, Lock } from "lucide-react";
import { Facebook } from "lucide-react";
import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";

function Register() {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-green-900 to-green-500'>
            <div className="flex flex-col justify-center items-center w-[500px]">
                <div className='flex flex-col space-y-3 mb-10'>
                    <div className='flex justify-center'>
                        <QrCode className="w-20 h-20 text-white" /> 
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-center font-extrabold text-white text-[35px]'>QR Africa</h1>
                        <p className='text-gray-300 text-[20px]'>Créez votre compte</p>
                    </div>
                </div>

                <div className='bg-blue-50 px-5 space-y-5 rounded-xl py-5'>
                    <div className="space-y-4">
                        <h3 className="text-2xl text-center font-bold text-blue-800">S'inscrire</h3>
                        <p className="text-center text-gray-400">Rejoignez Qr Africa et créez vos QR codes personnalisés</p>
                    </div>

                    <div className="flex flex-row space-x-4">
                        <div className='w-1/2 flex flex-col space-y-2 relative'>
                            <label htmlFor="prenom" className='text-blue-900 font-semibold'>Prénom</label>
                            <User className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                            <Input 
                                type="text" 
                                placeholder="Jean" 
                                id="prenom" 
                                name="prenom" 
                                className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                            />
                        </div>

                        <div className='w-1/2 flex flex-col space-y-2 relative'>
                            <label htmlFor="nom" className='text-blue-900 font-semibold'>Nom</label>
                            <User className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                            <Input 
                                type="text" 
                                placeholder="Dupont" 
                                id="nom" 
                                name="nom" 
                                className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                            />
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 relative'>
                        <label htmlFor="mail" className='text-blue-900 font-semibold'>Adresse email</label>
                        <Mail className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                        <Input 
                            type="email" 
                            placeholder="erwinmith@gmail.com" 
                            id="mail" 
                            name="mail" 
                            className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                        />
                    </div>

                    <div className='flex flex-col space-y-2 relative'>
                        <label htmlFor="telephone" className='text-blue-900 font-semibold'>Numéro de téléphone</label>
                        <Phone className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                        <Input 
                            type="number" 
                            placeholder="+33 45 25 45 78 08" 
                            id="telephone" 
                            name="telephone" 
                            className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                        />
                    </div>

                    <div className='flex flex-col space-y-2 relative'>
                        <label htmlFor="password" className='text-blue-900 font-semibold'>Mot de passe</label>
                        <Lock className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                        <Input 
                            type="password" 
                            placeholder="******" 
                            id="password" 
                            name="password" 
                            className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                        />
                    </div>

                    <div className='flex flex-col space-y-2 relative'>
                        <label htmlFor="confirm_password" className='text-blue-900 font-semibold'>Confirmer le mot de passe</label>
                        <Lock className='w-5 h-5 text-gray-500 absolute left-3 top-2/3 -translate-y-1/2' />
                        <Input 
                            type="password" 
                            placeholder="******" 
                            id="confirm_password" 
                            name="confirm_password" 
                            className="w-full h-10 border border-gray-300 rounded-lg pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                        />
                    </div>

                    <div className='flex flex-row gap-2'>
                        <Input type="checkbox" />
                        <p className='font-semibold text-blue-950'>
                            J'accepte les <a href="#" className='text-blue-800'>conditions d'utilisation</a> et la <a href="#" className='text-blue-800'>politique de confidentialité</a>
                        </p>
                    </div>

                    <div className='space-y-2'> 
                        <Button className="w-full bg-blue-300 rounded-2xl">Créer mon compte</Button>
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

                    <div className='mb-[8px]'>
                        <p className='flex justify-center gap-2'>
                            Vous avez déjà un compte ? <span><Link className="font-semibold">Se connecter</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
