
import fetcher from "./fetcher";
import {
    BaseResponse,
    Collection,
    MintNFTRequestBody,
    MintNFTResult,
    Network,
    Nft,
    NftMetadata,
    Transaction,
    UploadMetadataRequestBody,
    UploadResult
} from "./types";
import { hi } from "./types";

// export function TokenBalance(body: TokenBalanceRequestBody) {
//     return fetcher<BaseResponse<TokenBalance>>(
//         `${hi.SHYFT_API_ENDPOINT}/wallet/token_balance`,
//         {
//             method: "GET",
//             headers: {
//                 "content-type": "application/json",
//                 "x-api-key": hi.SHYFT_API_KEY,
//                 // Accept: "*/*",
//                 // "Access-Control-Allow-Origin": "*"
//             },
//             body: JSON.stringify(body),
//         }
//     );
// }

export const mintNFT = (body: MintNFTRequestBody) => {
    return fetcher<BaseResponse<MintNFTResult>>(
        `${hi.SHYFT_API_ENDPOINT}/nft/compressed/mint`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-api-key": hi.SHYFT_API_KEY,
        },
        body: JSON.stringify(body),
    })
}


export const mintNFTfromMeta = (body: MintNFTRequestBody) => {
    return fetcher<BaseResponse<MintNFTResult>>(
        `${hi.SHYFT_API_ENDPOINT}/nft/create_from_metadata`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-api-key": hi.SHYFT_API_KEY,
        },
        body: JSON.stringify(body),
    })
}

export function upload(file: File) {
    const formdata = new FormData();
    formdata.append("file", file, file.name);
    return fetcher<BaseResponse<UploadResult>>(
        `${hi.SHYFT_API_ENDPOINT}/storage/upload`,
        {
            method: "POST",
            headers: {
                // "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
            body: formdata,
        }
    );
}

export function uploadMetadata(metadata: UploadMetadataRequestBody) {
    return fetcher<BaseResponse<UploadResult>>(
        `${hi.SHYFT_API_ENDPOINT}/metadata/create`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
            body: JSON.stringify(metadata),
        }
    );
}

export function readAllCompressedNFTs(wallet: string, network: Network) {
    return fetcher<BaseResponse<{ nfts: Nft[] }>>(
        `${hi.SHYFT_API_ENDPOINT}/nft/compressed/read_all?network=${network}&wallet_address=${wallet}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
        }
    )
}

export function readAllNFTs(wallet: string, network: Network) {
    return fetcher<BaseResponse<Nft[]>>(
        `${hi.SHYFT_API_ENDPOINT}/nft/read_all?network=${network}&address=${wallet}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
        }
    )
}

export function readCollections(wallet: string, network: Network) {
    return fetcher<BaseResponse<{ collections: Collection[] }>>(
        `${hi.SHYFT_API_ENDPOINT}/wallet/collections?network=${network}&wallet_address=${wallet}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
        }
    )
}

export function readCompressNFT(nftAddress: string, network: Network) {
    return fetcher<BaseResponse<Nft>>(
        `${hi.SHYFT_API_ENDPOINT}/nft/compressed/read?network=${network}&nft_address=${nftAddress}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
        }
    )
}

export function readNFT(nftAddress: string, network: Network) {
    return fetcher<BaseResponse<Nft>>(
        `${hi.SHYFT_API_ENDPOINT}/nft/read?network=${network}&nft_address=${nftAddress}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
        }
    )
}

export function readAllNFTsFromMerkleTree(account: string, network: Network) {
    return fetcher<BaseResponse<Transaction[]>>(
        `${hi.SHYFT_API_ENDPOINT}/transaction/history?network=${network}&account=${account}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
        }
    )
}

export function portfolio(account: string, network: Network) {
    return fetcher<BaseResponse<Transaction[]>>(
        `${hi.SHYFT_API_ENDPOINT}/?network=${network}&account=${account}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": hi.SHYFT_API_KEY,
            },
        }
    )
}

export function readMetaUri(uri: string) {
    return fetcher<Nft>(
        `${uri}`,
        {
            method: "GET",
            // headers: {
            //     "content-type": "application/json",
            //     "x-api-key": hi.SHYFT_API_KEY,
            // },
        }
    )
}