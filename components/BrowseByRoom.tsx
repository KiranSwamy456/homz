import Image from "next/image";

const solutions = [
  { label: "Office", image: "/images/solution-office.png" },
  { label: "Hospitality", image: "/images/solution-hospitality.png" },
  { label: "Restaurant", image: "/images/solution-restaurant.png" },
  { label: "Education", image: "/images/solution-education.png" },
];

export default function BrowseByRoom() {
  return (
    <section className="bg-[#1B7E8C] py-20 md:py-24 px-8 relative overflow-hidden">
      {/* Decorative Botanical SVG - top left */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 text-white opacity-5 -translate-x-1/4 -translate-y-1/4 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" />
      </svg>
      {/* Decorative Botanical SVG - bottom right */}
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 text-white opacity-5 translate-x-1/4 translate-y-1/4 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-white text-center">
          Browse by Solution
        </h2>
        <p className="font-sans text-base md:text-lg text-white/70 text-center mt-3 mb-14 max-w-md mx-auto">
          An easy way to explore furniture for the space you need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((sol, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-[#0f5a66]">
                <Image
                  src={sol.image}
                  alt={sol.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-sans text-sm md:text-base text-white text-center mt-4 tracking-wide uppercase font-medium">
                {sol.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
