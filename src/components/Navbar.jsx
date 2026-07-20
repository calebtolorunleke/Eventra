import React, { useState } from "react";
import Logo from "./common/Logo";
import { Search, Menu as MenuIcon, Close } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [Menu, setMenu] = useState(false);
  return (
    <header className="fixed z-10 w-full backdrop-blur-md bg-black/20 bg-opacity-50 mx-auto top-0">
      {/* Desktop View */}
      <nav className="lg:flex hidden flex-row items-center justify-between px-8 py-5 max-w-[1250px] mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-8 text-white text-md">
          <li>
            <Link
              to="/discoverevents"
              className={`cursor-pointer pb-1 transition-all duration-300 hover:text-green-600 ${location.pathname === "/discoverevents" ? `border-b-2 border-green-400 transition-all ` : ``}`}
            >
              Discover Events
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={`cursor-pointer pb-1 transition-all duration-300 hover:text-green-600 ${location.pathname === "/aboutus" ? `border-b-2 border-green-400 transition-all` : ``}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className={`cursor-pointer pb-1 transition-all duration-300 hover:text-green-600 ${location.pathname === "/contactus" ? `border-b-2 border-green-400 transition-all` : ``}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-6 text-white font-bold">
          <Search
            className="cursor-pointer  text-white "
            sx={{ fontSize: 23 }}
          />
          <Link to="/signin">Sign in</Link>
          <Link
            to="/signup"
            className="bg-green-900 px-4 py-2 rounded-md text-sm cursor-pointer"
          >
            Get Started
          </Link>
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
    </header>
  );
};

export default Navbar;
