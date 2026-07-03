const events = [
  {
    id: 1,
    title: "Mr. Charles Kitchen Cooking Session",
    category: "Cooking",
    location: {
      venue: "Banana Island",
      city: "Lagos",
      country: "Nigeria",
    },
    schedule: {
      date: "2025-10-30",
      startTime: "06:00 PM",
      endTime: "11:00 PM",
    },
    pricing: {
      amount: 50,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?cooking,chef",
    featured: true,
    seatsLeft: 84,
    organizer: "Chef Charles",
    rating: 4.9,
    attendees: 512,
  },

  {
    id: 2,
    title: "React Developers Meetup",
    category: "Technology",
    location: {
      venue: "Vancouver Convention Centre",
      city: "Vancouver",
      country: "Canada",
    },
    schedule: {
      date: "2025-11-08",
      startTime: "09:00 AM",
      endTime: "03:00 PM",
    },
    pricing: {
      amount: 35,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?developer,computer",
    featured: true,
    seatsLeft: 130,
    organizer: "React Vancouver",
    rating: 4.8,
    attendees: 860,
  },

  {
    id: 3,
    title: "Afrobeats Night Live",
    category: "Music",
    location: {
      venue: "Scotiabank Arena",
      city: "Toronto",
      country: "Canada",
    },
    schedule: {
      date: "2025-12-14",
      startTime: "07:00 PM",
      endTime: "12:00 AM",
    },
    pricing: {
      amount: 80,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?concert,music",
    featured: true,
    seatsLeft: 250,
    organizer: "Live Nation",
    rating: 4.9,
    attendees: 1850,
  },

  {
    id: 4,
    title: "Startup Founders Summit",
    category: "Business",
    location: {
      venue: "Downtown Convention Centre",
      city: "Calgary",
      country: "Canada",
    },
    schedule: {
      date: "2026-01-16",
      startTime: "10:00 AM",
      endTime: "05:00 PM",
    },
    pricing: {
      amount: 120,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?startup,business",
    featured: true,
    seatsLeft: 60,
    organizer: "Startup Alberta",
    rating: 4.7,
    attendees: 420,
  },

  {
    id: 5,
    title: "Yoga & Wellness Retreat",
    category: "Health",
    location: {
      venue: "Stanley Park",
      city: "Vancouver",
      country: "Canada",
    },
    schedule: {
      date: "2026-02-02",
      startTime: "08:00 AM",
      endTime: "01:00 PM",
    },
    pricing: {
      amount: 25,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?yoga,wellness",
    featured: false,
    seatsLeft: 42,
    organizer: "Wellness BC",
    rating: 4.8,
    attendees: 260,
  },

  {
    id: 6,
    title: "Photography Masterclass",
    category: "Photography",
    location: {
      venue: "Victoria Harbour",
      city: "Victoria",
      country: "Canada",
    },
    schedule: {
      date: "2026-03-11",
      startTime: "11:00 AM",
      endTime: "04:00 PM",
    },
    pricing: {
      amount: 65,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?photography,camera",
    featured: false,
    seatsLeft: 90,
    organizer: "Creative Lens",
    rating: 4.6,
    attendees: 330,
  },

  {
    id: 7,
    title: "Food Truck Festival",
    category: "Food",
    location: {
      venue: "Central Park",
      city: "Burnaby",
      country: "Canada",
    },
    schedule: {
      date: "2026-04-05",
      startTime: "12:00 PM",
      endTime: "08:00 PM",
    },
    pricing: {
      amount: 0,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?food,festival",
    featured: true,
    seatsLeft: 500,
    organizer: "Burnaby Events",
    rating: 4.8,
    attendees: 2100,
  },

  {
    id: 8,
    title: "Women in Tech Conference",
    category: "Conference",
    location: {
      venue: "Ottawa Convention Centre",
      city: "Ottawa",
      country: "Canada",
    },
    schedule: {
      date: "2026-05-20",
      startTime: "09:00 AM",
      endTime: "06:00 PM",
    },
    pricing: {
      amount: 150,
      currency: "USD",
    },
    image:
      "https://source.unsplash.com/featured/600x400/?conference,technology",
    featured: true,
    seatsLeft: 180,
    organizer: "Women Tech Network",
    rating: 4.9,
    attendees: 1240,
  },

  {
    id: 9,
    title: "Artificial Intelligence Bootcamp",
    category: "Education",
    location: {
      venue: "University of British Columbia",
      city: "Vancouver",
      country: "Canada",
    },
    schedule: {
      date: "2026-06-12",
      startTime: "09:30 AM",
      endTime: "04:30 PM",
    },
    pricing: {
      amount: 200,
      currency: "USD",
    },
    image:
      "https://source.unsplash.com/featured/600x400/?artificial-intelligence,technology",
    featured: true,
    seatsLeft: 55,
    organizer: "AI Academy",
    rating: 5.0,
    attendees: 680,
  },

  {
    id: 10,
    title: "Charity Marathon 2026",
    category: "Sports",
    location: {
      venue: "Riverside Park",
      city: "Kamloops",
      country: "Canada",
    },
    schedule: {
      date: "2026-07-18",
      startTime: "07:00 AM",
      endTime: "12:00 PM",
    },
    pricing: {
      amount: 20,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?marathon,running",
    featured: false,
    seatsLeft: 400,
    organizer: "Kamloops Run Club",
    rating: 4.7,
    attendees: 950,
  },

  {
    id: 11,
    title: "Summer Beach Party",
    category: "Entertainment",
    location: {
      venue: "English Bay Beach",
      city: "Vancouver",
      country: "Canada",
    },
    schedule: {
      date: "2026-08-09",
      startTime: "05:00 PM",
      endTime: "11:30 PM",
    },
    pricing: {
      amount: 40,
      currency: "USD",
    },
    image: "https://source.unsplash.com/featured/600x400/?beach,party",
    featured: true,
    seatsLeft: 320,
    organizer: "Summer Vibes",
    rating: 4.8,
    attendees: 1680,
  },

  {
    id: 12,
    title: "Networking Mixer for Developers",
    category: "Networking",
    location: {
      venue: "Gastown Hub",
      city: "Vancouver",
      country: "Canada",
    },
    schedule: {
      date: "2026-09-04",
      startTime: "06:30 PM",
      endTime: "09:30 PM",
    },
    pricing: {
      amount: 15,
      currency: "USD",
    },
    image:
      "https://source.unsplash.com/featured/600x400/?networking,developers",
    featured: false,
    seatsLeft: 75,
    organizer: "DevConnect",
    rating: 4.9,
    attendees: 470,
  },
];

export default events;
