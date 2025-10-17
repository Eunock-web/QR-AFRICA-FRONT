import { QrCode } from "lucide-react";
import Link from "./Link";
import Button from "../utils/Button";

function NavBar() {
  return (
    <div className="">
      <nav className="flex items-center justify-between mx-[4%] py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <QrCode className="w-8 h-8 text-white bg-blue-800 p-1 border rounded-xl" />
          <h1 className="text-[20px] font-bold text-blue-950">QR Africa</h1>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <Link href="#" className=" text-gray-400 text-[17px] hover:text-amber-500 ">Accueil</Link>
          <Link href="#" className=" text-gray-400 text-[17px] hover:text-amber-500">Créer un QR </Link>
          <Link href="#" className=" text-gray-400 text-[17px] hover:text-amber-500">Tableau de bord</Link>
          <Link href="#" className=" text-gray-400 text-[17px] hover:text-amber-500">Tarifs</Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button className="bg-white border-0 rounded-xl text-blue-950 hover:bg-amber-400">
            Se connecter
          </Button>
          <Button className="rounded-xl text-white bg-amber-400">Commencer</Button>
        </div>
        
      </nav>
        <hr className=" border-gray-300 "/>
    </div>
  );
}

export default NavBar;
