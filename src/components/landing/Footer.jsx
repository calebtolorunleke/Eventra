import React from "react";
import Logo from "../common/Logo";
import { Instagram, LinkedIn, Twitter, WhatsApp, X } from "@mui/icons-material";

const Footer = () => {
  return (
    <section className=" bg-green-950 py-20 text-white">
      <div className="max-w-[1250px] mx-auto grid grid-cols-5">
        <div className="col-span-2 flex flex-col gap-5">
          <div>
            <Logo  />
          </div>
          <p className="text-lg leading-7">
            EVENTRA connects you to unforgettable events and experiences.
            Discover, book, and enjoy with ease, anytime and anywhere.
          </p>
          <div className="flex flex-col gap-3 mt-8">
            <h2 className="font-bold text-2xl">Follow Us </h2>
            <div className="flex gap-4">
              <WhatsApp />
              <LinkedIn />
              <Instagram />
              <X />
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;
