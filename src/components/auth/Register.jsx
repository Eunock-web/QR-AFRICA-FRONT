import Input from '../utils/Input.jsx'
import Button from '../utils/Button.jsx'
import Link   from '../Header/Link.jsx'

function Register() {
    return (
        <div className="">
            <div className=" flex flex-col items-center space-y-4 ">
                <div className='bg-blue-50 px-5  border rounded-xl border-blue-50 '>
                    <div className="space-y-2 mb-5">
                        <h3 className="text-2xl text-center font-bold text-blue-800">S'inscrire</h3>
                        <p className="text-center text-blue-400 "> Rejoignez Qr Africa et créez vos QR codes personnalisés </p>
                    </div>

                    <div className="flex flex-row space-x-4 space-y-3">
                        <div className='w-1/2 text-blue-800 '>
                            <label htmlFor="prenom" className='text-blue-900 font-semibold'>Prénom</label>
                            <Input type="text" placeholder="Jean" id="prenom" name="prenom" className = "focus:border-blue-500  w-full  h-10  shadow-2xl rounded-xl p-3 font-semibold" />
                        </div>

                        <div className='w-1/2  text-blue-800 '>
                            <label htmlFor="prenom" className='text-blue-900 font-semibold' >Nom</label>
                            <Input type="text" placeholder="Dupont" id="nom" name="nom" className = " focus:ring-2 focus:ring-blue-500  w-full  h-10  shadow-2xl rounded-xl p-3 font-semibold-[10px] " />
                        </div>
                    </div>

                    <div className='flex left flex-col space-y-2  text-blue-800 '>

                        <div className=" flex flex-col space-y-2 ">
                                <label htmlFor="email" className='text-blue-900 font-semibold' >Adresse email</label>
                                <Input type="email" placeholder="votre@email.com" id ="email" name="email" className = "focus:border-blue-500 w-full  h-10   shadow-2xl rounded-xl p-3 font-semibold-[10px] " />
                        </div>

                        <div className=" flex flex-col space-y-2 ">
                                <label htmlFor="telephone" className='text-blue-900 font-semibold' >Numero  de téléphone</label>
                                <Input type="text" placeholder="+33 45 25 45 78 08" id="telephone" name="telephone" className = "focus:border-blue-500 w-full  h-10  shadow-2xl rounded-xl p-3 font-semibold-[10px] " />
                        </div>

                        <div className=' flex flex-col space-y-3 '>
                                <label htmlFor="password" className='text-blue-900 font-semibold' >Mot de passe</label>
                                <Input type="password" placeholder=".........." id="password" name="password" className = "focus:border-blue-500 w-full  h-10  shadow-2xl rounded-xl p-3 font-semibold-[10px] " />
                        </div>

                        <div className=' flex flex-col space-y-3 ' >
                                <label htmlFor="confirm_password" className='text-blue-900 font-semibold' >Confirmer le mot de passe</label>
                                <Input type="password" placeholder=".........." id="confirm_password" name="password" className = "focus:border-blue-500 w-full  h-10   shadow-2xl rounded-xl p-3 font-semibold-[10px] " />
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
                            <Button>Google</Button>
                            <Button>facebook</Button>
                        </div>

                        <div className=''>
                            <p className='flex flex-row justify-center gap-4 font-extralight'>Vous avez déjà un compte ? <span> <Link className="font-semibold"> Se connecter  </Link> </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register