import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const options = [
  {
    title: "Assisted Living",
    description:
      "Our Assisted Living program supports residents who want to maintain their independence while receiving personalized help with daily activities. Our compassionate team is available around the clock to provide just the right level of care.",
    features: [
      "Personalized care plans",
      "Medication management",
      "Bathing & dressing assistance",
      "24/7 licensed staff",
      "Weekly housekeeping",
      "Three chef-prepared meals daily",
    ],
    image: IMAGES.livingRoom,
  },
  {
    title: "Memory Care",
    description:
      "Our Memory Care neighborhood is a secure, purpose-built environment designed specifically for residents living with Alzheimer's or other forms of dementia. Structured routines, sensory programming, and trained specialists create a calm, meaningful day.",
    features: [
      "Secure, dedicated neighborhood",
      "Specialized dementia-trained staff",
      "Structured daily programming",
      "Family support & education",
      "Sensory & music therapy",
      "Safe outdoor walking paths",
    ],
    image: IMAGES.houseEntrance,
  },
  {
    title: "Independent Living",
    description:
      "For active seniors who want the freedom of maintenance-free living with the comfort of community, our Independent Living residences offer the perfect balance. Enjoy resort-style amenities without any of the upkeep.",
    features: [
      "No home maintenance",
      "Full amenity access",
      "Optional dining plan",
      "Social & fitness calendar",
      "Concierge services",
      "Pet-friendly residences",
    ],
    image: IMAGES.diningRoom,
  },
  {
    title: "Respite Care",
    description:
      "Short-term stays at Oakridge Manor Living give family caregivers a well-deserved break while ensuring their loved one receives exceptional care in a warm, welcoming setting. All the comforts of our community — available by the day or week.",
    features: [
      "Short-term stays available",
      "Full access to all amenities",
      "Daily activities & programs",
      "Professional care team",
      "Furnished suites available",
      "Seamless transition support",
    ],
    image: IMAGES.breakfastNook,
  },
];

export default function LivingOptionsPage() {
  return (
    <>
      <PageHeader title="Living Options" subtitle="Assisted Living Community" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-badge mb-4">Find Your Fit</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            The Right Level of Care for Every Stage
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            At Oakridge Manor Living, we believe every resident deserves a lifestyle tailored to their unique
            needs. Whether you or your loved one needs light assistance, specialized memory care, or
            simply a vibrant community, we have a home for you.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((opt) => (
            <div key={opt.title} className="bg-white overflow-hidden shadow-sm">
              <div className="relative" style={{ height: "240px" }}>
                <Image
                  src={opt.image}
                  alt={opt.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {opt.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {opt.description}
                </p>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                  {opt.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm"
                      style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ backgroundColor: "var(--navy)" }}>
        <h2
          className="text-3xl font-semibold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Not Sure Which Option Is Right?
        </h2>
        <p
          className="text-white mb-8 max-w-xl mx-auto text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          Our care advisors are happy to walk you through every option and help find the best fit
          for your family. Schedule a personal tour today.
        </p>
        <Link href="/contact" className="btn-gold">Schedule a Tour</Link>
      </section>
    </>
  );
}
