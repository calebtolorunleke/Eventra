import background from "../assets/images/landingPageBg.jpg";
import contactbkg from "../assets/images/aboutUsNewBg.jpg";

export const landinghero = [
  {
    id: 1,
    title: "Discover Events That Inspire and Connect",
    description:
      "Your complete destination for discovering, booking, and experiencing events that truly matter to you.",
    image: background,
    button: { text: "Discover Events", href: "/discoverevents" },
  },
];

export const contatdata = [
  {
    id: 1,
    title: "Let’s create something memorable",
    description:
      "We’d love to hear from you. Whether it’s about our events, partnerships, or media; reach out below.",
    image: contactbkg,
  },
];

import { Mail, Phone, MapPin } from "lucide-react";

export const contactInfo = [
  {
    id: 1,
    icon: Mail,
    title: "Email Us",
    description:
      "Send us an email anytime, we'll get back to you within 24 hours.",
    value: "info@yourorg.com",
    link: "mailto:info@yourorg.com",
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    description:
      "Prefer to talk directly? Reach out during our office hours (Mon–Fri, 9AM–5PM).",
    value: "+234 XX XXX XXXX",
    link: "tel:+234XXXXXXXXXX",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Visit Us",
    description:
      "Stop by our office to make physical inquiries. We'd love to meet you.",
    value: "12th Street, Lagos, Nigeria",
    link: "12th Street, Lagos, Nigeria",
  },
];
