import { SpinnerInfinity } from "spinners-react"
import { EventFilterSelect } from "./event-filter-select"
import { Search } from '@/components/search-bar';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { Network, Nft, NftMetadata, Transaction, hi } from '@/shared/types';
import { useToast } from '@/components/ui/use-toast';
import { readAllNFTsFromMerkleTree, readMetaUri, readNFT } from '@/shared/shyft';
import ConnectWalletButton from '@/components/wallet/connect-wallet-button';
import { NftCollectionItem } from '@/components/nft-collection-item';
import { Suspense, useEffect, useState } from "react";
export const EventList = () => {

    const { connected, publicKey } = useWallet()
    const [loading, setLoading] = useState(true)
    const [network, setNetwork] = useState<Network>("devnet")
    // const [transactions, setTransactions] = useState<Transaction[]>([])
    const [nfts, setNfts] = useState<Nft[]>([])

    const { toast } = useToast()


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const readAllResponse = await readAllNFTsFromMerkleTree(hi.SHYFT_TREE, network);
            // Handle the response here
            if (!readAllResponse.success) {
                toast({
                    variant: "destructive",
                    title: "Upload error",
                    description: readAllResponse.message ?? "Unknown error",
                });
                setLoading(false);
                return;
            }
            const nftArray: Nft[] = [];
            for (const p of readAllResponse.result) {
                if (p.type !== "COMPRESSED_NFT_BURN" && p.actions[0].info.nft_metadata?.uri != null) {
                    const nft = await readMetaUri(p.actions[0].info.nft_metadata.uri);
                    if (nft != null) {
                        nftArray.push(nft);
                    }
                }
            }
            setNfts(nftArray);
            setLoading(false);
        };
        fetchData();
    }, [publicKey, network, toast]);

    return (<>

        <div className='grid grid-cols-1 lg:grid-cols-12 justify-between items-center gap-5'>
            <div className='col-span-1 lg:col-span-4'>
                <EventFilterSelect />
            </div>
            <div className='lg:col-span-4'></div>
            <div className='col-span-1 lg:col-span-4'>
                <Search />
            </div>
        </div>
        <div className='text-center'>
            <p className='text-4xl text-primary font-extrabold m-10 uppercase'>List of event</p>
        </div>
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
                            {(
                                <div className="">
                                    <div className='grid grid-cols-12 md:grid-cols-12 items-center gap-5'>
                                        {
                                            nfts.map((nft, index) => (
                                                <div key={index} className='lg:col-span-3 md:col-span-6 col-span-12 w-full'>
                                                    <Suspense fallback={<SpinnerInfinity size={200} enabled={true} />}>
                                                        <Link href={`/event-detail/${nft.merkle_tree}`}>
                                                            <NftCollectionItem nft={nft} />
                                                        </Link>
                                                    </Suspense>
                                                </div>
                                            ))
                                        }
                                    </div>
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