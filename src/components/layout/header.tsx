import Link from "next/link";
import ConnectWalletButton from "@/components/wallet/connect-wallet-button"
import { DesktopMenu, MobileMenu } from "@/components/menu/menu";
export default function Header() {
    return (
        //Desktop and tablet header
        <header className="top-0 z-50 sticky border-current backdrop-blur-md p-2 border-b w-ful">
            <div className="flex flex-row justify-between items-center container">
                <Link href="/"><p className="drop-shadow-md shadow-transparent font-extrabold text-2xl text-primary lg:text-5xl underline tracking-tighter">Bapcai&apos;s Ticket</p></Link>


                {/* <nav className="desktop-menu">
                        <MobileMenu />
                    </nav> */}
                {/* <nav className="mobile-menu"> */}
                <div className="flex flex-row flex-nowrap justify-between items-center space-x-2">
                    {/* <Link href={"/create-event"} className="lg:inline-block hidden">
                        <p className="border-primary hover:bg-primary p-2 border rounded font-extrabold text-primary hover:text-black hover:outline-0 outline-2">Create event now!</p>
                    </Link> */}
                    <ConnectWalletButton />
                    <nav>
                        <MobileMenu />
                    </nav>
                </div>
            </div>
        </header>
    )
}