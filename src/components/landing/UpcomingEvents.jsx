import React from "react";
import { EventCard } from "../EventCard";

const UpcomingEvents = () => {
  return (
    <section className="max-w-[1250px] m-auto flex flex-col justify-center py-12 px-2">
      <div className="text-center">
        {" "}
        <h1 className="text-5xl font-bold">Upcoming Events</h1>
        <h3 className="text-gray-500 font-bold py-6">
          Stay ahead with what's happening next
        </h3>
      </div><div className="flex flex-wrap items-start justify-center gap-8 mt-8 w-full max-w-full">      <EventCard />
      </div>
    </section>
  );
};

export default UpcomingEvents;
