import PostFooter from "../Footer/PostFooter"
import { QrCode, Mail, Phone, Map, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

function Footer() {
    return ( 
        <div className="mx-[2%] my-[2%]">
            <div className="flex flex-row justify-between ">
                <PostFooter titre="Produit" Icon={QrCode} soustitres={["Produit", "Produit", "Produit", "Produit", "Produit"]} />
                <PostFooter titre="Produit" Icon={QrCode} soustitres={["Produit", "Produit", "Produit", "Produit", "Produit"]} />
                <PostFooter titre="Produit" Icon={QrCode} soustitres={["Produit", "Produit", "Produit", "Produit", "Produit"]} />
                <PostFooter titre="Produit" Icon={QrCode} soustitres={["Produit", "Produit", "Produit", "Produit", "Produit"]} />
            </div>

            <div className="flex flex-col space-y-8">
                <div className="flex flex-row gap-3">
                    <div className="flex flex-row">
                        <h1 className="text-white text-[20px] font-bold border border-blue-900 bg-blue-900 rounded-2xl px-4 py-3  mt-[10px] w-[50px] h-[50px] ">Q</h1>
                    </div>

                    <div>
                        <h1 className="text-blue-950 text-[25px] font-bold ">QR Africa</h1>
                        <p className="text-gray-500  text-[16px]">Noté 5/5</p>
                    </div>
                </div>

                <div className="mt-[-20px] ">
                    <p className="text-gray-500  text-[16px]">La plateforme de référence pour créer des codes QR en Afrique de l'Ouest. Rejoignez plus de 10,000 utilisateurs qui nous font confiance.</p>
                </div>

                <div className="flex flex-col space-y-3">
                    <h1 className="text-blue-950 text-[20px] font-bold ">Contact</h1>
                    <div className="flex flex-col space-y-2">
                        <div className=" flex flex-row gap-2 ">
                            <Mail className="w-5 h-5 text-gray-500 hover:text-blue-950 hover:cursor-pointer"/>
                            <p className="text-gray-500  text-[16px] hover:text-blue-950 hover:cursor-pointer">contact@qrafrica.com</p>
                        </div>
                        <div className=" flex flex-row gap-2 hover:text-blue-950 hover:cursor-pointer">
                            <Phone className="w-5 h-5 text-gray-500 hover:text-blue-950 hover:cursor-pointer"/>
                            <p className="text-gray-500  text-[16px] hover:text-blue-950 hover:cursor-pointer">+229 97 XX XX XX</p>
                        </div>
                        <div className=" flex flex-row gap-2">
                            <Map className="w-5 h-5 text-gray-500"/>
                            <p className="text-gray-500  text-[16px]">Cotonou, Bénin, Afrique de l'Ouest</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-3">
                    <h1 className="text-blue-950 text-[18px] font-bold ">Suivez-nous</h1>
                    <div className="flex flex-row gap-10">
                        <Facebook className="w-10 h-10 border border-gray-200 bg-gray-200 rounded-2xl p-2 text-gray-500 hover:text-blue-950 hover:cursor-pointer"/>
                        <Twitter className="w-10 h-10 border border-gray-200 bg-gray-200 rounded-2xl p-2 text-gray-500 hover:text-blue-950 hover:cursor-pointer"/>
                        <Instagram className="w-10 h-10 border border-gray-200 bg-gray-200 rounded-2xl p-2 text-gray-500 hover:text-blue-950 hover:cursor-pointer"/>
                        <Linkedin className="w-10 h-10 border border-gray-200 bg-gray-200 rounded-2xl p-2 text-gray-500 hover:text-blue-950 hover:cursor-pointer"/>
                    </div>
                </div>

                <div>
                </div>
            </div>
        </div>
    )
}

export default Footer