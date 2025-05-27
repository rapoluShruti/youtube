import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
// Adjusted the path to match the project structure

export const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
            <div className="flex items-center gap-4 w-full">
                {/*Menu and Logo*/}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />
                    <Link href="/">
                        <div className="p-4 flex items-center gap-1">
                            <Image src="logo.svg" alt="logo" width={32} height={32} />
                            <p className="font-semibold tracking-tight text-xl">YouTube</p>
                        </div> </Link>


                </div>
                {/* searchbar*/}
                <div className="flex-1 flex justify-center max-w-[720px] mx-auto">


                </div>
            </div>
        </nav >
    );
};
