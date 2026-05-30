import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { QuoteCartProvider } from "@/lib/store/quoteCart";
import QuoteCartDrawer from "@/components/QuoteCartDrawer";
import MobileStickyBar from "@/components/MobileStickyBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOMZindia — Premium Customized Sofas & Furniture | Hyderabad",
  description:
    "HomzIndia is one of Hyderabad's leading customized sofa and furniture manufacturers. Premium leather sofas, recliner sofas, beds, and custom furniture for homes, offices, hotels, and institutions.",
  keywords:
    "customized sofas Hyderabad, pure leather sofa, recliner sofa, furniture manufacturer Hyderabad, B2B furniture, HomzIndia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${playfair.variable}`}
    >
      {/*
        QuoteCartProvider is a client component.
        children (pages) are passed as props — they remain server components
        and are not converted to client components. This is the standard
        Next.js App Router pattern for client providers.
      */}
      <body
        className="font-sans antialiased text-[#1A1A1A] bg-white pb-16 md:pb-0"
        suppressHydrationWarning
      >
        <QuoteCartProvider>
          {children}
          {/* Global drawer — rendered once, controlled by QuoteCartContext */}
          <QuoteCartDrawer />
          {/* Mobile sticky bar — hidden on md+ */}
          <MobileStickyBar />
        </QuoteCartProvider>
      </body>
    </html>
  );
}
