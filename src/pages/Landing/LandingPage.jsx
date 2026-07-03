import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import UpcomingEvents from "../../components/landing/UpcomingEvents";
import EventCategory from "../../components/landing/EventCategory";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <EventCategory />
    </>
  );
};

export default LandingPage;
