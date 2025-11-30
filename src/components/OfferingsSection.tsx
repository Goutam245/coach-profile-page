import { useState, useEffect } from "react";
import { CoachingCard } from "./CoachingCard";
import coaching1 from "@/assets/coaching-1.jpg";
import coaching2 from "@/assets/coaching-2.jpg";
import coaching3 from "@/assets/coaching-3.jpg";

const offerings = [
  {
    images: [coaching1, coaching2, coaching3],
    title: "Fertility Foundations Program",
    description: "A comprehensive 8-week program covering nutrition, stress management, and lifestyle optimization for fertility.",
    price: "$1,495",
  },
  {
    images: [coaching2, coaching3, coaching1],
    title: "Mindful Conception Journey",
    description: "Thilde combines evidence-based fertility coaching with holistic lifestyle techniques to support women and couples.",
    price: "$1,495",
  },
  {
    images: [coaching3, coaching1, coaching2],
    title: "Yoga & Meditation Package",
    description: "Weekly yoga sessions and guided meditations designed specifically for fertility and hormone balance.",
    price: "$1,495",
  },
];

export function OfferingsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-foreground mb-6 animate-fade-in">
        Offerings
      </h2>
      <div className="space-y-4">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CoachingCard {...offering} />
          </div>
        ))}
      </div>
    </section>
  );
}
