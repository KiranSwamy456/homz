// Reusable feature card — icon + title + body
// Used in About (Why HomzIndia), Manufacturing, Trade pages

import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  body: string;
  /** Pass true when rendered on a dark/teal background */
  light?: boolean;
}

export default function FeatureCard({ Icon, title, body, light = false }: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-sm transition-shadow hover:shadow-md ${
        light ? "bg-white/10 hover:bg-white/15" : "bg-[#F5F0EB]"
      }`}
    >
      <div
        className={`mb-4 w-10 h-10 flex items-center justify-center ${
          light ? "text-[#F47920]" : "text-[#1B7E8C]"
        }`}
      >
        <Icon className="w-7 h-7" strokeWidth={1.5} />
      </div>
      <h3
        className={`font-serif text-lg font-normal mb-2 ${
          light ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`font-sans text-sm leading-relaxed ${
          light ? "text-white/65" : "text-[#666]"
        }`}
      >
        {body}
      </p>
    </div>
  );
}
