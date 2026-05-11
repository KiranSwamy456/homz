import Image from "next/image";
import Link from "next/link";

interface FeaturedProductProps {
  line1: string;
  line2: string;
  body: string;
  image: string;
  imageLeft?: boolean;
}

export default function FeaturedProduct({
  line1,
  line2,
  body,
  image,
  imageLeft = true,
}: FeaturedProductProps) {
  const TextContent = (
    <div
      className={`bg-[#F5F0EB] flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 ${
        imageLeft ? "order-2 md:order-2" : "order-2 md:order-1"
      }`}
    >
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1A1A1A] leading-tight">
        {line1}
      </h2>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F47920] mb-6">
        {line2}
      </h2>
      <p className="font-sans text-base md:text-lg text-[#666] leading-relaxed max-w-md mb-8">
        {body}
      </p>
      <div>
        <Link
          href="#"
          className="inline-block border border-[#1A1A1A] font-sans text-[10px] font-bold tracking-widest uppercase px-5 py-2 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
        >
          REQUEST A QUOTE
        </Link>
      </div>
    </div>
  );

  const ImageContent = (
    <div
      className={`relative h-[60vh] md:h-auto min-h-[400px] ${
        imageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
      }`}
    >
      <Image
        src={image}
        alt={`${line1} ${line2}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[90vh]">
      {TextContent}
      {ImageContent}
    </section>
  );
}
