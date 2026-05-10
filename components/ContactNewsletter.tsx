"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thanks for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="bg-[#F5F0EB] grid grid-cols-1 md:grid-cols-3 min-h-[600px] md:min-h-[700px]" id="contact">
      {/* Left: Contacts */}
      <div className="flex flex-col items-center justify-center p-16 md:p-24 text-center order-2 md:order-1">
        <h2 className="font-serif text-4xl md:text-5xl font-normal mb-8 text-[#1A1A1A]">
          Contacts
        </h2>
        <address className="not-italic font-sans text-base md:text-lg text-[#666] leading-loose">
          <p>HOMZindia Corporate HQ</p>
          <p>123 Business Park, Block A</p>
          <p>Mumbai, MH 400001</p>
          <p className="mt-2 text-[#1B7E8C] font-semibold">+91 98765 43210</p>
          <p className="text-[#1B7E8C]">b2b@homzindia.in</p>
        </address>
        <div className="flex gap-6 mt-8">
          <a href="#" className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#F47920] transition-colors">
            Instagram
          </a>
          <a href="#" className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#F47920] transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#F47920] transition-colors">
            YouTube
          </a>
        </div>
      </div>

      {/* Center: Image */}
      <div className="relative h-[500px] md:h-auto order-1 md:order-2">
        <Image
          src="/images/lifestyle-contact.png"
          alt="Modern Commercial Furniture Lifestyle"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Right: Newsletter */}
      <div className="flex flex-col items-center justify-center p-16 md:p-24 text-center order-3 md:order-3">
        <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-[#1A1A1A]">
          Newsletter
        </h2>
        <p className="font-sans text-base md:text-lg text-[#666] mb-10 max-w-[280px] leading-relaxed">
          Sign up to receive trade offers, new collections, and project inspiration.
        </p>
        <form onSubmit={handleSubscribe} className="w-full max-w-[240px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
            className="w-full border border-[#ddd] bg-white px-4 py-3.5 text-sm outline-none placeholder:text-[#888] focus:border-[#1B7E8C] focus:ring-1 focus:ring-[#1B7E8C] transition-all text-[#1A1A1A] rounded-sm shadow-sm"
          />
          <button
            type="submit"
            className="w-full bg-[#1B7E8C] text-white text-xs font-bold tracking-widest uppercase py-4 mt-6 hover:bg-[#0f5a66] transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="font-sans text-[10px] text-[#aaa] mt-4 uppercase tracking-wider">
          We don't send spam
        </p>
      </div>
    </section>
  );
}
