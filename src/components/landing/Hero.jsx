import React from "react";
import background from "../../assets/images/landingPageBg.jpg";

const Hero = () => {
  return (
    <section
      className=" h-[40rem] md:h-[45rem] w-full flex bg-black/40 inset-0 flex-col items-center bg-center justify-center text-white mx-auto"
      style={{ backgroundImage: `url(${background} )` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="flex z-10 items-center justify-center flex-col max-w-[1250px] text-center md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Discover Events That Inspire and Connect{" "}
        </h1>
        <h4 className="text-base sm:text-lg md:text-2xl text-gray-200 py-6">
          Your complete destination for discovering, booking, and experiencing
          events that truly matter to you.
        </h4>
        <button className="bg-green-900 px-6 sm:px-12 py-3 sm:py-4 rounded-md text-sm sm:text-lg">
          Explore Events
        </button>
      </div>
    </section>
  );
};

export default Hero;
