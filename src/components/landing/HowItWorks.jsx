import React from "react";
import { organizers } from "../../data/organizers";

const HowItWorks = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 ">
      <div className="mb-12 text-center">
        <h2 className=" text-4xl font-bold">How it Works</h2>
        <p className="text-xl text-gray-600 mt-3">
          Discover, book, and enjoy amazing events in just a few steps.
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 text-center gap-8">
        {organizers.map((organizer) => (
          <div
            className="rounded-2xl border flex flex-col h-full items-center border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-600
hover:bg-green-50"
            key={organizer.id}
          >
            <div className="mb-5 flex h-12 w-12 text-base items-center justify-center text-sm font-bold text-white bg-green-900 rounded-full">
              {organizer.id}
            </div>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              {organizer.title}
            </h2>
            <p className="text-sm leading-7 text-gray-600">
              {organizer.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
