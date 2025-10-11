import { UserIcon, Navigation2Icon } from "lucide-react";

function NavBar2() {
    return (
        <>
            <div className="flex flex-row justify-between items-center px-6 py-4 bg-white">
                {/* Left: Title + Icon */}
                <div className="flex flex-row items-center gap-2">
                    <Navigation2Icon className="text-blue-950 w-5 h-5" />
                    <h1 className="text-blue-950 text-[18px] font-bold">
                        Tableau de bord
                    </h1>
                </div>

                {/* Right: User Icon */}
                <div>
                    <UserIcon className="w-12 h-12 p-2 text-blue-950 border border-gray-200 bg-gray-100 rounded-full hover:text-white hover:bg-amber-500 hover:cursor-pointer " />
                </div>
            </div>

            {/* Separator */}
            <hr className="border-gray-200" />
        </>
    );
}

export default NavBar2;
