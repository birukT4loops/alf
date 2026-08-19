import Link from "next/link";
import Logo from "./Logo";
import Ornament from "./Ornament";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--forest-dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col items-center text-center">
          <Logo size="lg" />
          <p
            className="text-[10px] uppercase tracking-[0.42em] text-white/55 mt-3"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Residential Assisted Living
          </p>
          <Ornament color="var(--gold-light)" className="mt-6" />
          <p className="serif-italic text-2xl md:text-3xl mt-6" style={{ color: "var(--gold-light)" }}>
            Where Compassion Feels Like Home.
          </p>
        </div>

        <div
          className="mt-12 pt-10 border-t grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left"
          style={{ borderColor: "rgba(215,170,60,0.2)", fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          {/* Contact */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: "var(--gold-light)" }}>
              Get in Touch
            </h3>
            <a href="tel:+19725550123" className="block text-white/75 hover:text-white text-sm transition-colors">
              (972) 555-0123
            </a>
            <a
              href="mailto:info@oakridgemanorliving.com"
              className="block text-white/75 hover:text-white text-sm mt-2 transition-colors break-all"
            >
              info@oakridgemanorliving.com
            </a>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: "var(--gold-light)" }}>
              Visit Us
            </h3>
            <address className="not-italic text-white/75 text-sm leading-relaxed">
              2421 London Dr
              <br />
              Plano, TX 75025
            </address>
            <p className="text-white/50 text-xs mt-2">
              Serving Allen &middot; Plano &middot; McKinney &middot; Frisco &middot; North Dallas
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: "var(--gold-light)" }}>
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Schedule a Tour", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/75 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(215,170,60,0.15)" }}
        >
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Oakridge Manor Living. All rights reserved.
          </p>
          <a
            href="#"
            aria-label="Oakridge Manor Living on Facebook"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--gold)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
