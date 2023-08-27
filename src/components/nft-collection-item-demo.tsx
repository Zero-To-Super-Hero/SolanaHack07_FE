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
import { EventItemTest } from "@/components/event-item-test";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Collection, Info, Network, Nft } from "@/shared/types"


export const NftCollectionItem = ({ collection }: { collection: Collection }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className=" text-primary font-semibold text-xl">{collection.name}</CardTitle>
                <CardDescription className="truncate h-5" >
                    <p>
                        {collection.address}
                    </p>
                </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <EventItemTest num={1} /> */}
               
            </CardContent>
            <CardFooter>
                <div>
                    <p>
                        {collection.family}
                    </p>
                    <p>
                        {collection.nft_count}
                    </p>

                </div>
            </CardFooter>
        </Card>
    )
}
