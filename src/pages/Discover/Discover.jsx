import Hero from "@/components/Hero";
import React, { useEffect, useState } from "react";
import { discoverevents } from "../../data/discoverevents";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import EventraCard from "@/components/EventraCard";
import { eventsData } from "../../data/events";

const Discover = () => {
  const [category, setCategory] = useState("all-events");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [searchEvents, setSearchEvents] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 6;

  const filteredEvents = eventsData.filter((event) => {
    const eventTitle = event.title?.toLowerCase() || "";
    const eventCategory = event.category?.toLowerCase() || "";
    const eventPrice = event.pricing?.type?.toLowerCase() || "";

    const matchesSearch = eventTitle.includes(
      searchEvents.trim().toLowerCase(),
    );

    const matchesCategory =
      category === "all-events" || eventCategory === category.toLowerCase();

    const matchesPrice =
      price === "" || eventPrice === price.toLowerCase();

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const startIndex = (currentPage - 1) * eventsPerPage;

  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + eventsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [category, price, date, searchEvents]);

  const handlePreviousPage = () => {
    setCurrentPage((previousPage) => Math.max(previousPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((previousPage) =>
      Math.min(previousPage + 1, totalPages),
    );
  };

  return (
    <section>
      {discoverevents.map((data) => (
        <Hero key={data.id} data={data} />
      ))}

      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-lg border border-black/30 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="all-events">All Events</option>
            <option value="concerts">Concerts</option>
            <option value="workshops">Workshops</option>
            <option value="conferences">Conferences</option>
          </select>

          <select
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="rounded-lg border border-black/30 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="">All Prices</option>
            <option value="paid">Paid</option>
            <option value="free">Free</option>
          </select>

          <select
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="rounded-lg border border-black/30 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="">Any Date</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search events"
            value={searchEvents}
            onChange={(event) => setSearchEvents(event.target.value)}
            className="w-full rounded-lg border border-black/20 py-2 pl-10 pr-4 outline-none focus:border-green-500"
          />
        </div>
      </div>

      {currentEvents.length > 0 ? (
        <>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {currentEvents.map((eventData) => (
              <EventraCard key={eventData.id} eventData={eventData} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 px-6 py-10">
              <button
                type="button"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-10 items-center gap-1 rounded-lg border border-gray-300 px-3 text-sm font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    type="button"
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    aria-current={
                      currentPage === pageNumber ? "page" : undefined
                    }
                    className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
                      currentPage === pageNumber
                        ? "bg-green-950 text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-10 items-center gap-1 rounded-lg border border-gray-300 px-3 text-sm font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            No events found
          </h2>

          <p className="mt-2 text-gray-600">
            Try changing your search or filter options.
          </p>
        </div>
      )}
    </section>
  );
};

export default Discover;