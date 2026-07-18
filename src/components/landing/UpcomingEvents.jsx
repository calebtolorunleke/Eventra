import React from "react";
import { EventCard } from "../EventCard";

const UpcomingEvents = () => {
  return (
    <section className="max-w-[1250px] m-auto flex flex-col justify-center py-12 px-3">
      <div className="text-center">
        {" "}
        <h1 className="text-5xl font-bold">Upcoming Events</h1>
        <h3 className="text-gray-500 font-bold py-6">
          Stay ahead with what's happening next
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {" "}
        <EventCard />
      </div>
    </section>
  );
};

export default UpcomingEvents;
