import Hero from "@/components/Hero";
import React from "react";
import { contatdata } from "../../data/landinghero";
import Contactfile from "@/components/Contactfile";

const Contactus = () => {
  return (
    <section>
      {" "}
      {contatdata.map((data) => (
        <Hero key={data.id} data={data} />
      ))}
      <Contactfile />
    </section>
  );
};

export default Contactus;
