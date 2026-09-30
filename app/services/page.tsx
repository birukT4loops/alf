import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const services = [
  {
    title: "Personal Care Assistance",
    subtitle: "Personalized Support for Everyday Living",
    image: IMAGES.bathroom,
    intro: "Our goal is to help residents remain as independent as possible while providing the right level of assistance for daily life.",
    items: [
      "Bathing",
      "Dressing",
      "Grooming",
      "Personal hygiene",
      "Mobility assistance",
      "Medication reminders",
      "Toileting assistance",
      "Daily wellness monitoring",
    ],
  },
  {
    title: "Housekeeping & Laundry",
    subtitle: "Maintenance-Free Living",
    image: IMAGES.privateRoom,
    intro: "Residents can enjoy a maintenance-free lifestyle with professional housekeeping and laundry services.",
    items: [
      "Housekeeping services",
      "Linen service",
      "Personal laundry",
      "Room maintenance",
    ],
  },
  {
    title: "Dining Services",
    subtitle: "Nutritious & Delicious Meals",
    image: IMAGES.diningRoom,
    intro: "Residents enjoy freshly prepared meals in a welcoming, restaurant-style dining experience.",
    items: [
      "Three nutritious meals every day",
      "Healthy snacks",
      "Diet accommodations",
      "Restaurant-style dining experience",
    ],
  },
  {
    title: "Health & Wellness",
    subtitle: "Focused on Well-Being",
    image: IMAGES.careRoom,
    intro: "Our wellness-focused approach keeps residents healthy, active, and engaged.",
    items: [
      "Medication management",
      "Health monitoring",
      "Coordination with healthcare providers",
      "Wellness activities",
      "Fitness programs",
    ],
  },
  {
    title: "Social & Recreational Activities",
    subtitle: "Stay Active & Connected",
    image: IMAGES.patio,
    intro: "Every day offers opportunities for fun and connection through a vibrant activities calendar.",
    items: [
      "Exercise classes",
      "Arts and crafts",
      "Music programs",
      "Movie nights",
      "Card and board games",
      "Holiday celebrations",
      "Educational activities",
      "Community outings",
      "Gardening",
      "Group gatherings",
    ],
  },
];

const amenities = [
  "Spacious private and semi-private rooms",
  "Comfortable common living areas",
  "Beautiful outdoor spaces",
  "Walking paths",
  "Community dining room",
  "Activity rooms",
  "Family visiting areas",
  "Wi-Fi access",
  "Housekeeping",
  "Laundry service",
  "Transportation coordination",
  "Emergency response systems",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Assisted Living Services" subtitle="Personalized Support for Everyday Living" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="section-badge mb-4">Our Services</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            Everything You Need to Thrive
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            At Oakridge Manor Living, our goal is to help residents remain as independent as possible while providing the right level of assistance for daily life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {services.map((sec, i) => (
            <div
              key={sec.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
              <div
                className={`relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ minHeight: "360px" }}
              >
                <Image
                  src={sec.image}
                  alt={sec.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="section-badge mb-2">{sec.subtitle}</p>
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {sec.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {sec.intro}
                </p>
                <ul className="flex flex-col gap-3">
                  {sec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-badge mb-4">Amenities</p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
            >
              Everything You Need to Feel at Home
            </h2>
            <p
              className="text-base leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              Oakridge Manor Living offers thoughtfully designed amenities that support both comfort and convenience.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {amenities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white rounded"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "var(--navy)" }}>
        <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Experience the Oakridge Manor Living Difference
        </h2>
        <p className="text-white mb-8 max-w-xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
          Discover a welcoming assisted living community where compassionate care, personalized support, and meaningful connections come together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-gold">Schedule a Tour</Link>
          <Link href="/contact" className="btn-outline-dark" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
