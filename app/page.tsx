import Navbar from "@/components/Navbar";
import HeroSplit from "@/components/HeroSplit";
import CollectionSpotlight from "@/components/CollectionSpotlight";
import BrowseByRoom from "@/components/BrowseByRoom";
import FeaturedProduct from "@/components/FeaturedProduct";
import MoreProducts from "@/components/MoreProducts";
import ContactNewsletter from "@/components/ContactNewsletter";
import InstagramStrip from "@/components/InstagramStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      <div id="home">
        <HeroSplit />
      </div>

      <div id="solutions">
        <BrowseByRoom />
      </div>

      {/* Featured Instance 1 */}
      <FeaturedProduct
        line1="About Us"
        line2=""
        body="With contoured lumbar support and height-adjustable arms, built for all-day comfort in commercial workspaces."
        image="/images/products/tan-leather-accent-lounge-chair.jpg"
        imageLeft={false}
      />

      <MoreProducts />

      <div id="trade">
        <ContactNewsletter />
      </div>

      <InstagramStrip />

      <Footer />
    </main>
  );
}
