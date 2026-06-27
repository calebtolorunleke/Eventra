import React from "react";
import Logo from "../common/Logo";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <section className="w-full backdrop-blur-md bg-black/40 bg-opacity-50 mx-auto top-0">
      <nav className="flex flex-row items-center justify-between px-8 py-5 max-w-[1250px] mx-auto">
        <Logo />
        <ul className="flex items-center gap-8 text-white font-bold">
          <li>Discover Events</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-row items-center gap-6 text-white font-bold">
          <Search
            className="cursor-pointer  text-white "
            sx={{ fontSize: 28 }}
          />
          <button>Sign in</button>
          <button>Get Started</button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
