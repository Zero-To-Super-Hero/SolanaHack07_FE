import { type } from "os"


export type Network = "mainnet-beta" | "devnet" | "testnet"

export type NftEvent = {
    TokkenAddress: string
    Name: string
    Description?: string
    Date: Date | string
    Image: string
    Price: number
    Location?: string
}

export const Events: NftEvent[] = [
    {
        TokkenAddress: "1",
        Name: "Happy Bee",
        Description: "FPT Polytechnic concert in HCM city 2023",
        Image: "https://picsum.photos/600/600?random=1",
        Date: new Date(2023, 8, 10, 6, 30, 0),
        Location: "QTSC",
        Price: 1,
    },
    {
        TokkenAddress: "2",
        Name: "Happy Lion",
        Image: "https://picsum.photos/600/600?random=2",
        Date: new Date(2023, 8, 10, 6, 10, 0),
        Location: "Some Where",
        Price: 2.2,
    },
]

export type BaseResponse<T> = {
    success: boolean
    message: string
    result: T
}

export type TokenBalanceRequestBody = {
    network: string
    wallet: string,
    token_address: string
}

export type TokenBalance = {
    address: string;
    balance: number;
    associated_account: string;
    info: Info;
    isFrozen: boolean;
}

export type Info = {
    name: string;
    symbol: string;
    image: string;
}
