import React from "react";
import dominate from "../assets/images/Dominate.jpg";
import manage1 from "../assets/images/Manage1.png";
import manage2 from "../assets/images/Manage2.png";

const statistics = [
  {
    id: 1,
    value: "23K+",
    label: "Events hosted",
  },
  {
    id: 2,
    value: "30K+",
    label: "Satisfied customers",
  },
  {
    id: 3,
    value: "12+",
    label: "Years of mastery",
  },
  {
    id: 4,
    value: "65+",
    label: "Worldwide users",
  },
];

const Visions = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          
          <div className="flex flex-col">
            <div className="mb-8 max-w-xl">
              <span className="mb-4 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                Our vision
              </span>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Your vision. Our expertise.
                <span className="block text-amber-500">
                  Extraordinary events.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                We transform meaningful ideas into unforgettable experiences
                through thoughtful planning, creativity, and expert execution.
              </p>
            </div>

            <div className="group relative min-h-[360px] flex-1 overflow-hidden rounded-3xl bg-gray-100 shadow-lg">
              <img
                src={dominate}
                alt="Guests enjoying a professionally organized event"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Stand out
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Dominate the scene
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                  Create experiences that capture attention, inspire people,
                  and leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
          
          
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="group overflow-hidden rounded-3xl bg-gray-100 shadow-md">
                <img
                  src={manage1}
                  alt="Event team coordinating an event"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72 lg:h-80"
                />
              </div>

              <div className="group mt-8 overflow-hidden rounded-3xl bg-gray-100 shadow-md sm:mt-12">
                <img
                  src={manage2}
                  alt="Guests attending a memorable event"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72 lg:h-80"
                />
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white shadow-xl sm:p-8">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="relative">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Our experience
                </span>

                <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
                  Managing events that create lasting impressions
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                  From intimate gatherings to large-scale experiences, we help
                  organizers create memorable events from start to finish.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {statistics.map((stat) => (
                    <div
                      key={stat.id}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                    >
                      <h4 className="text-2xl font-bold text-amber-300 sm:text-3xl">
                        {stat.value}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-white/70 sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visions;