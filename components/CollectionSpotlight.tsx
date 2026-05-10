import Image from "next/image";
import Link from "next/link";

interface CollectionSpotlightProps {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  ctaText?: string;
  imageLeft?: boolean;
}

export default function CollectionSpotlight({
  image,
  eyebrow,
  title,
  body,
  ctaText = "ENQUIRE NOW",
  imageLeft = true,
}: CollectionSpotlightProps) {
  const TextComponent = (
    <div className={`bg-[#F5F0EB] flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 ${
        imageLeft ? "order-2 md:order-2" : "order-2 md:order-1"
      }`}>
      <span className="font-serif italic text-xl md:text-2xl text-[#F47920]">
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mt-2 text-[#1A1A1A]">
        {title}
      </h2>
      <p className="font-sans text-sm md:text-base text-[#666] leading-relaxed max-w-md mt-6 mb-8">
        {body}
      </p>
      <div>
        <Link
          href="/enquire"
          className="inline-block border border-[#1A1A1A] font-sans text-[10px] font-bold tracking-widest uppercase px-5 py-2 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );

  const ImageComponent = (
    <div className={`relative h-[60vh] md:h-auto min-h-[400px] ${
        imageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
      }`}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[90vh]">
      {TextComponent}
      {ImageComponent}
    </section>
  );
}
