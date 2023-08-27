"use client"
import { EventDetailCard } from "@/components/event-details-card";
import { EventItemTest } from "@/components/event-item-test";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Page({ params }: { params: { TokenAddress: string } }) {
  return (
    <div className="container">
      <p className="text-primary text-center m-5">
        {/* Token_Address: {params.TokenAddress} */}
      </p>
      <div className="grid grid-cols-12 items-start justify-between gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="grid grid-cols-12 items-center gap-5">
            <div className="col-span-12">
              <EventDetailCard token={params.TokenAddress} />
            </div>
            <div className="col-span-12">
              <div className="flex flex-row justify-between items-center gap-5">
                <Link href={`/event-detail/create-ticket/${params.TokenAddress}`} className="hover:bg-primary outline-primary h-full"><p className="font-semibold text-lg">🎫 Create ticket</p></Link>
                <Button variant={"outline"} className="hover:bg-red-500 outline-red-500 h-full"><p className="font-semibold text-lg">🔥Delete event</p></Button>

              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="col-span-12 grid grid-cols-12 grid-rows-2 items-center gap-5">
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