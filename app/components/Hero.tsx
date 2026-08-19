import Image from "next/image";
import Link from "next/link";
import Ornament from "./Ornament";
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
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--forest)" }}>
        <Image
          src={IMAGES.houseExterior}
          alt="The Oakridge Manor Living residence at dusk"
          fill
          preload
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,47,30,0.92) 0%, rgba(20,67,44,0.82) 45%, rgba(13,47,30,0.94) 100%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center">
          {/* Logo lockup */}
          <Image
            src="/LOGOmain.png"
            alt=""
            width={200}
            height={133}
            preload
            className="object-contain"
            style={{ width: "clamp(140px, 22vw, 200px)", height: "auto" }}
          />
          <h1
            className="display-caps text-white text-5xl md:text-6xl lg:text-7xl mt-4"
            style={{ letterSpacing: "0.06em" }}
          >
            Oakridge
          </h1>
          <p
            className="display-caps text-2xl md:text-3xl mt-1"
            style={{ color: "var(--gold-light)", letterSpacing: "0.24em" }}
          >
            Manor Living
          </p>
          <p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.42em] text-white/70 mt-3"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Residential Assisted Living
          </p>

          <Ornament color="var(--gold-light)" className="my-8" />

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Compassionate Care.
            <br />
            Comfortable Living.
          </h2>
          <p
            className="serif-italic text-4xl md:text-5xl lg:text-6xl mt-3 leading-tight"
            style={{ color: "var(--gold-light)" }}
          >
            A Place to Call Home.
          </p>

          <p
            className="text-white/80 text-base md:text-lg leading-relaxed mt-8 max-w-xl"
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
            <a href="tel:+19725550123" className="btn-outline-light justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (972) 555-0123
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
              style={{ borderColor: "rgba(215,170,60,0.25)" }}
            >
              <span style={{ color: "var(--gold-light)" }}>{p.icon}</span>
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
