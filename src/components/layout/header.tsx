import Link from "next/link";
import ConnectWalletButton from "@/components/wallet/connect-wallet-button"
import { DesktopMenu, MobileMenu } from "@/components/menu/menu";
export default function Header() {
    return (
        //Desktop and tablet header
        <header className="sticky backdrop-blur-md z-50 border-b border-current p-2 top-0 w-ful">
            <div className="container flex flex-row justify-between items-center">
                <Link href="/"><p className="text-2xl font-extrabold tracking-tighter lg:text-5xl text-primary underline shadow-transparent drop-shadow-md">Bapcai&apos;s Ticket</p></Link>


                {/* <nav className="desktop-menu">
                        <MobileMenu />
                    </nav> */}
                {/* <nav className="mobile-menu"> */}
                <div className="flex flex-row flex-nowrap space-x-2 justify-between items-center">
                    <Link href={"/create-event"} className="hidden lg:inline-block">
                        <p className="outline-2 border-primary font-extrabold border p-2 rounded text-primary hover:bg-primary hover:outline-0 hover:text-black">Create event now!</p>
                    </Link>
                    <ConnectWalletButton />
                    <nav>
                        <MobileMenu />
                    </nav>
                </div>
            </div>
        </header>
    )
}