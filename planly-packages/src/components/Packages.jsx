import React from "react";
import { ShieldCheck, Clock, Arrow, Star, Sparkle } from "./icons";

/* ---------- Data ---------- */
const PACKAGES = [
  {
    id: 1,
    badge: "Most booked",
    emoji: "📦",
    bg: "#f8e7e0",
    badgeColor: "#9a8582",
    sparkle: "#d9aa9c",
    category: "Moving",
    rating: "4.9",
    reviews: 128,
    title: "A little help, a big move",
    description: "Packing & moving essentials",
    provider: "MoveMate",
    duration: "4–6 hours",
    price: "4,500",
  },
  {
    id: 2,
    badge: "Crowd favorite",
    emoji: "🎉",
    bg: "#e8e1f6",
    badgeColor: "#8e86a6",
    sparkle: "#b3a4d8",
    category: "Parties",
    rating: "4.9",
    reviews: 96,
    title: "Your party, all dressed up",
    description: "Balloon & backdrop setup",
    provider: "Confetti Studio",
    duration: "2–3 hours",
    price: "3,200",
  },
  {
    id: 3,
    badge: "Weekend ready",
    emoji: "🚗",
    bg: "#dcebe4",
    badgeColor: "#7c9a8f",
    sparkle: "#97bba9",
    category: "Trips",
    rating: "4.8",
    reviews: 74,
    title: "Hit the road, not the stress",
    description: "Road trip planning & car rental",
    provider: "Wander Wheels",
    duration: "1–3 days",
    price: "6,000",
  },
];

/* ---------- Card ---------- */
const PackageCard = ({ pkg }) => (
  <article className="rounded-[30px] border border-[#e1e6f2] bg-white p-3.5 shadow-[0_1px_2px_rgba(40,40,100,0.03)]">
    {/* Illustration */}
    <div
      className="relative h-[308px] overflow-hidden rounded-[22px]"
      style={{ backgroundColor: pkg.bg }}
    >
      <span
        className="absolute left-[22px] top-[22px] text-[12px] font-medium uppercase tracking-[0.16em]"
        style={{ color: pkg.badgeColor }}
      >
        {pkg.badge}
      </span>

      <Sparkle className="absolute h-7 w-7" style={{ left: "72%", top: "39%", color: pkg.sparkle }} />
      <Sparkle outline className="absolute h-5 w-5" style={{ left: "24.5%", top: "63%", color: pkg.sparkle }} />

      <div className="absolute inset-0 flex items-center justify-center text-[116px] leading-none select-none">
        <span role="img" aria-label={pkg.category}>{pkg.emoji}</span>
      </div>

      <span className="absolute bottom-[18px] left-[20px] inline-flex items-center gap-2 rounded-lg bg-white/70 px-3 py-[7px] text-[14px] text-[#5f6b80]">
        <ShieldCheck className="h-[18px] w-[18px] text-[#5e9c7f]" />
        Verified
      </span>
    </div>

    {/* Body */}
    <div className="px-[18px] pb-[18px] pt-[30px]">
      <div className="flex items-center justify-between text-[17px] leading-[26px] text-[#5f6e8f]">
        <span>{pkg.category}</span>
        <span className="inline-flex items-center gap-1.5">
          <Star className="h-[18px] w-[18px] text-[#c9a96e]" />
          <span className="text-[#3d3d5c]">{pkg.rating}</span>
          <span className="text-[#6b7694]">({pkg.reviews})</span>
        </span>
      </div>

      <h3 className="mt-5 text-[27px] font-bold leading-[34px] tracking-[-0.01em] text-[#2b2757]">
        {pkg.title}
      </h3>
      <p className="mt-[11px] text-[20px] leading-7 text-[#7581a0]">{pkg.description}</p>

      <div className="mt-8 flex items-center justify-between">
        <span className="inline-flex items-center gap-3 text-[16px] text-[#6b7694]">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-[#e6f0fb] text-[15px] text-[#5b6b8c]">
            {pkg.provider[0]}
          </span>
          <span className="inline-flex items-center gap-2">
            {pkg.provider}
            <ShieldCheck className="h-4 w-4 text-[#5e9c7f]" />
          </span>
        </span>
        <span className="inline-flex items-center gap-2 text-[14px] text-[#6b7694]">
          <Clock className="h-[19px] w-[19px]" />
          {pkg.duration}
        </span>
      </div>

      <div className="mt-7 border-t border-[#dbe3ee]" />

      <div className="mt-[27px] flex items-center justify-between">
        <p className="text-[#2b2757]">
          <span className="text-[32px] font-bold tracking-[-0.01em]">৳ {pkg.price}</span>
          <span className="ml-1.5 text-[16px] text-[#7581a0]">/ package</span>
        </p>
        <button
          type="button"
          className="inline-flex h-[53px] items-center gap-3 rounded-xl border border-[#d6dcea] bg-white px-5 text-[17px] font-medium text-[#2b2757] transition hover:bg-[#f4f6fc] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          View package
          <Arrow className="h-[22px] w-[22px]" />
        </button>
      </div>
    </div>
  </article>
);

/* ---------- Section ---------- */
export default function Packages() {
  return (
    <section id="packages" className="bg-[#f6f8fe] px-8 pb-16 pt-12 font-sans">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[39.5px] font-bold leading-[46px] tracking-[-0.02em] text-[#2b2757]">
          Good people. Ready-to-go help.
        </h2>
        <p className="mt-2.5 text-[18.5px] leading-6 text-[#7581a0]">
          Thoughtful packages from providers we've personally verified.
        </p>
        <a
          href="#marketplace"
          className="mt-[22px] inline-flex items-center gap-6 text-[18.5px] font-medium leading-7 text-[#3b4a86] hover:underline"
        >
          Explore marketplace
          <Arrow className="h-6 w-6" />
        </a>

        <div className="mt-[29px] grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
