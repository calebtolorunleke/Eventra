// import React, { useEffect, useState } from "react";
// import { eventsData } from "../data/events";

import { CalendarTodayOutlined, LocationOnOutlined } from "@mui/icons-material";
// import { Typing } from "@/components/loading-ui/typing";

// export const EventCard = ({import React, { useEffect, useState } from "react";
// import { eventsData } from "../data/events";

// import { CalendarTodayOutlined, LocationOnOutlined } from "@mui/icons-material";
import { Typing } from "@/components/loading-ui/typing";

export const EventraCard = ({eventData}) => {
  // const [events, setEvents] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       const data = await response.json();
  //       console.log(data);
  //       setEvents(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   setEvents(eventsData);
  //   setIsLoading(false);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center gap-1 text-green-600 items-center gap-8">
  //       <h1 className="text-lg font-bold">Loading events</h1>
  //       <Typing className="w-10" />
  //     </div>
  //   );
  

  return (
    <>
        <div
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
       
        >
          <img
            src={eventData.image}
            alt={eventData.title}
            className="h-52 w-full object-cover"
          />

          <div className="flex flex-1 flex-col space-y-3 p-5">
            <div className="">
              {" "}
              <span className=" inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {eventData.category}
              </span>
            </div>

            <h3 className="line-clamp-2 text-xl font-bold text-gray-900">{eventData.title}</h3>

            <div className="flex items-center  gap-2 text-sm text-gray-500">
              <LocationOnOutlined sx={{ fontSize: 16 }} />
              <span>{eventData.location.venue} </span>{" "}
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarTodayOutlined sx={{ fontSize: 16 }} />
                <span>{eventData.schedule.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarTodayOutlined sx={{ fontSize: 16 }} />
                <span>{eventData.schedule.startTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-bold text-green-700">
                {eventData.pricing.currency}
                {eventData.pricing.amount}
              </span>

              <button className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800">
                Get Tickets!
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default EventraCard;
