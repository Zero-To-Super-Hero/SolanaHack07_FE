"use client"
import { EventDetailCard } from "@/components/event-details-card";


export default function Page({ params }: { params: { TokenAddress: string } }) {
  return (
    <div className="container">
      <p className="text-primary text-center m-5">
        Token_Address: {params.TokenAddress}
      </p>
      <div className="grid grid-cols-12 items-center justify-between gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <EventDetailCard token={params.TokenAddress} />
        </div>
      </div>
    </div>


  )
}