import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import UpcomingEvents from "../../components/landing/UpcomingEvents";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
    </>
  );
};

export default LandingPage;
