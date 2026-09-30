"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { PHONE_PRIMARY, PHONE_SECONDARY } from "../lib/contact";

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
    <header
      className="w-full border-b shadow-sm"
      style={{ backgroundColor: "var(--cream)", borderColor: "rgba(183,127,11,0.25)" }}
    >
      {/* Top utility bar — serving area + phone, straight off the brochure */}
      <div
        className="w-full px-6 py-2 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 border-b"
        style={{ backgroundColor: "var(--brand-green)", borderColor: "rgba(255,255,255,0.2)" }}
      >
        <p
          className="text-[11px] uppercase tracking-[0.18em] text-center"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "#ffffff" }}
        >
          Serving Allen &middot; Plano &middot; McKinney &middot; Frisco &middot; North Dallas
        </p>
        <div
          className="flex items-center gap-2 sm:gap-3"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <a href={PHONE_PRIMARY.href} className="text-white hover:opacity-80 transition-opacity text-sm font-semibold tracking-wide">
            {PHONE_PRIMARY.label}
          </a>
          <span aria-hidden="true" className="w-px h-3.5" style={{ backgroundColor: "rgba(255,255,255,0.45)" }} />
          <a href={PHONE_SECONDARY.href} className="text-white/85 hover:opacity-80 transition-opacity text-sm tracking-wide">
            {PHONE_SECONDARY.label}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Logo className="h-14 sm:h-[68px] w-auto" sizes="106px" eager />

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[var(--text-dark)] hover:text-brand-green text-[12px] uppercase tracking-widest font-semibold transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-primary hidden xl:inline-flex flex-shrink-0">
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
          className="xl:hidden text-forest p-2"
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
        <div className="xl:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: "var(--cream)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--text-dark)] hover:text-brand-green text-sm uppercase tracking-widest font-semibold transition-colors border-b pb-3"
              style={{ borderColor: "rgba(95,150,36,0.2)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary justify-center mt-2" onClick={() => setMenuOpen(false)}>
            Schedule a Tour
          </Link>
        </div>
      )}
    </header>
  );
}
