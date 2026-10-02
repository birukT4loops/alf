import Link from "next/link";
import { PHONE_PRIMARY } from "../lib/contact";

// Open house: Friday 2 and Saturday 3 October 2026, 10 AM to 7 PM both days.
// The page is statically generated, so this date is checked at build time: the
// first deploy after the event drops the banner on its own. Change the dates
// here (and the copy below) for the next open house, or delete the component.
const EVENT_OVER = new Date("2026-10-04T00:00:00");
// Evaluated once when the module loads (build time for this static page),
// never during render.
const EVENT_PASSED = Date.now() >= EVENT_OVER.getTime();

export default function OpenHouseBanner() {
  if (EVENT_PASSED) return null;

  return (
    <section
      aria-labelledby="open-house-heading"
      className="px-6 py-8 md:py-10"
      style={{ backgroundColor: "var(--gold-light)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-center lg:text-left">
        {/* Calendar mark */}
        <div
          className="flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-sm"
          style={{ backgroundColor: "var(--text-dark)" }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.18em] text-white"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Oct
          </span>
          <span
            className="text-xl font-bold leading-none text-white"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            2&ndash;3
          </span>
        </div>

        <div className="flex-1">
          <p
            className="text-[11px] uppercase tracking-[0.22em] font-bold mb-1"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
          >
            You&apos;re Invited
          </p>
          <h2
            id="open-house-heading"
            className="display-caps text-2xl md:text-3xl"
            style={{ color: "var(--text-dark)" }}
          >
            Open House &mdash; Friday, October 2 &amp; Saturday, October 3
          </h2>
          <p
            className="inline-flex items-center gap-2 mt-3 text-sm md:text-base font-bold"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9.5" />
              <path d="M12 7v5l3 2" />
            </svg>
            10 AM &ndash; 7 PM, both days
          </p>
          <p
            className="text-sm md:text-base mt-2 leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
          >
            Tour the home, meet our care team, and see the private and companion rooms
            we have available.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <Link href="/contact" className="btn-primary justify-center">
            Reserve Your Visit
          </Link>
          <a
            href={PHONE_PRIMARY.href}
            className="text-sm font-bold whitespace-nowrap hover:opacity-75 transition-opacity"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
          >
            or call {PHONE_PRIMARY.label}
          </a>
        </div>
      </div>
    </section>
  );
}
