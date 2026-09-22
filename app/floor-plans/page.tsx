import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const plans = [
  {
    type: "Studio",
    sqft: "Up to 550 sq ft",
    price: "Starting at $3,800/mo",
    image: IMAGES.privateRoom,
    features: [
      "Open-concept living area",
      "Full private bathroom",
      "Large windows with natural light",
      "Kitchenette with refrigerator",
      "Walk-in closet",
      "Individual climate control",
    ],
    available: true,
  },
  {
    type: "One Bedroom",
    sqft: "Up to 850 sq ft",
    price: "Starting at $4,600/mo",
    image: IMAGES.careRoom,
    features: [
      "Separate bedroom & living room",
      "Full private bathroom",
      "Bay window seating area",
      "Full-size kitchenette",
      "Large walk-in closet",
      "Private patio option",
    ],
    available: true,
  },
  {
    type: "Two Bedroom",
    sqft: "Up to 1,200 sq ft",
    price: "Starting at $6,200/mo",
    image: IMAGES.livingRoom,
    features: [
      "Two spacious bedrooms",
      "Two full bathrooms",
      "Generous living & dining area",
      "Gas fireplace",
      "Built-in shelving",
      "Hardwood flooring",
    ],
    available: false,
  },
];

export default function FloorPlansPage() {
  return (
    <>
      <PageHeader title="Floor Plans" subtitle="Find Your Home" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-badge mb-4">Our Residences</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            Beautifully Appointed Homes
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Every residence at Oakridge Manor Living is thoughtfully designed with upscale finishes,
            abundant natural light, and all the comforts of home. Choose the floor plan that fits
            your lifestyle.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.type} className="bg-white shadow-sm overflow-hidden">
              <div className="relative" style={{ height: "220px" }}>
                <Image
                  src={plan.image}
                  alt={`${plan.type} floor plan`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {!plan.available && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                    Waitlist
                  </div>
                )}
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                  >
                    {plan.type}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest mt-2" style={{ color: "var(--gold)" }}>
                    {plan.sqft}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold mb-5"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {plan.price}
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {plan.features.map((f) => (
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
                <Link href="/contact" className={plan.available ? "btn-primary" : "btn-outline-dark"}>
                  {plan.available ? "Request Info" : "Join Waitlist"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-semibold text-center mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            What&apos;s Included with Every Residence
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "All utilities","Weekly housekeeping","Linen service","Wi-Fi included",
              "Cable TV","24/7 emergency call","Transportation coordination","Concierge services",
              "Fitness center access","Common area access","Maintenance-free living","Parking available",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ backgroundColor: "var(--navy)" }}>
        <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
          Ready to See a Residence?
        </h2>
        <p className="text-white mb-8 max-w-xl mx-auto text-sm" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
          Schedule an in-person tour and walk through one of our available floor plans with a member of our team.
        </p>
        <Link href="/contact" className="btn-gold">Schedule a Tour</Link>
      </section>
    </>
  );
}
