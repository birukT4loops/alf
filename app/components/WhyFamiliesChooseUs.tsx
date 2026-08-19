import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { IMAGES } from "../lib/images";

const reasons = [
  "Boutique Residential Home",
  "Small Resident-to-Caregiver Ratio",
  "Personalized Care Plans",
  "Experienced & Compassionate Staff",
  "Warm, Family Atmosphere",
  "Beautiful & Comfortable Home",
  "Safe & Secure Environment",
  "Family Communication",
  "Licensed & Compliant Care",
];

export default function WhyFamiliesChooseUs() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Photo + mission block */}
        <div>
          <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ height: "340px" }}>
            <Image
              src={IMAGES.commonArea}
              alt="A caregiver sharing a laugh with a resident over coffee"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div
            className="rounded-b-lg px-8 py-8 text-center -mt-1"
            style={{ backgroundColor: "var(--forest)" }}
          >
            <p className="serif-italic text-2xl md:text-3xl" style={{ color: "var(--gold-light)" }}>
              Our Mission
            </p>
            <p
              className="text-white/85 text-sm md:text-base leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
            >
              To provide compassionate, personalized care in a loving home environment
              where seniors can thrive with dignity, independence, and peace of mind.
            </p>
          </div>
        </div>

        {/* Checklist */}
        <div>
          <SectionHeading title="Why Families Choose Us" align="left" />
          <ul className="mt-8 space-y-4">
            {reasons.map((r) => (
              <li key={r} className="flex items-center gap-4">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span
                  className="text-base"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
                >
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
