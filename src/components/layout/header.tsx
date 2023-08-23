import Link from "next/link";
import ConnectWalletButton from "@/components/wallet/connect-wallet-button"
import { DesktopMenu, MobileMenu } from "@/components/menu/menu";
export default function Header() {
    return (
        //Desktop and tablet header
        <header className="sticky backdrop-blur-md z-50 border-b border-current p-2 top-0 w-ful">
            <div className="container flex flex-row justify-between items-center">
                <Link href="/"><p className="text-2xl font-extrabold tracking-tighter lg:text-5xl text-primary underline shadow-transparent drop-shadow-md">Bapcai&apos;s Ticket</p></Link>

                <nav className="desktop-menu">
                    <DesktopMenu />
                </nav>
                <ConnectWalletButton />
                <nav className="mobile-menu">
                    <div>
                        <MobileMenu />
                    </div>
                </nav>
            </div>
        </header>
    )
}