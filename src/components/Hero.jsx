import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ data }) => {
  return (
    <section
      className="relative  h-[33rem] md:h-[35rem] w-full flex bg-black/40 inset-0 flex-col items-center bg-center justify-center text-white mx-auto"
      style={{ backgroundImage: `url(${data.image} )` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="flex z-1 items-center justify-center flex-col max-w-[1250px] text-center md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          {data.title}
        </h1>
        <h4 className="text-base sm:text-lg md:text-2xl text-gray-200 py-6">
          {data.description}
        </h4>
        {data.button && (
          <button className="rounded-lg bg-green-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 active:translate-y-0 active:scale-95">
            <Link to={data.button.href}> {data.button.text}</Link>
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
