import { faLocationDot, faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import solanaSvg from "../../public/assets/solanaLogoMark.svg"

export const EventItemTest = ({ num }: { num: number }) => {
    return (
        <>
            <div className="w-full">
                <Card className="">
                    <CardHeader>
                        <CardTitle className=" text-primary font-semibold text-xl">demo</CardTitle>
                        <CardDescription className="truncate h-5" >
                            demo
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="w-full">
                        <AspectRatio ratio={1}>
                            <Image
                                src={`https://picsum.photos/400/400?random=${num}`}
                                alt="event-img"
                                fill
                                className="rounded-md object-cover"
                            />
                        </AspectRatio>
                    </CardContent>
                    <CardFooter className="w-full">
                        <div className="grid grid-cols-1 w-full gap-5 justify-between items-center">
                            <div className="grid grid-col-12 justify-between items-center grid-row-2">
                                <div className="flex items-center space-x-2">
                                    <span><FontAwesomeIcon width={16} height={16} icon={faLocationDot} /></span>
                                    <p className="">demo</p>
                                </div>
                                <div className="flex items-center justify-between space-x-2">
                                    <Image src={solanaSvg} height={16} width={16} alt="solanaSVG" />
                                    <p>demo price</p>
                                </div>
                            </div>
                           
                        </div>
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}