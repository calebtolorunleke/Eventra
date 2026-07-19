import Hero from "@/components/Hero";
import React from "react";
// import background from "../../assets/images/landingPageBg.jpg";
import { landinghero } from "../../data/landinghero";

const LandingHero = () => {
  // const Herodata = [
  //   {
  //     id: 1,
  //     title: "Discover Events That Inspire and Connect",
  //     description:
  //       "Your complete destination for discovering, booking, and experiencing events that truly matter to you.",
  //     image: background,
  //     button: { text: "Discover Events", href: "/discoverevents" },
  //   },
  // ];
  return (
    <section>
      <div>
        {landinghero.map((data) => (
          <Hero key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default LandingHero;
