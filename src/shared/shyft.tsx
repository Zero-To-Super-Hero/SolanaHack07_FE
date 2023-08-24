
import fetcher from "./fetcher";
import { BaseResponse, TokenBalance, TokenBalanceRequestBody } from "./types";
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