import React from "react";

const HowItWorks = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 ">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl font-bold">How it Works?</h2>
        <p className="text-xl text-gray-600 mt-3">
          Discover, book, and enjoy amazing events in just a few steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 text-center gap-6">
        <div className="rounded-2xl border flex flex-col items-center border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-10 w-10 items-center justify-center text-sm font-bold text-white bg-green-900 rounded-full">
            1
          </div>
          <h2 className="mb-3 text-xl font-bold text-gray-900">Discover Events</h2>
          <p className="text-sm leading-7 text-gray-600">
            Explore concerts, festivals, and gatherings near you. Find the
            experience that matches your vibe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
