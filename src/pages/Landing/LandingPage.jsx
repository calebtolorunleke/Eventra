import React from "react";
import Hero from "../../components/Hero";
import UpcomingEvents from "../../components/landing/UpcomingEvents";
import EventCategory from "../../components/landing/EventCategory";
import HowItWorks from "../../components/landing/HowItWorks";
import WhyChooseUs from "../../components/landing/WhyChooseUs";
import { Testimonials } from "../../components/landing/Testimonials";
import DiscoverEvents from "../../components/landing/DiscoverEvents";
import LandingHero from "@/components/landing/LandingHero";

const LandingPage = () => {
  return (
    <main className="overflow-x-hidden">
      <LandingHero />
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
