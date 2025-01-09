"use client"
import { EventDetailCard } from "@/components/event-details-card";
import { EventItemTest } from "@/components/event-item-test";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


export default function Page({ params }: { params: Promise<{ TokenAddress: string }> }) {
  const TokenAddress = React.use(params).TokenAddress
  return (
    <div className="container">
      <p className="m-5 text-center text-primary">
        {/* Token_Address: {TokenAddress} */}
      </p>
      <div className="justify-between items-start gap-5 grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="items-center gap-5 grid grid-cols-12">
            <div className="col-span-12">
              <EventDetailCard token={TokenAddress} />
            </div>
            <div className="col-span-12">
              <div className="flex flex-row justify-between items-center gap-5">
                <Link href={`/event-detail/create-ticket/${TokenAddress}`} className="hover:bg-primary h-full outline-primary"><p className="font-semibold text-lg">🎫 Create ticket</p></Link>
                <Button variant={"outline"} className="hover:bg-red-500 h-full outline-red-500"><p className="font-semibold text-lg">🔥Delete event</p></Button>

              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="items-center gap-5 grid grid-cols-12 grid-rows-2 col-span-12">
            <div className="col-span-6 md:col-span-4">
              <EventItemTest num={1} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <EventItemTest num={2} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <EventItemTest num={3} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}