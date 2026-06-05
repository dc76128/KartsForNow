import {
  BadgeCheck,
  CalendarDays,
  Clock,
  Home,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

export const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80",
    alt: "Sunny beach shoreline with calm coastal water",
  },
  {
    src: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=2200&q=80",
    alt: "Coastal boardwalk near beach homes",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80",
    alt: "Family vacation home street near the coast",
  },
];

export const features = [
  {
    title: "Delivered To You",
    description:
      "We bring the cart directly to your vacation home, condo, or community.",
    icon: Truck,
  },
  {
    title: "Flexible Rental Options",
    description: "Daily, weekly, monthly, and seasonal rentals available.",
    icon: CalendarDays,
  },
  {
    title: "Simple Booking Process",
    description: "Call us and we'll handle the rest.",
    icon: PhoneCall,
  },
];

export const fleet = [
  {
    name: "4 Passenger Cart",
    passengers: "4 passengers",
    image:
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=1200&q=80",
    alt: "Compact golf cart parked near palm trees",
    features: ["Comfortable seating", "Easy neighborhood cruising", "Great for couples or small families"],
    preview: "From $95 daily",
    pricing: { daily: "$95", weekly: "$425", monthly: "$1,150" },
  },
  {
    name: "6 Passenger Cart",
    passengers: "6 passengers",
    image:
      "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1200&q=80",
    alt: "Golf cart path near a sunny coastal course",
    features: ["Room for the family", "Beach gear friendly", "Popular weekly option"],
    preview: "From $115 daily",
    pricing: { daily: "$115", weekly: "$525", monthly: "$1,350" },
  },
  {
    name: "8 Passenger Cart",
    passengers: "8 passengers",
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80",
    alt: "Open-air cart travel near a beach community",
    features: ["Extra guest capacity", "Ideal for larger rentals", "Smooth local transportation"],
    preview: "From $145 daily",
    pricing: { daily: "$145", weekly: "$675", monthly: "$1,650" },
  },
  {
    name: "Street Legal LSV",
    passengers: "Street legal option",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    alt: "Quiet coastal street lined with palm trees",
    features: ["Low-speed vehicle", "For approved roads", "Premium coastal convenience"],
    preview: "From $175 daily",
    pricing: { daily: "$175", weekly: "$825", monthly: "$2,100" },
  },
];

export const serviceAreas = [
  {
    name: "Ocean Breeze Beach",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    description:
      "Easy delivery for beach homes, condos, and family vacation stays near the shoreline.",
  },
  {
    name: "Pelican Point",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    description:
      "Comfortable cart rentals for quiet neighborhoods, marina visits, and short local trips.",
  },
  {
    name: "Harbor Shores",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    description:
      "Reliable weekly and seasonal options for waterfront communities and visiting guests.",
  },
  {
    name: "Coastal Dunes",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    description:
      "Simple transportation for beach rental homes, boardwalk access, and nearby dining.",
  },
  {
    name: "Sunset Bay",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium cart delivery for families, retirees, and seasonal residents around the bay.",
  },
  {
    name: "Seaside Village",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    description:
      "Convenient rentals for walkable coastal streets, shops, restaurants, and beach paths.",
  },
];

export const testimonials = [
  { name: "Megan R.", quote: "The easiest part of our beach vacation." },
  { name: "Thomas W.", quote: "Delivery was quick and the cart was spotless." },
  { name: "Linda P.", quote: "We called and had a cart delivered the same day." },
  { name: "Carlos M.", quote: "Professional, simple, and exactly what our family needed." },
  { name: "Janet S.", quote: "Our guests used it every day. Booking could not have been easier." },
  { name: "Rebecca L.", quote: "Friendly team, clear pricing, and dependable service." },
  { name: "Allen K.", quote: "A great way to get around without moving the car all week." },
  { name: "Diane H.", quote: "The cart arrived clean, charged, and right on time." },
];

export const faqs = [
  {
    question: "How do I reserve a cart?",
    answer:
      "Call our team and tell us your rental dates, location, and preferred cart size. We will confirm availability and delivery details.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "We deliver to local beach homes, condos, communities, and seasonal residences throughout our service areas.",
  },
  {
    question: "Can I rent for multiple weeks?",
    answer:
      "Yes. Weekly, multi-week, monthly, and seasonal rentals are available based on fleet availability.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Our team will help coordinate delivery timing and rental guidance around local weather conditions.",
  },
  {
    question: "Do you offer same-day rentals?",
    answer:
      "Same-day rentals may be available during select periods. Calling is the fastest way to check current availability.",
  },
  {
    question: "What is included with the rental?",
    answer:
      "Your rental includes a clean, ready-to-use cart, local delivery coordination, and support from our team.",
  },
  {
    question: "Are carts street legal?",
    answer:
      "Street legal LSV rentals are available for approved roads. Local rules vary, so we will help confirm the best fit for your stay.",
  },
  {
    question: "Can I cancel my reservation?",
    answer:
      "Cancellation terms may vary by season and rental length. Call our team for the current policy before reserving.",
  },
];

export const trustBadges = [
  { label: "Fully Insured", icon: ShieldCheck },
  { label: "Locally Operated", icon: MapPin },
  { label: "Reliable Delivery", icon: Truck },
  { label: "Same-Day Availability", icon: Clock },
];

export const rentalSteps = [
  { title: "Call", description: "Tell us where you are staying and when you need the cart.", icon: PhoneCall },
  { title: "Confirm", description: "We match your group with the right cart and rental length.", icon: BadgeCheck },
  { title: "Ride", description: "Your cart arrives clean, charged, and ready for the coast.", icon: Sparkles },
];

export const quickStats = [
  { value: "4", label: "Cart styles", icon: Users },
  { value: "7 days", label: "Weekly availability", icon: CalendarDays },
  { value: "Doorstep", label: "Delivery", icon: Home },
];
