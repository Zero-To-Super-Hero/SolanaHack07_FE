import { type } from "os"

export type hitype = {
    SHYFT_API_ENDPOINT: string
    SHYFT_API_KEY: string
    SHYFT_TREE: string
}

export const hi: hitype = {
    SHYFT_API_ENDPOINT: "https://api.shyft.to/sol/v1",
    SHYFT_API_KEY: "QedCXi-__1YxirlR",
    SHYFT_TREE: "BGcCvCUkM4xJG9wm5bLuNnfEHG3qwr3i52n7F2MV8dPp",
}

export const Networks = ["mainnet-beta", "devnet", "testnet"] as const
export type Network = "mainnet-beta" | "devnet" | "testnet"

export type NftEvent = {
    TokenAddress: string
    Name: string
    Description?: string
    Date: Date | string
    Image: string
    Price: number
    Location?: string
}

export const Events: NftEvent[] = [
    {
        TokenAddress: "1",
        Name: "Happy Bee",
        Description: "FPT Polytechnic concert in HCM city 2023",
        Image: "https://picsum.photos/600/600?random=1",
        Date: new Date(2023, 8, 10, 6, 30, 0),
        Location: "QTSC",
        Price: 1,
    },
    {
        TokenAddress: "2",
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

//mint nft
export type MintNFTRequestBody = {
    network: Network
    creator_wallet: string
    metadata_uri: string
    merkle_tree: string
    is_delegate_authority?: boolean
    collection_address?: string
    max_supply?: number
    primary_sale_happend?: boolean
    is_mutable?: boolean
    receiver?: string
    fee_payer?: string
}

export type MintNFTResult = {
    encoded_transaction: string
    mint: string
    signers: Array<string>
}

//upload
export type UploadResult = {
    cid: string
    uri: string
}

export type UploadMetadataRequestBody = {
    name: string
    symbol: string
    description: string
    image: string
    attributes: Array<{
        trait_type: string
        value: any
    }>
    royalty: number
    creator: string
    share: number
    external_url: string
    files: Array<{
        uri: string
        type: string
    }>
}