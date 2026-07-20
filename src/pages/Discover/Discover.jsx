import Hero from "@/components/Hero";
import React, { useState } from "react";
// import background from "../../assets/images/discoverimg.jpg";
import { discoverevents } from "../../data/discoverevents";
import { Search } from "lucide-react";
import EventraCard from "@/components/EventraCard";
import { eventsData } from "../../data/events";

const Discover = () => {
  // const Herodata = [
  //   {
  //     id: 1,
  //     title: "Discover Events",
  //     description:
  //       "Stay connected to the pulse of culture. Explore concerts, shows, and gatherings that bring people together.",
  //     image: background,
  //   },
  // ];

  const [category, setCategory] = useState("all-events");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [searchevents, setSearchEvents] = useState("");
  return (
    <section>
      {discoverevents.map((data) => (
        <Hero key={data.id} data={data} />
      ))}
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          {" "}
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="rounded-lg border border-black/30 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="all-events">All Events</option>
            <option value="concerts">Concerts</option>
            <option value="workshops">workshops</option>
            <option value="conferences">Conferences</option>
          </select>
          <select
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="rounded-lg border border-black/30 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="paid">PAID</option>
            <option value="free">FREE</option>
          </select>
          <select
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="rounded-lg border border-black/30 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="">Any Date</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            placeholder="Search events"
            value={searchevents}
            onChange={(e) => setSearchEvents(e.target.value)}
            className="w-full rounded-lg border border-black/20 py-2 pl-10 pr-4 outline-none focus:border-green-500"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
        {eventsData.map((eventData) => (
          <EventraCard key={eventData.id} eventData={eventData} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
