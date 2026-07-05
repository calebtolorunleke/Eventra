import React from "react";
import events from "../data/events";
import { CalendarTodayOutlined, LocationOnOutlined } from "@mui/icons-material";

export const EventCard = () => {
  return (
    <>
      {/* {events.map((event, index) => (
        <h1 key={event.id}>{event.id}</h1>
      ))} */}

      {events.map((event) => (
        <div
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          key={event.id}
        >
          <img
            src={event.image}
            alt={event.title}
            className="h-52 w-full object-cover"
          />

          <div className="flex flex-1 flex-col space-y-3 p-5">
            <div className="">
              {" "}
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {event.category}
              </span>
            </div>

            <h3 className="text-xl font-bold">{event.title}</h3>

            <div className="flex items-center  gap-2 text-sm text-gray-500">
              <LocationOnOutlined sx={{ fontSize: 16 }} />
              <span>{event.location.venue} </span>{" "}
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarTodayOutlined sx={{ fontSize: 16 }} />
                <span>{event.schedule.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarTodayOutlined sx={{ fontSize: 16 }} />
                <span>{event.schedule.startTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-bold text-green-700">
                {event.pricing.currency}
                {event.pricing.amount}
              </span>

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
