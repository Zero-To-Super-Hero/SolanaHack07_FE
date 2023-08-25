import React, { useEffect, useState } from "react"
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
import { Info, Network, Nft } from "@/shared/types"


export const NftCollectionItem = ({ nft }: { nft: Nft }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className=" text-primary font-semibold text-xl">{nft.name}</CardTitle>
                <CardDescription className="truncate h-5" >
                    {nft.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {nft.image_uri != null ? "" :

                    <AspectRatio ratio={1}>
                        <Image
                            src={nft.image}
                            alt="event-img"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                }
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}
