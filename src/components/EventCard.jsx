import React from "react";
import events from "../data/events";

export const EventCard = () => {
  return (
    <>
      {/* {events.map((event, index) => (
        <h1 key={event.id}>{event.id}</h1>
      ))} */}

      {events.map((event, index) => (
        <div
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          key={event.id}
        >
          <img
            src={event.image}
            alt="Mr Charles Kitchen Cooking Session"
            className="h-52 w-full object-cover"
          />

          <div className="space-y-3 p-5">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Cooking
            </span>

            <h3 className="text-xl font-bold">
              Mr. Charles Kitchen Cooking Session
            </h3>

            <p className="text-sm text-gray-500">📍 Banana Island, Lagos</p>

            <p className="text-sm text-gray-500">📅 Oct 30, 2025 • 6:00 PM</p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-bold text-green-700">$50</span>

              <button className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800">
                Get Tickets!
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCard;
