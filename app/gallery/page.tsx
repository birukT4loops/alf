import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const photos = [
  { src: IMAGES.livingRoom, alt: "Living room with fireplace, built-in shelving and a view to the entry", category: "Living Room", caption: "The living room, with fireplace and built-ins" },
  { src: IMAGES.patio, alt: "Covered backyard patio under string lights at dusk", category: "Outdoors", caption: "The covered patio, strung with lights" },
  { src: IMAGES.privateRoom, alt: "Furnished private bedroom with a queen bed and reading chair", category: "Private Room", caption: "A furnished private bedroom" },
  { src: IMAGES.careRoom, alt: "Resident room with an adjustable care bed beside a sunny window", category: "Care Room", caption: "A care room with an adjustable bed" },
  { src: IMAGES.diningRoom, alt: "Dining room set for a meal, with butler's pantry alongside", category: "Dining Room", caption: "Where residents share home-cooked meals" },
  { src: IMAGES.kitchen, alt: "Kitchen with granite counters and breakfast bar seating", category: "Kitchen", caption: "The kitchen and breakfast bar" },
  { src: IMAGES.bathroom, alt: "Accessible bathroom with roll-in shower, grab bars and shower chair", category: "Accessible Bath", caption: "Roll-in shower, grab bars and shower seating" },
  { src: IMAGES.office, alt: "Office with seating where families meet the care team", category: "Our Office", caption: "Where families meet the care team" },
  { src: IMAGES.exterior, alt: "The Oakridge Manor Living home at golden hour", category: "Exterior", caption: "Our home, on a quiet residential street" },
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
            <figure key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm bg-gray-100">
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
                    {photo.caption}
                  </div>
                </div>
              </div>
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold text-white backdrop-blur-sm" style={{ backgroundColor: "rgba(95,150,36,0.9)" }}>
                {photo.category}
              </div>
            </figure>
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
