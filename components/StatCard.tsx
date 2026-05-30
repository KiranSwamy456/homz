// Reusable stat card — large number value + label + optional sublabel

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  /** Pass true when rendered on a dark/teal background */
  light?: boolean;
}

export default function StatCard({ value, label, sublabel, light = false }: StatCardProps) {
  return (
    <div className={`text-center py-8 px-4 ${light ? "border-white/10" : "border-[#E0EAEC]"}`}>
      <p
        className={`font-serif text-4xl md:text-5xl font-normal ${
          light ? "text-white" : "text-[#1B7E8C]"
        }`}
      >
        {value}
      </p>
      <p
        className={`font-sans text-[11px] font-bold uppercase tracking-wider mt-3 ${
          light ? "text-white/80" : "text-[#1A1A1A]"
        }`}
      >
        {label}
      </p>
      {sublabel && (
        <p
          className={`font-sans text-xs mt-1 ${
            light ? "text-white/45" : "text-[#888]"
          }`}
        >
          {sublabel}
        </p>
      )}
    </div>
  );
}
