import Link from "next/link";
import { DesktopMenu, MobileMenu } from "@/components/menu";
export default function Header() {
    return (
        //Desktop and tablet header
        <header className="sticky backdrop-blur-md z-50 border-b border-current p-2 top-0 max-h-20 w-ful">
            <div className="container flex h-14 flex-row justify-between items-center">
                <Link href="/"><p className="text-2xl font-extrabold tracking-tighter lg:text-5xl underline shadow-transparent drop-shadow-md">Bapcai&apos;s Ticket</p></Link>
                <nav className="desktop-menu">
                    <DesktopMenu />
                </nav>
                <nav className="mobile-menu">
                    <div>
                        <MobileMenu />
                    </div>
                </nav>
            </div>
        </header>
    )
}