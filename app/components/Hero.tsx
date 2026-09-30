import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Ornament from "./Ornament";
import { PHONE_PRIMARY } from "../lib/contact";
import { IMAGES } from "../lib/images";

const pillars = [
  {
    title: "Private & Companion Rooms",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M12 17.5c-1.7-1.3-3-2.6-3-3.9a1.5 1.5 0 013-.5 1.5 1.5 0 013 .5c0 1.3-1.3 2.6-3 3.9z" />
      </svg>
    ),
  },
  {
    title: "Personalized Care 24 Hours a Day",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20v-1a5 5 0 015-5h2" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M13.5 20v-.8a3.8 3.8 0 013.8-3.8h.4a3.8 3.8 0 013.8 3.8v.8" />
      </svg>
    ),
  },
  {
    title: "Faith, Dignity & Respect Always",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13.5c0-2 1.6-3.6 3.6-3.6.9 0 1.7.3 2.3.9L12 12.5l2.1-1.7c.6-.6 1.4-.9 2.3-.9 2 0 3.6 1.6 3.6 3.6" />
        <path d="M20 13.5c0 3.3-3.6 5.4-8 8.2-4.4-2.8-8-4.9-8-8.2" />
        <path d="M12 2v6" />
        <path d="M9.5 4.5h5" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="w-full">
      {/* Cover panel */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#2a2a2a" }}>
        <Image
          src={IMAGES.exterior}
          alt="The Oakridge Manor Living home at golden hour, with its front garden and sign"
          fill
          preload
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          // No green tint over the photo — just a neutral scrim, so the brick and
          // sky keep their own colour while white type stays readable.
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.52) 45%, rgba(0,0,0,0.62) 100%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center">
          {/* The navy/green logo needs a light ground, so it sits on a cream plate */}
          <div
            className="rounded-2xl px-7 py-5 md:px-9 md:py-6 shadow-2xl"
            style={{ backgroundColor: "var(--cream)", border: "1px solid rgba(211,166,58,0.45)" }}
          >
            <Logo href={null} className="h-24 md:h-32 w-auto" sizes="200px" eager />
          </div>

          <Ornament color="#ffffff" className="my-8" />

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Compassionate Care.
            <br />
            Comfortable Living.
          </h1>
          <p
            className="serif-italic text-4xl md:text-5xl lg:text-6xl mt-3 leading-tight"
            style={{ color: "#ffffff" }}
          >
            A Place to Call Home.
          </p>

          <p
            className="text-white text-base md:text-lg leading-relaxed mt-8 max-w-xl"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            A boutique residential assisted living home where every resident is
            treated like family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/contact" className="btn-gold justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule Your Personal Tour
            </Link>
            <a href={PHONE_PRIMARY.href} className="btn-outline-light justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PHONE_PRIMARY.label}
            </a>
          </div>
        </div>
      </div>

      {/* Three-pillar band, as on the brochure cover */}
      <div style={{ backgroundColor: "var(--forest-dark)" }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-center text-center px-4 ${
                i > 0 ? "sm:border-l" : ""
              }`}
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              <span style={{ color: "#ffffff" }}>{p.icon}</span>
              <p
                className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold text-white mt-4 leading-relaxed max-w-[190px]"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
              >
                {p.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
