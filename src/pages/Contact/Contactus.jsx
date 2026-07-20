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
      <div className="mt-10 my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8899119932175!2d3.3634445749201167!3d6.535585093457214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dba7bad97cb%3A0xae0bc176821041e5!2sTech%20Studio%20Academy!5e0!3m2!1sen!2sng!4v1757937615048!5m2!1sen!2sng"
          width="100%"
          height="483"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contactus;
