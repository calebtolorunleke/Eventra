import Hero from "@/components/Hero";
import React from "react";
import { aboutdata } from "../../data/aboutdata";
import Visions from "@/components/Visions";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import MeetTeam from "@/components/MeetTeam";
import { Testimonials } from "@/components/landing/Testimonials";
import DiscoverEvents from "@/components/landing/DiscoverEvents";
import Sigevents from "@/components/Sigevents";

const Aboutus = () => {
  return (
    <section>
      {aboutdata.map((data) => (
        <Hero key={data.id} data={data} />
      ))}
      <Visions />
      <WhyChooseUs />
      <MeetTeam />
      <Sigevents/>
      <Testimonials/>
      <DiscoverEvents/>
    </section>
  );
};

export default Aboutus;
