
import fetcher from "./fetcher";
import { BaseResponse, MintNFTRequestBody, MintNFTResult, TokenBalance, TokenBalanceRequestBody, UploadMetadataRequestBody, UploadResult } from "./types";
require('dotenv').config()

export function TokenBalance(body: TokenBalanceRequestBody) {
    return fetcher<BaseResponse<TokenBalance>>(
        `${process.env.SHYFT_API_ENDPOINT}/wallet/token_balance`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "x-api-key": process.env.SHYFT_API_KEY!,
            },
            body: JSON.stringify(body),
        }
    );
}

export function mintNFT(body: MintNFTRequestBody) {
    return fetcher<BaseResponse<MintNFTResult>>(
        `${process.env.SHYFT_API_ENDPOINT!}/nft/compressed/mint`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_SHYFT_API_KEY!,
        },
        body: JSON.stringify(body),
    })
}

export function upload(file: File) {
    const formdata = new FormData();
    formdata.append("file", file, file.name);
    return fetcher<BaseResponse<UploadResult>>(
        `${process.env.SHYFT_API_ENDPOINT!}/storage/upload`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": process.env.SHYFT_API_KEY!,
            },
            body: formdata,
        }
    );
}

export function uploadMetadata(metadata: UploadMetadataRequestBody) {
    return fetcher<BaseResponse<UploadResult>>(
        `${process.env.SHYFT_API_ENDPOINT!}/metadata/create`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": process.env.SHYFT_API_KEY!,
            },
            body: JSON.stringify(metadata),
        }
    );
}