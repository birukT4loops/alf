"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full" style={{ backgroundColor: "var(--forest)" }}>
      {/* Top utility bar — serving area + phone, straight off the brochure */}
      <div
        className="w-full px-6 py-2 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 border-b"
        style={{ backgroundColor: "var(--forest-dark)", borderColor: "rgba(215,170,60,0.18)" }}
      >
        <p
          className="text-[11px] uppercase tracking-[0.18em] text-center"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--gold-light)" }}
        >
          Serving Allen &middot; Plano &middot; McKinney &middot; Frisco &middot; North Dallas
        </p>
        <a
          href="tel:+19725550123"
          className="flex items-center gap-2 text-white hover:text-gold-light transition-colors"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold-light)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">(972) 555-0123</span>
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Logo size="md" />

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-white/85 hover:text-gold-light text-[12px] uppercase tracking-widest font-semibold transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-gold hidden xl:inline-flex flex-shrink-0">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Schedule a Tour
        </Link>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: "var(--forest)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/85 hover:text-white text-sm uppercase tracking-widest font-semibold transition-colors border-b pb-3"
              style={{ borderColor: "rgba(215,170,60,0.2)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold justify-center mt-2" onClick={() => setMenuOpen(false)}>
            Schedule a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
