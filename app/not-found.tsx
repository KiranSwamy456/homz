import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-8 text-center bg-[#F5F0EB]">
        <h1 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] mb-4">404</h1>
        <p className="font-sans text-lg text-[#666] mb-8">
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1B7E8C] text-white font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#0f5a66] transition-colors"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
