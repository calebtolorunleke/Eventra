import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import UpcomingEvents from "../../components/landing/UpcomingEvents";
import EventCategory from "../../components/landing/EventCategory";
import HowItWorks from "../../components/landing/HowItWorks";
import WhyChooseUs from "../../components/landing/WhyChooseUs";
import { Testimonials } from "../../components/landing/Testimonials";
import DiscoverEvents from "../../components/landing/DiscoverEvents";

const LandingPage = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <EventCategory />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <DiscoverEvents />
    </main>
  );
};

export default LandingPage;
