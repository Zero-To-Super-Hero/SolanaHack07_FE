import { CreateEventForm } from "@/components/form/create-event-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-5 h-full'>
        <div className='col-span-1 md:col-span-6'>
          <p className='font-extrabold text-4xl text-primary uppercase'>Create Event</p>
          <p>Here you can create your mainly NFT for NFTs collection</p>
          <Link href="/manage-event"> <p className="underline-offset-1 text-primary">Already have event? and wanna add ticket?</p></Link>
        </div>
        <div className='col-span-1 md:col-span-6'>
          <p className="text-bold text-xl text-primary font-mono">Input your event information here!</p>
          <CreateEventForm />
        </div>
      </div>

    </div>
  );
}

//Tạo manage event và add ticket