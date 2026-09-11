import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const photos = [
  { src: IMAGES.houseExterior, alt: "Oakridge Manor Living exterior at sunset", category: "Exterior", caption: "Our beautiful home at dusk" },
  { src: IMAGES.houseEntrance, alt: "Grand entrance with arched doorway", category: "Front Entrance", caption: "The welcoming front entrance" },
  { src: IMAGES.commonArea, alt: "Spacious common living area with fireplace and built-in shelving", category: "Common Area", caption: "Bright, open common area with fireplace & built-ins" },
  { src: IMAGES.diningRoom, alt: "Formal dining room", category: "Dining Room", caption: "Elegant formal dining room" },
  { src: IMAGES.breakfastNook, alt: "Bright breakfast nook", category: "Kitchen & Dining", caption: "Bright, casual dining nook" },
  { src: IMAGES.livingRoom, alt: "Cozy living room with fireplace", category: "Living Room", caption: "Cozy living room with warm fireplace" },
  { src: IMAGES.bedroom, alt: "Private resident bedroom", category: "Private Room", caption: "Spacious private resident room" },
  { src: IMAGES.houseExterior, alt: "Lush landscaping and lawn", category: "Grounds", caption: "Meticulously maintained grounds" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Photo Gallery" subtitle="Explore Our Community" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-badge mb-4">A Look Inside</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            See Oakridge Manor Living for Yourself
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Browse our photo gallery to get a feel for the warm, beautifully appointed spaces and
            vibrant community life that await you at Oakridge Manor Living.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="group overflow-hidden relative bg-gray-100">
              <div className="relative" style={{ height: "300px" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
                    {photo.caption}
                  </div>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 text-[10px] uppercase tracking-widest font-semibold text-white" style={{ backgroundColor: "rgba(95,150,36,0.85)" }}>
                {photo.category}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ backgroundColor: "var(--navy)" }}>
        <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          The Best View Is In Person
        </h2>
        <p className="text-white mb-8 max-w-xl mx-auto text-sm" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
          Photos only tell part of the story. Come see the warmth, the people, and the lifestyle that
          make Oakridge Manor Living truly exceptional.
        </p>
        <Link href="/contact" className="btn-gold">Schedule a Tour</Link>
      </section>
    </>
  );
}
