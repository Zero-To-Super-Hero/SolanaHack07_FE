import * as React from "react"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { NftEvent } from "@/app/shared/types"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Separator } from "@/components/ui/separator"
import solanaSvg from "../../public/assets/solanaLogoMark.svg"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import Link from "next/link"

const solanaFormat = (amount: number) => {
    // define a function that takes an amount in lamports and returns a formatted string in SOL
    const sol = amount // convert lamports to SOL
    return sol.toLocaleString("en-US", {
        maximumFractionDigits: 9,
        minimumFractionDigits: 2,
    });
};

export function EventCardItem({ nftEvent }: { nftEvent: NftEvent }) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className=" text-primary font-semibold text-xl">{nftEvent.Name}</CardTitle>
                <CardDescription className="truncate h-5" >
                    {nftEvent.Description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <AspectRatio ratio={1}>
                    <Image
                        src={nftEvent.Image}
                        alt="event-img"
                        fill
                        className="rounded-md object-cover"
                    />
                </AspectRatio>
            </CardContent>
            <CardFooter>
                <div className="grid grid-cols-1 gap-5 justify-between items-center">
                    <div className="flex justify-between space-x-2 w-full">
                        <div className="flex items-center space-x-2">
                            <span><FontAwesomeIcon icon={faLocationDot} /></span>
                            <p className="">{nftEvent.Location}</p>
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Image src={solanaSvg} height={16} width={16} alt="solanaSVG" />
                            <p>{solanaFormat(nftEvent.Price)}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 justify-between">
                        <span><FontAwesomeIcon icon={faCalendarCheck} size="sm" /></span>
                        <p className="text-muted-foreground text-sm">
                            {nftEvent.Date.toString()}
                        </p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
