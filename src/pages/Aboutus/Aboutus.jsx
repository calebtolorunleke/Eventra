import Hero from "@/components/Hero";
import React from "react";
import { aboutdata } from "../../data/aboutdata";
import Visions from "@/components/Visions";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import MeetTeam from "@/components/MeetTeam";

const Aboutus = () => {
  return (
    <section>
      {aboutdata.map((data) => (
        <Hero key={data.id} data={data} />
      ))}
      <Visions />
      <WhyChooseUs />
      <MeetTeam />
    </section>
  );
};

export default Aboutus;
