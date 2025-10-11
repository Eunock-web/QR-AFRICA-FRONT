import Input from "../utils/Input"
import { Mail } from "lucide-react"
import HelpCard from "../utils/HelpCard"
import { VideoIcon } from "lucide-react"
import Button from "../utils/Button"
import { SendIcon } from "lucide-react"
function Help() {
    return(
        <div className="flex flex-col space-y-4 mx-[3%]">
            <div className="flex flex-col justify-center items-center">
                <h1 className=" text-blue-950 text-[25px] font-bold"> Centre d'aide </h1>
                <p className="text-gray-400 text-[20px] ">Trouvez rapidement des reponses à vos questions ou contactez notre équipe de support </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5 ">
                <div className="relative">
                    <Mail className='w-5 h-5 text-blue-500 absolute left-3 top-2/3 -translate-y-1/2' />
                    <Input type="text" className='input text-gray-950 rounded-2xl w-full p-6 ' placeholder="Rechercher dans la FAQ..." />
                </div>
            </div>

            <div className="flex flex-row gap-5 w-full ">
                <div className="w-[32%] border border-gray-300 rounded-xl px-4 py-8 hover:translate-y-2 hover:shadow-lg transition-all hover:cursor-pointer ">
                    <VideoIcon className="w-12 h-12 text-blue-950  border border-blue-100 p-3 rounded-2xl bg-blue-100" />
                    <HelpCard className="w-[300px]" titre="gogoislife" text="Guides complets et tutoriels détaillés " />
                </div>

                <div className="w-[32%] border border-gray-300 rounded-xl px-4 py-8 hover:translate-y-2 hover:shadow-lg transition-all hover:cursor-pointer ">
                    <VideoIcon className="w-12 h-12 text-blue-950  border border-blue-100 p-3 rounded-2xl bg-blue-100" />
                    <HelpCard className="w-[300px]" titre="gogoislife" text="Guides complets et tutoriels détaillés " />
                </div>

                <div className="w-[32%] border border-gray-300 rounded-xl px-4 py-8 hover:translate-y-2 hover:shadow-lg transition-all hover:cursor-pointer ">
                    <VideoIcon className="w-12 h-12 text-blue-950  border border-blue-100 p-3 rounded-2xl bg-blue-100" />
                    <HelpCard className="w-[300px]" titre="gogoislife" text="Guides complets et tutoriels détaillés " />
                </div>
            </div>

            <div className=" flex flex-col border border-gray-200 rounded-2xl p-5">
                <div className="flex flex-row gap-4">
                    <Mail className="w-10 h-10 text-blue-950 border border-blue-200 p-2 rounded-xl bg-blue-200 " />
                    <div className="flex flex-col">
                        <h1 className=" text-blue-950 font-bold text-[20px]">Contactez-nous</h1>
                        <p className="text-gray-500  text-[15px]">Notre équipe vous répondra sous 24h</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-3">
                    <div className="flex flex-row gap-3 ">
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label htmlFor="nom">Nom</label>
                            <Input type="text"  name="nom" id="nom" className="w-full input"  />
                        </div>

                        <div className="w-1/2 flex flex-col space-y-3">
                            <label htmlFor="email">Email</label>
                            <Input type="email" name="email" id="email" className="w-full input" />
                        </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                        <label htmlFor="sujet">Sujet</label>
                        <Input type="text" name="sujet" id="sujet" className="w-full input" />
                    </div>

                    <div className="flex flex-col space-y-3">
                        <label htmlFor="message">Message</label>
                        <Input type="textarea" name="message" id="message" className="w-full textarea" />
                    </div>

                    <div className="flex flex-row gap-1 bg-blue-800 border border-blue-800 rounded-xl w-1/5 items-center justify-center ">
                        <SendIcon className="w-5 h-5 text-white mt-2 " />
                        <Button className="bg-blue-800 border border-blue-800 text-white">Envoyer le message</Button>
                    </div>
                </div>
            </div>
            

        </div>
    )
}


export default Help