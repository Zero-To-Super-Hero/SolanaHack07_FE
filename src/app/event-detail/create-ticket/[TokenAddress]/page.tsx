
"use client"

import { EventCardItem } from "@/components/event-card-item";
import { CreateEventForm } from "@/components/form/create-event-form";
import { CreateTicketForm } from "@/components/form/create-ticket-form";
import { useToast } from "@/components/ui/use-toast";
import { readNFT } from "@/shared/shyft";
import { Network, Nft } from "@/shared/types";

import ConnectWalletButton from "@/components/wallet/connect-wallet-button"
import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SpinnerInfinity } from "spinners-react";

export default function Page({ params }: { params: { TokenAddress: string } }) {

  // const { connected, publicKey } = useWallet()
  const { connected, publicKey } = useWallet()

  const [loading, setLoading] = useState(true)
  const [network, setNetwork] = useState<Network>("devnet")
  const [nft, setNFT] = useState<Nft>()
  const { toast } = useToast()

  useEffect(() => {
    setLoading(true)
    readNFT(params.TokenAddress, network)
      .then((response) => {
        if (response.success) {
          console.log(response.result)
          setNFT(response.result)
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
  }, [params.TokenAddress, network, toast])

  return (
    <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-5 h-full'>
        <div className='col-span-1 md:col-span-6'>
          <p className='font-extrabold text-4xl text-primary uppercase'>Create ticket </p>
          <p>for event address: {params.TokenAddress}</p>
          {/* <Link href="/manage-event"> <p className="underline-offset-1 text-primary">Already have event? and wanna add ticket?</p></Link> */}

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
          <EventCardItem nftEvent={nft!} />
                    
                  </>
                )}
              </>
            )}

        </div>
        <div className='col-span-1 md:col-span-6'>
          <p className="text-bold text-xl text-primary font-mono">Input your event information here!</p>
          <CreateTicketForm TokenAddress={params.TokenAddress} />
        </div>
      </div>

    </div>
  );
}
