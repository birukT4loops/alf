import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { IMAGES } from "../lib/images";

const amenities = [
  "Beautiful Private Bedrooms",
  "Companion Rooms Available",
  "Fully Furnished Rooms",
  "Television & Wi-Fi",
  "Spacious Living Areas",
  "Covered Backyard Patio",
  "Family Visiting Areas",
  "Smoke & Carbon Monoxide Protection",
  "Daily Housekeeping",
  "Beautiful Neighborhood Setting",
];

const shots = [
  { src: IMAGES.bedroom, alt: "A fully furnished private bedroom with warm bedside lighting" },
  { src: IMAGES.diningRoom, alt: "The dining room set for a home-cooked meal" },
  { src: IMAGES.houseEntrance, alt: "The covered outdoor seating area in the backyard" },
];

export default function ComfortableAmenities() {
  return (
    <section id="amenities" className="py-20 px-6" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Comfortable Amenities" />

        <ul className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1">
          {amenities.map((a) => (
            <li key={a} className="flex items-start gap-3 py-2">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span
                className="text-[15px] leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
              >
                {a}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {shots.map((s) => (
            <div
              key={s.alt}
              className="relative rounded-lg overflow-hidden shadow-lg"
              style={{ height: "230px" }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
