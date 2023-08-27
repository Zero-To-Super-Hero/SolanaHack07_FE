import { SpinnerInfinity } from "spinners-react"
import { EventFilterSelect } from "./event-filter-select"
import { Search } from '@/components/search-bar';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { Collection, Network, Nft, NftMetadata, Transaction, hi } from '@/shared/types';
import { useToast } from '@/components/ui/use-toast';
import { readCollections, readAllNFTsFromMerkleTree, readMetaUri, readNFT } from '@/shared/shyft';
import ConnectWalletButton from '@/components/wallet/connect-wallet-button';
import { NftCollectionItem } from '@/components/nft-collection-item-demo';
import { Suspense, useEffect, useState } from "react";
import { Button } from "./ui/button";
export const EventList = () => {

    const { connected, publicKey } = useWallet()
    const [loading, setLoading] = useState(true)
    const [network, setNetwork] = useState<Network>("devnet")
    // const [transactions, setTransactions] = useState<Transaction[]>([])
    const [nfts, setNfts] = useState<Collection[]>([])

    const { toast } = useToast()

    useEffect(() => {
        if (publicKey && network) {
            setLoading(true)
            readCollections(publicKey.toBase58(), network)
                .then((response) => {
                    if (response.success) {
                        console.log(response.result.collections)
                        setNfts(response.result.collections)
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
        }
    }, [publicKey, network, toast])

    return (<>

        <div className='my-10'>
            {!connected || !publicKey ? (
                <div className="m-auto">
                    <ConnectWalletButton>Connect wallet</ConnectWalletButton>
                </div>
            ) : (
                <>
                    {loading ? (
                        <div className="m-auto">
                            <SpinnerInfinity size={200} enabled={true} />
                        </div>
                    ) : (
                        <>
                            {nfts.length === 0 ? (
                                <div className="m-auto">
                                    <p className="font-semibold text-primary text-xl">
                                        No Event
                                    </p>
                                    <Link href="/create-event">
                                        <Button>Create one</Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-12 items-center gap-5">
                                    {
                                        nfts.map((nftE, index) => (
                                            nftE.name == null ?
                                                <div key={index} className='lg:col-span-3 md:col-span-6 col-span-12'>
                                                    <Link href={`/event-detail/${nftE.address}`}>
                                                        <NftCollectionItem collection={nftE} />
                                                    </Link>
                                                </div>
                                                : ""
                                        ))
                                    }
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    </>
    )
}