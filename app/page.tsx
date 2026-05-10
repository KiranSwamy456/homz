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

      {/* <CollectionSpotlight
        image="/images/bedroom-new-collection.png"
        eyebrow="Bedroom New Collectionsss"
        title="2024–25 New Collection"
        body="Discover our latest designs emphasizing ergonomics, sustainable materials, and timeless aesthetics for commercial spaces."
        ctaText="ENQUIRE NOW"
        imageLeft={true}
      /> */}

      <div id="solutions">
        <BrowseByRoom />
      </div>

      {/* Featured Instance 1 */}
      <FeaturedProduct
        line1="Executive Ergonomic"
        line2="Office Chair"
        body="With contoured lumbar support and height-adjustable arms, built for all-day comfort in commercial workspaces."
        image="/images/product-chair.png"
        imageLeft={false}
      />

      {/* Featured Instance 2 */}
      {/* <FeaturedProduct
        line1="Premium Conference"
        line2="Meeting Table"
        body="Solid wood veneer with scratch-resistant finish — pairs elegance with durability for boardrooms of all sizes."
        image="/images/product-table.png"
        imageLeft={true}
      /> */}

      <MoreProducts />

      <div id="trade">
        <ContactNewsletter />
      </div>

      <InstagramStrip />

      <Footer />
    </main>
  );
}
