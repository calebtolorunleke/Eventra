import Hero from "@/components/landing/Hero";
import React from "react";
import background from "../../assets/images/landingPageBg.jpg";

const Discover = () => {
  const Herodata = [
    {
      id: 1,
      title: "Discover Events That Inspire and Connect",
      description:
        "Your complete destination for discovering, booking, and experiencing events that truly matter to you.",
      image: background,
      button: "Explore Events",
    },
  ];
  return (
    <section>
      <div>
        {Herodata.map((data) => (
          <Hero key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
