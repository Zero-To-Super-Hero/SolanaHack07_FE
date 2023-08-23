import { type } from "os"

interface NftEvent {
    CollectionId: string
    Name: string
    Description?: string
    Date: Date | string
    Image: string
    Price: number
    Location?: string
}

export type { NftEvent }