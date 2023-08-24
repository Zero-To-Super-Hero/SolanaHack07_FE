import { CreateEventForm } from "@/components/form/create-event-form";

export default function Page() {
  return (
    <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-5 h-full'>
        <div className='col-span-1 md:col-span-6'>
          <p className='font-extrabold text-4xl text-primary uppercase'>Create Event</p>

        </div>
        <div className='col-span-1 md:col-span-6'>
          <p className="text-bold text-xl text-primary font-mono">Input your event information here!</p>
          <CreateEventForm />
        </div>
      </div>

    </div>
  );
}