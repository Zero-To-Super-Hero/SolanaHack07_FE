import { type } from "os"

export type hitype = {
    SHYFT_API_ENDPOINT: string
    SHYFT_API_KEY: string
    SHYFT_TREE: string
}

export const hi: hitype = {
    SHYFT_API_ENDPOINT: "https://api.shyft.to/sol/v1",
    SHYFT_API_KEY: "QedCXi-__1YxirlR",
    SHYFT_TREE: "Fn1pzcXiBdPUoM1a9KDyiDS7uU2Mburh1AyiAPRG9CQ1",
}

export const Networks = ["mainnet-beta", "devnet", "testnet"] as const
export type Network = "mainnet-beta" | "devnet" | "testnet"

// export type NftEvent = {
//     TokenAddress: string
//     Name: string
//     Description?: string
//     Date: Date | string
//     Image: string
//     Price: number
//     Location?: string
// }

//read
export type Nft = {
    name: string;
    symbol: string;
    royalty: number;
    image_uri: string;
    cached_image_uri: string;
    animation_url: string;
    cached_animation_url: string;
    metadata_uri: string;
    description: string;
    mint: string;
    owner: string;
    update_authority: string;
    creators: Creator[];
    collection: Collection;
    attributes: Attributes;
    attributes_array: AttributesArray[];
    files: File[];
    external_url: string;
    primary_sale_happened: boolean;
    is_mutable: boolean;
    token_standard: string;
    is_loaded_metadata: boolean;
    is_compressed: boolean;
    merkle_tree: string;
}

export type Attributes = {
    Location?: string;
    Time?: string;
    Price?: string;
}

export type AttributesArray = {
    trait_type: string;
    value: string;
}

export type Collection = {
}

export type Creator = {
    address: string;
    share: number;
    verified: boolean;
}


export type File = {
    uri: string;
    type: string;
}
//

export type BaseResponse<T> = {
    success: boolean
    message: string
    result: T
}
//
export type TokenBalanceRequestBody = {
    network: string
    wallet: string,
    token_address: string
}

// export type TokenBalance = {
//     address: string;
//     balance: number;
//     associated_account: string;
//     info: Info;
//     isFrozen: boolean;
// }

// export type Info = {
//     name: string;
//     symbol: string;
//     image: string;
// }

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

/////

export type Transaction = {
    timestamp:  Date;
    fee:        number;
    fee_payer:  FeePayer;
    signers:    FeePayer[];
    signatures: string[];
    protocol:   Protocol;
    type:       Type;
    status:     Status;
    actions:    Action[];
}

export type Action = {
    info:            Info;
    source_protocol: Protocol;
    type:            Type;
}

export type Info = {
    tree_authority:   TreeAuthority;
    merkle_tree:      MerkleTree;
    owner:            FeePayer;
    nft_address:      string;
    update_authority: FeePayer;
    payer?:           FeePayer;
    nft_metadata?:    NftMetadata;
}

export type MerkleTree = "Fn1pzcXiBdPUoM1a9KDyiDS7uU2Mburh1AyiAPRG9CQ1";

export type NftMetadata = {
    name:                 string;
    symbol:               string;
    uri:                  string;
    sellerFeeBasisPoints: number;
    primarySaleHappened:  boolean;
    isMutable:            boolean;
    editionNonce:         number;
    tokenStandard:        TokenStandard;
    collection:           null;
    uses:                 null;
    tokenProgramVersion:  TokenProgramVersion;
    creators:             Creator[];
}



export type FeePayer = "CtAzDwc4wTUApLdhjMYX4dWPbzLa9uA5JWLxvhuzZ6k4";

export type TokenProgramVersion = {
    original: Original;
}

export type Original = {
}

export type TokenStandard = {
    nonFungible: Original;
}

export type TreeAuthority = "BWgmRd2uAzapB2SpBsjKZGn2nyV1RkcVoQKA7evCh3y8";

export type Protocol = {
    address: Address;
    name:    Name;
}

export type Address = "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY";

export type Name = "BUBBLEGUM";

export type Type = "COMPRESSED_NFT_BURN" | "COMPRESSED_NFT_MINT";

export type Status = "Success";
