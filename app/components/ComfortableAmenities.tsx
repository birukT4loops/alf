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
  { src: IMAGES.patio, alt: "The covered backyard patio under string lights", label: "Covered Patio", cell: "lg:col-span-2" },
  { src: IMAGES.privateRoom, alt: "A fully furnished private bedroom with warm bedside lighting", label: "Private Bedroom", cell: "lg:row-span-2" },
  { src: IMAGES.kitchen, alt: "The kitchen where home-cooked meals are prepared", label: "Kitchen", cell: "" },
  { src: IMAGES.diningRoom, alt: "The dining room set for a home-cooked meal", label: "Dining Room", cell: "" },
  { src: IMAGES.bathroom, alt: "An accessible bathroom with roll-in shower and grab bars", label: "Accessible Bath", cell: "" },
  { src: IMAGES.laundry, alt: "The laundry room used for daily housekeeping", label: "Laundry", cell: "" },
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

        {/* Bento grid — the portrait bedroom shot gets a tall cell so it isn't cropped */}
        <div className="mt-14 grid grid-cols-2 auto-rows-[160px] gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[215px] lg:grid-flow-row-dense">
          {shots.map((s) => (
            <figure
              key={s.label}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm ${s.cell}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
              <figcaption
                className="absolute bottom-3 left-3 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em]"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
              >
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
