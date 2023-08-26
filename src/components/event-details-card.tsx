import { faLocationDot, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import { readAllNFTs, readNFT } from "@/shared/shyft";
import { Network, Nft } from "@/shared/types";
import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import solanaSvg from "../../public/assets/solanaLogoMark.svg"


export const EventDetailCard = ({ token }: { token: string }) => {


    const { connected, publicKey } = useWallet()
    const [loading, setLoading] = useState(true)
    const [network, setNetwork] = useState<Network>("devnet")
    const [nft, setNFT] = useState<Nft>()
    const { toast } = useToast()

    useEffect(() => {

        setLoading(true)
        readNFT(token, network)
            .then((response) => {
                if (response.success) {
                    console.log(response.result)
                    setNFT(response.result)
                } else {
                    toast({
                        variant: "destructive",
                        title: "Error",
                        description: response.message ?? "Unknown error",
                    })
                }
            })
            .catch((error: any) => {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: error?.message ?? "Unknown error",
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }, [publicKey, network, toast, token])


    return (
        <div className="w-full">
            <Card className="">
                <CardHeader>
                    <CardTitle className=" text-primary font-semibold text-xl">{nft?.name}</CardTitle>
                    <CardDescription className="truncate h-5" >
                        {nft?.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AspectRatio ratio={1}>
                        <Image
                            src={nft?.image_uri ?? ""}
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
                                <p className="">{nft?.attributes.Location}</p>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <Image src={solanaSvg} height={16} width={16} alt="solanaSVG" />
                                <p>{nft?.attributes.Price}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 justify-between">
                            <span><FontAwesomeIcon icon={faCalendarCheck} size="sm" /></span>
                            <p className="text-muted-foreground text-sm">
                                {nft?.attributes.Time}
                            </p>
                        </div>
                        <div className="max-h-10 overflow-scroll">
                            {nft?.attributes_array.map((attribute, index) => (
                                attribute.trait_type == "Location" || "Time" || "Price" ? "" :
                                    <div key={index}>
                                        <p>{attribute.trait_type}: {attribute.value}</p>
                                    </div>
                            ))}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}