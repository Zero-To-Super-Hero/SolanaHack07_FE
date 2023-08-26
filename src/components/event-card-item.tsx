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
import { Nft, } from "@/shared/types"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Separator } from "@/components/ui/separator"
import solanaSvg from "../../public/assets/solanaLogoMark.svg"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import Link from "next/link"

// const solanaFormat = (amount: number) => {
//     // define a function that takes an amount in lamports and returns a formatted string in SOL
//     const sol = amount // convert lamports to SOL
//     return sol.toLocaleString("en-US", {
//         maximumFractionDigits: 9,
//         minimumFractionDigits: 2,
//     });
// };

export function EventCardItem({ nftEvent }: { nftEvent: Nft }) {
    // const datetim = nftEvent.attributes.time ? new Date(nftEvent.attributes.time) : nftEvent.attributes.time;
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className=" text-primary font-semibold text-xl">{nftEvent.name}</CardTitle>
                <CardDescription className="truncate h-5" >
                    {nftEvent.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <AspectRatio ratio={1}>
                    <Image
                        src={nftEvent.image_uri}
                        alt="event-img"
                        fill
                        className="rounded-md object-cover"
                    />
                </AspectRatio>
            </CardContent>
            <CardFooter>
                <div className="grid grid-cols-1 w-full gap-5 justify-between items-center">
                    <div className="flex justify-between space-x-2 w-full">
                        <div className="flex items-center space-x-2">
                            <span><FontAwesomeIcon icon={faLocationDot} /></span>
                            <p className="">{nftEvent.attributes.Location}</p>
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Image src={solanaSvg} height={16} width={16} alt="solanaSVG" />
                            <p>{nftEvent.attributes.Price}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 justify-between">
                        <span><FontAwesomeIcon icon={faCalendarCheck} size="sm" /></span>
                        <p className="text-muted-foreground text-sm">
                            {nftEvent.attributes.Time}
                        </p>
                    </div>
                    <div className="max-h-10 overflow-scroll">
                        {nftEvent.attributes_array.map((attribute, index) => (
                            attribute.trait_type == "Location" || "Time" || "Price" ? "" :
                                <div key={index}>
                                    <p>{attribute.trait_type}: {attribute.value}</p>
                                </div>
                        ))}
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
