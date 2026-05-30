// Reusable section header: eyebrow label + heading + optional subtext

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  /** Pass true when rendered on a dark/teal background */
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <p
          className={`font-sans text-[10px] uppercase tracking-widest mb-3 ${
            light ? "text-white/55" : "text-[#888]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl font-normal leading-tight ${
          light ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`font-sans text-base md:text-lg mt-4 leading-relaxed ${
            light ? "text-white/70" : "text-[#666]"
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
