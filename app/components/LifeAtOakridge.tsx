import SectionHeading from "./SectionHeading";

const activities: { label: string; path: React.ReactNode }[] = [
  {
    label: "Music & Sing-Alongs",
    path: (
      <>
        <path d="M9 18V5l11-2v13" />
        <circle cx="6.5" cy="18" r="2.5" />
        <circle cx="17.5" cy="16" r="2.5" />
      </>
    ),
  },
  {
    label: "Movie Afternoons",
    path: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="M2.5 9.5h19M7 5v4.5M12 5v4.5M17 5v4.5" />
      </>
    ),
  },
  {
    label: "Arts & Crafts",
    path: (
      <>
        <path d="M12 3a9 9 0 000 18c1.1 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8h1.6A4.8 4.8 0 0021 10.2C21 6.2 16.9 3 12 3z" />
        <circle cx="7.5" cy="10.5" r="1" />
        <circle cx="12" cy="7.5" r="1" />
        <circle cx="16.5" cy="10.5" r="1" />
      </>
    ),
  },
  {
    label: "Birthday Celebrations",
    path: (
      <>
        <path d="M4 12.5c0-1.4 1.1-2.5 2.5-2.5h11c1.4 0 2.5 1.1 2.5 2.5V20H4z" />
        <path d="M4 15.5c1.6 1.4 2.7 1.4 4 0s2.4-1.4 4 0 2.7 1.4 4 0 2.4-1.4 4 0" />
        <path d="M12 10V6.5" />
        <path d="M12 4.2c.9.6 1.2 1.4 0 2.3-1.2-.9-.9-1.7 0-2.3z" />
      </>
    ),
  },
  {
    label: "Games & Puzzles",
    path: (
      <>
        <path d="M10 3.5a1.8 1.8 0 013.6 0c0 .7-.4 1.1-.4 1.6h3.3v3.3c.5 0 .9-.4 1.6-.4a1.8 1.8 0 010 3.6c-.7 0-1.1-.4-1.6-.4v3.3h-3.3c0 .5.4.9.4 1.6a1.8 1.8 0 01-3.6 0c0-.7.4-1.1.4-1.6H6.7v-3.3c-.5 0-.9.4-1.6.4a1.8 1.8 0 010-3.6c.7 0 1.1.4 1.6.4V5.1h3.3c0-.5-.4-.9-.4-1.6z" />
      </>
    ),
  },
  {
    label: "Holiday Gatherings",
    path: (
      <>
        <rect x="3" y="9" width="18" height="11.5" rx="1.5" />
        <path d="M3 13.5h18M12 9v11.5" />
        <path d="M12 9S9.5 4 7.2 5.2 9.5 9 12 9zM12 9s2.5-5 4.8-3.8S14.5 9 12 9z" />
      </>
    ),
  },
  {
    label: "Walking & Gentle Exercise",
    path: (
      <>
        <circle cx="13" cy="4.5" r="1.8" />
        <path d="M11.5 21l1.3-5.4-2.6-2.3.8-4.5 3.3 1.6 2.4 2.4" />
        <path d="M10 8.8L7.2 10.6 6 14.5" />
        <path d="M12.8 15.6L15.5 21" />
      </>
    ),
  },
  {
    label: "Devotional & Spiritual Support",
    path: (
      <>
        <path d="M12 3v18" />
        <path d="M7.5 8h9" />
      </>
    ),
  },
  {
    label: "Gardening",
    path: (
      <>
        <path d="M12 21v-7" />
        <path d="M12 14c0-3.3-2.4-6-5.5-6 0 3.3 2.4 6 5.5 6z" />
        <path d="M12 14c0-3.9 2.9-7 6.5-7 0 3.9-2.9 7-6.5 7z" />
      </>
    ),
  },
  {
    label: "Family Visits",
    path: (
      <>
        <circle cx="8" cy="8" r="2.6" />
        <circle cx="16.5" cy="9.5" r="2.2" />
        <path d="M2.8 19v-1.2A4.2 4.2 0 017 13.6h2" />
        <path d="M13 19v-1a3.5 3.5 0 013.5-3.5h.5A3.5 3.5 0 0120.5 18v1" />
      </>
    ),
  },
  {
    label: "Reading Time",
    path: (
      <>
        <path d="M12 6.5C10.3 5.2 8.2 4.5 5 4.5v13c3.2 0 5.3.7 7 2 1.7-1.3 3.8-2 7-2v-13c-3.2 0-5.3.7-7 2z" />
        <path d="M12 6.5v13" />
      </>
    ),
  },
  {
    label: "Coffee & Conversation",
    path: (
      <>
        <path d="M18 9h1.2a2.8 2.8 0 010 5.6H18" />
        <path d="M3.5 8.5H18v6.8a4 4 0 01-4 4H7.5a4 4 0 01-4-4z" />
        <path d="M7.5 2.5v3M11 2.5v3M14.5 2.5v3" />
      </>
    ),
  },
];

export default function LifeAtOakridge() {
  return (
    <section id="life" className="py-20 px-6" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Life at Oakridge Manor"
          subtitle="Engaging Minds. Enriching Lives."
        />

        <p
          className="max-w-2xl mx-auto text-center text-base md:text-lg leading-relaxed mt-8"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
        >
          We offer daily activities and meaningful experiences that promote wellness,
          friendship and joy.
        </p>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          {activities.map((a) => (
            <li
              key={a.label}
              className="flex items-center gap-4 py-3.5 border-b"
              style={{ borderColor: "rgba(20,67,44,0.12)" }}
            >
              <span className="flex-shrink-0" style={{ color: "var(--gold-deep)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  {a.path}
                </svg>
              </span>
              <span
                className="text-[15px] leading-snug"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
              >
                {a.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
