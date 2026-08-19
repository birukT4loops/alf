import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { IMAGES } from "../lib/images";

export default function WelcomeHome() {
  return (
    <section id="welcome" className="py-20 px-6" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading title="Welcome Home" align="left" />
          <p
            className="text-base md:text-lg leading-relaxed mt-7"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            At Oakridge Manor Living, we believe assisted living should feel like
            home&mdash;not an institution. Our beautiful residential home provides
            personalized care in a peaceful, family-centered environment where every
            resident receives individual attention, dignity, and respect.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed mt-5"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Whether your loved one needs daily assistance or specialized support, our
            compassionate caregivers are here 24 hours a day to provide exceptional care
            while encouraging independence and quality of life.
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ height: "440px" }}>
          <Image
            src={IMAGES.livingRoom}
            alt="Living room with fireplace and comfortable seating at Oakridge Manor Living"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
