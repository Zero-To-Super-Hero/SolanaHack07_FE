import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCopyright } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ConnectWalletButton from "@/components/wallet/connect-wallet-button"

import { ThemeButton } from "@/components/theme/theme-button";

const DesktopMenu = () => {
    return (
        <div className="grid grid-flow-row grid-cols-4 gap-4 items-center justify-items-center">
            <div className="col-span-1">

            </div>
            <div className="col-span-1">

            </div>
            <div className="col-span-1">
                <Link href={"/create-event"}>
                    <Button variant={"default"} className="w-full"><p className="text-bold text-base">Create event now!</p></Button>
                </Link>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center items-center space-x-4">
                    <ConnectWalletButton />
                    <ThemeButton />
                </div>
            </div>
        </div>
    )
}

const MobileMenu = () => {
    //Time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "🌄Good morning";
    } else if (currentHour < 18) {
        greeting = "🌇Good afternoon";
    } else {
        greeting = "🌃Good evening";
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"default"} size={"icon"}>
                    <FontAwesomeIcon className="w-[1.2rem] h-[1.2rem]" icon={faBars} />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-11/12 md:w-[540px]">
                <SheetHeader className="text-left">
                    <SheetTitle>Jay Andy</SheetTitle>
                    <SheetDescription >
                        <div className="grid grid-flow-row grid-cols-12">
                            <div className="col-span-9 text-foreground font-normal font-serif text-justify text-base">
                                {greeting}. 👋

                            </div>
                            <Separator orientation="vertical" className="ms-4" />
                            <div className="col-span-2 flex justify-center">
                                <ThemeButton />
                            </div>
                        </div>
                        <Separator className="my-4" />
                    </SheetDescription>
                </SheetHeader>
                <div className="w-full">
                    <div id="Link-section-1" className="flex flex-col space-y-2">
                        <Link href={"/About"}>
                            <p className="text-base font-semibold text-foreground">About ~ <em className="text-muted-foreground text-xs font-serif">Some information about me</em></p>
                        </Link>
                        <Link href={"/Portfolio"}>
                            <p className="text-base font-semibold text-foreground">Portfolio ~ <em className="text-muted-foreground text-xs font-serif">Jay Andy</em></p>
                        </Link>
                        <Link href={"/Blog"}>
                            <p className="text-base font-semibold text-foreground">Blogs ~ <em className="text-muted-foreground text-xs whitespace-nowrap font-serif">I was write some thing, wanna read?</em></p>
                        </Link>
                    </div>
                    <Separator className="my-2 w-9/12" />
                    {/* <ContactDropDownMenu /> */}
                    <Separator className="my-4" />
                    <div className="fixed bottom-5 flex flex-row space-x-2 items-center">
                        <Link href={"https://twitter.com/DatTranM4"} className="text-muted-foreground whitespace-nowrap" target="_blank">
                            Dat Tran - <FontAwesomeIcon className="w-[16px] h-[16px] text-foreground" icon={faCopyright} /> 2023</Link>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <p className="text-base text-foreground font-normal font-serif text-left">
                            💕 <em className="italic">I hope you are happy today</em> 😊.
                        </p>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export { DesktopMenu, MobileMenu }