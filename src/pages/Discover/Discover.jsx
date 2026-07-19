import Hero from "@/components/Hero";
import React from "react";
// import background from "../../assets/images/discoverimg.jpg";
import { discoverevents } from "../../data/discoverevents";

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
  return (
    <section>
      <div>
        {discoverevents.map((data) => (
          <Hero key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
