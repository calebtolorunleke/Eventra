import React from "react";
import categories from "../../data/categories";

const EventCategory = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">Event Category</h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex cursor-pointer flex-col items-center gap-3 rounded-2xl p-4 transition duration-300 hover:-translate-y-2 hover:bg-gray-50"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-20 w-20 object-contain"
            />

            <span className="text-center text-sm font-medium text-gray-700">
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategory;
