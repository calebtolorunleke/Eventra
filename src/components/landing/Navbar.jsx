import React, { useState } from "react";
import Logo from "../common/Logo";
import { Search, Menu as MenuIcon, Close } from "@mui/icons-material";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  return (
    <section className="fixed z-10 w-full backdrop-blur-md bg-black/20 bg-opacity-50 mx-auto top-0">
      {/* Desktop View */}
      <nav className="lg:flex hidden flex-row items-center justify-between px-8 py-5 max-w-[1250px] mx-auto">
        <Logo />
        <ul className="flex items-center gap-8 text-white text-md">
          <li className="cursor-pointer hover:text-green-600">
            Discover Events
          </li>
          <li className="cursor-pointer hover:text-green-600">About Us</li>
          <li className="cursor-pointer hover:text-green-600">Contact</li>
        </ul>
        <div className="flex flex-row items-center gap-6 text-white font-bold">
          <Search
            className="cursor-pointer  text-white "
            sx={{ fontSize: 28 }}
          />
          <button>Sign in</button>
          <button className="bg-green-900 px-4 py-2 rounded-md text-sm">
            Get Started
          </button>
        </div>
      </nav>

      {/* Phone View  */}
      <nav className="relative flex lg:hidden flex-row items-center justify-between px-8 py-5 max-w-[1250px] mx-auto">
        {" "}
        <Logo />
        {Menu && (
          <ul className="absolute left-0 top-full w-full bg-black flex flex-col items-center gap-8 p-8 text-white">
            <li>Discover Events</li>
            <li>About Us</li>
            <li>Contact</li> <button>Sign in</button>
            <button className="bg-green-900 px-4 py-2 rounded-md text-sm">
              Get Started
            </button>
          </ul>
        )}
        <div className="flex flex-row items-center gap-6 text-white font-bold">
          <Search
            className="cursor-pointer  text-white "
            sx={{ fontSize: 28 }}
          />
          <button
            onClick={() => setMenu(!Menu)}
            className="cursor-pointer"
            aria-label={Menu ? "Close menu" : "Open menu"}
          >
            {!Menu ? (
              <MenuIcon sx={{ fontSize: 32 }} />
            ) : (
              <Close sx={{ fontSize: 32 }} />
            )}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
