import Input from '../utils/Input.jsx'
import Button from '../utils/Button.jsx'
import Link   from '../Header/Link.jsx'

function Login() {
    return (
        <div className=' '>
            <div className="  flex flex-col items-center space-y-4 ">
                <div className='bg-blue-50 px-5  border rounded-xl border-blue-50 '>
                    <div className="space-y-2 mb-5">
                        <h3 className="text-2xl text-center font-bold text-blue-800">S'inscrire</h3>
                        <p className="text-center text-blue-400 "> Rejoignez Qr Africa et créez vos QR codes personnalisés </p>
                    </div>


                    <div className='flex left flex-col space-y-2  text-blue-800 '>

                        <div className=" flex flex-col space-y-2 ">
                                <label htmlFor="email" className='text-blue-900 font-semibold' >Adresse email</label>
                                <Input type="email" placeholder="votre@email.com" id ="email" name="email" className = "focus:border-blue-500 w-full  h-10   shadow-2xl rounded-xl p-3 font-semibold-[10px] " />
                        </div>

                        <div className=' flex flex-col space-y-3 '>
                                <label htmlFor="password" className='text-blue-900 font-semibold' >Mot de passe</label>
                                <Input type="password" placeholder=".........." id="password" name="password" className = "focus:border-blue-500 w-full  h-10  shadow-2xl rounded-xl p-3 font-semibold-[10px] " />
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

export default Login