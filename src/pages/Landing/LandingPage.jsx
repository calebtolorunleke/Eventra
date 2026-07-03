import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import UpcomingEvents from "../../components/landing/UpcomingEvents";
import EventCategory from "../../components/landing/EventCategory";
import HowItWorks from "../../components/landing/HowItWorks";
import WhyChooseUs from "../../components/landing/WhyChooseUs";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <EventCategory />
      <HowItWorks />
      <WhyChooseUs />
    </>
  );
};

export default LandingPage;
