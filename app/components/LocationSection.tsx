import Link from "next/link";
import SectionHeading from "./SectionHeading";

const contacts = [
  {
    label: "(972) 555-0123",
    href: "tel:+19725550123",
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
  },
  {
    label: "info@oakridgemanorliving.com",
    href: "mailto:info@oakridgemanorliving.com",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
  },
  {
    label: "www.oakridgemanorliving.com",
    href: "https://www.oakridgemanorliving.com",
    icon: (
      <>
        <circle cx="12" cy="12" r="9.5" />
        <path d="M2.5 12h19" />
        <path d="M12 2.5c2.5 2.6 3.8 5.8 3.8 9.5S14.5 18.9 12 21.5C9.5 18.9 8.2 15.7 8.2 12S9.5 5.1 12 2.5z" />
      </>
    ),
  },
  {
    label: "Allen / Plano Area, Texas",
    href: null,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function LocationSection() {
  return (
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: "var(--forest)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Let's Stay Connected" tone="dark" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact details */}
          <div>
            <ul className="space-y-5">
              {contacts.map((c) => {
                const inner = (
                  <>
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold)", color: "#fff" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {c.icon}
                      </svg>
                    </span>
                    <span
                      className="text-base md:text-lg break-all"
                      style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
                    >
                      {c.label}
                    </span>
                  </>
                );

                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="flex items-center gap-4 text-white hover:text-gold-light transition-colors"
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className="flex items-center gap-4 text-white">{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>

            <address
              className="not-italic text-white/65 text-sm leading-relaxed mt-8 pl-15"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
            >
              2421 London Dr, Plano, TX 75025
              <br />
              Serving Allen &middot; Plano &middot; McKinney &middot; Frisco &middot; North Dallas
            </address>

            <Link href="/contact" className="btn-gold mt-9">
              Schedule Your Personal Tour Today
            </Link>
          </div>

          {/* Map */}
          <div
            className="overflow-hidden rounded-lg shadow-2xl"
            style={{ height: "420px", border: "3px solid var(--gold)" }}
          >
            <iframe
              title="Oakridge Manor Living location map"
              src="https://maps.google.com/maps?q=2421+London+Dr,+Plano,+TX+75025&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
