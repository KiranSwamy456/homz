import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5F0EB] px-8 pt-24 md:pt-32 pb-12 md:pb-16" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <div className="relative w-48 h-16 md:w-64 md:h-20 mb-8">
              <Image 
                src="/images/logo-1.jfif" 
                alt="HOMZindia Logo" 
                fill 
                className="object-contain object-left" 
              />
            </div>
            <address className="not-italic font-sans text-sm md:text-base text-[#666] leading-loose">
              <p>123 Business Park, Block A</p>
              <p>Mumbai, MH 400001</p>
              <p>India</p>
              <p className="mt-2">+91 98765 43210</p>
              <a href="mailto:b2b@homzindia.in" className="text-[#1B7E8C] hover:text-[#0f5a66] transition-colors">
                b2b@homzindia.in
              </a>
            </address>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-sans text-xs md:text-sm font-bold tracking-wider uppercase mb-6 text-[#1A1A1A]">
              Information
            </h4>
            <ul className="space-y-4 font-sans text-sm md:text-base text-[#666]">
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Trade Enquiry</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Price Lists</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Quote Request</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Delivery Info</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Warranty & FAQ</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-sans text-xs md:text-sm font-bold tracking-wider uppercase mb-6 text-[#1A1A1A]">
              About Us
            </h4>
            <ul className="space-y-4 font-sans text-sm md:text-base text-[#666]">
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Our Story</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Manufacturing</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Sustainability</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Our Team</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Case Studies</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-sans text-xs md:text-sm font-bold tracking-wider uppercase mb-6 text-[#1A1A1A]">
              Catalogue
            </h4>
            <ul className="space-y-4 font-sans text-sm md:text-base text-[#666]">
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Seating</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Desks & Tables</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Storage</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Outdoor</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">New Arrivals</Link></li>
              <li><Link href="/" className="hover:text-[#1B7E8C] transition-colors">Featured Collection</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ddd] pt-8 flex flex-col items-center">
          <p className="font-sans text-sm md:text-base text-[#aaa] text-center tracking-wide">
            <Link href="/" className="hover:text-[#888] transition-colors">Privacy Policy</Link> / © {new Date().getFullYear()} HOMZindia / All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
