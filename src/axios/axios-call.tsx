import axios from "axios"
import { shyftUrl, shyftApi } from "@/shyft/shyft"
const GetTokenBalance = (params: { network: string, wallet: string, token: string }) => {
    axios({
        method: 'get',
        url: `${shyftUrl}/wallet/token_balance?network=${params.network}&wallet=${params.wallet}&token=${params.token}`,

    })
        .then(function (response) {
            return response.data
        });
}