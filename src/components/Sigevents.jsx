import React from "react";
import emoji1 from "../assets/images/emoji1.png";
import emoji2 from "../assets/images/emoji2.png";
import emoji3 from "../assets/images/emoji3.png";
import emoji4 from "../assets/images/emoji4.png";

const sigEvents = [
  {
    title: "Social Events",
    description:
      "Theme gatherings, small parties, and team-building activities.",
    icon: emoji1,
  },
  {
    title: "Corporate Events",
    description: "Conferences, product launches, award galas, and VIP events.",
    icon: emoji2,
  },
  {
    title: "Lifestyle Events",
    description:
      "Fashion shows, art exhibitions, influencer brunches, and pop-ups.",
    icon: emoji3,
  },
  {
    title: "Festivals",
    description: "Music and food festivals, community fairs, and celebrations.",
    icon: emoji4,
  },
];

const SigEvents = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Signature Events
        </h2>

        <p className="mt-3 text-gray-600">
          Memorable experiences thoughtfully created for every occasion.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {sigEvents.map((event) => (
          <article
            key={event.title}
            className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <img
                src={event.icon}
                alt={`${event.title} icon`}
                className="h-8 w-8 object-contain"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {event.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {event.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SigEvents;
