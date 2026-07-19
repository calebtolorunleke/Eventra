import React from "react";
import Logo from "./common/Logo";
import { quickLinks, supportLinks, socialLinks } from "../data/quicklinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-green-950 pt-20 pb-10 text-white">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 px-8">
        <div className="lg:col-span-2 flex flex-col gap-5">
         <div> <Logo /></div>
          <p className="text-lg leading-7 text-green-50">
            EVENTRA connects you to unforgettable events and experiences.
            Discover, book, and enjoy with ease, anytime and anywhere.
          </p>
          <div className="flex flex-col gap-3 mt-8">
            <h3 className="font-bold text-2xl">Follow Us </h3>
            <div className="flex gap-4">
              {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;
                return (
                  <a
                    href={socialLink.url}
                    key={socialLink.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full bg-white/10 p-3 transition hover:bg-green-700 hover:scale-110 duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="mb-5 text-xl font-semibold">Contact</h3>
          <div className="space-y-3 text-green-50">
            {" "}
            <a
              href="mailto:eventra@gmail.com"
              className="block transition hover:text-green-400"
            >
              eventra@gmail.com
            </a>
            <a
              href="tel:+2347081981212"
              className="block transition hover:text-green-400"
            >
              +234 708 1981 212
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-green-50">
            {quickLinks.map((quickLink) => (
              <li
                key={quickLink.id}
                className="cursor-pointer transition hover:text-green-400"
              >
                <Link to={quickLink.path}>{quickLink.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="mb-5 text-xl font-semibold">Support</h3>
          <ul className="space-y-3 text-green-50">
            {supportLinks.map((supportLink) => (
              <li
                key={supportLink.id}
                className="cursor-pointer transition hover:text-green-400"
              >
                <Link className="" to={supportLink.path}>
                  {supportLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 border-t border-green-800 pt-6 text-center text-xs text-green-200">
        <p>&copy; {new Date().getFullYear()} Eventra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
