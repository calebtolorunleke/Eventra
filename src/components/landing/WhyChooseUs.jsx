import React from "react";
import { reasons } from "../../data/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 bg-gray-50/40">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">Why Choose Eventra</h2>
        <p className="text-xl text-gray-600 mt-3">
          The trusted platform for unforgettable experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        {reasons.map((reason) => (
          <div
            className="p-8 transition-all flex flex-col items-center duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-lg"
            key={reason.id}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <img
                src={reason.image}
                alt={reason.title}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h2 className="py-6 text-xl font-bold text-gray-900">
                {reason.title}
              </h2>
              <p className="text-sm leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
