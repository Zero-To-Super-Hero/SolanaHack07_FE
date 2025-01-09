"use client"
import { CreateEventForm } from "@/components/form/create-event-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <div className='items-center gap-5 grid grid-cols-1 md:grid-cols-12 h-full'>
        <div className='col-span-1 md:col-span-6'>
          <p className='font-extrabold text-4xl text-primary uppercase'>Create Event</p>
          <p>Here you can create your mainly NFT for NFTs collection</p>
          <Link href="/manage-event"> <p className="text-primary underline-offset-1">Already have event? and wanna add ticket?</p></Link>
        </div>
        <div className='col-span-1 md:col-span-6'>
          <p className="font-mono text-bold text-primary text-xl">Input your event information here!</p>
          <CreateEventForm />
        </div>
      </div>

    </div>
  );
}

//Tạo manage event và add ticket