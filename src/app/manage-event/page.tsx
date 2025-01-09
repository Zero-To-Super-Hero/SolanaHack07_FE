"use client"
import { EventCardItem } from "@/components/event-card-item"
import { useToast } from "@/components/ui/use-toast"
import { readAllNFTs } from "@/shared/shyft"
import { Network, Nft } from "@/shared/types"
import { useWallet } from "@solana/wallet-adapter-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Search } from '@/components/search-bar';
import { EventFilterSelect } from '@/components/event-filter-select';
import ConnectWalletButton from "@/components/wallet/connect-wallet-button"
import { Button } from "@/components/ui/button"
import { SpinnerInfinity } from "spinners-react"

export default function Page() {

  const { connected, publicKey } = useWallet()
  const [loading, setLoading] = useState(true)
  const [network, setNetwork] = useState<Network>("devnet")
  const [nfts, setNFTs] = useState<Nft[]>([])
  const { toast } = useToast()

  useEffect(() => {
    if (publicKey && network) {
      setLoading(true)
      readAllNFTs(publicKey.toBase58(), network)
        .then((response) => {
          if (response.success) {
            console.log(response.result)
            setNFTs(response.result)
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
  }, [publicKey, network])

  return (
    <div className="container">
      <div className='items-center gap-5 grid grid-cols-12 h-full'>
        <div id='event-list-section' className='col-span-12 my-10'>
          <div className='justify-between items-center gap-5 grid grid-cols-12'>
            <div className='col-span-12 lg:col-span-4'>
              <EventFilterSelect />
            </div>
            <div className='lg:col-span-4'></div>
            <div className='col-span-12 lg:col-span-4'>
              <Search />
            </div>
          </div>
          <div className='text-center'>
            <p className='m-10 font-extrabold text-4xl text-primary uppercase'>List of event</p>
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
                      <div className="items-center gap-5 grid grid-cols-12">
                        {
                          nfts.map((nftE, index) => (
                            <div key={index} className='col-span-12 md:col-span-6 lg:col-span-3'>
                              <div >
                                <EventCardItem nftEvent={nftE} />

                              </div>

                            </div>
                          ))
                        }
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}