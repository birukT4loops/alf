import SectionHeading from "./SectionHeading";

type Service = { label: string; path: React.ReactNode };

const services: Service[] = [
  {
    label: "24-Hour Professional Care",
    path: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  },
  {
    label: "Medication Management",
    path: (
      <>
        <rect x="2.5" y="9" width="12" height="6.5" rx="3.25" transform="rotate(-45 2.5 9)" />
        <path d="M8.4 6.3l5.3 5.3" />
      </>
    ),
  },
  {
    label: "Assistance with Bathing, Dressing & Personal Care",
    path: (
      <>
        <circle cx="9" cy="6.8" r="2.8" />
        <path d="M3.5 20v-1.4A4.6 4.6 0 018.1 14h1.8" />
        <path d="M17.5 20c-1.6-1.2-2.8-2.4-2.8-3.6a1.4 1.4 0 012.8-.5 1.4 1.4 0 012.8.5c0 1.2-1.2 2.4-2.8 3.6z" />
      </>
    ),
  },
  {
    label: "Three Nutritious Home-Cooked Meals Daily",
    path: (
      <>
        <path d="M6 3v8a2.5 2.5 0 005 0V3" />
        <path d="M8.5 11v10" />
        <path d="M17 3c-1.5 1.5-2 3.5-2 6s.7 3 2 3v9" />
      </>
    ),
  },
  {
    label: "Healthy Snacks & Hydration",
    path: (
      <>
        <path d="M12 3s5 5.6 5 9a5 5 0 01-10 0c0-3.4 5-9 5-9z" />
      </>
    ),
  },
  {
    label: "Laundry & Housekeeping",
    path: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="13.5" r="4" />
        <path d="M7.5 6.5h3" />
      </>
    ),
  },
  {
    label: "Wellness Monitoring",
    path: (
      <>
        <path d="M3 12h4l2-5 3 10 2.5-5H21" />
      </>
    ),
  },
  {
    label: "Coordination with Physicians",
    path: (
      <>
        <path d="M4.8 3A2.8 2.8 0 002 5.8V9a9 9 0 009 9 9 9 0 009-9" />
        <path d="M8 3v4a4 4 0 008 0V3" />
        <circle cx="20" cy="10" r="2" />
      </>
    ),
  },
  {
    label: "Home Health & Hospice Support",
    path: (
      <>
        <path d="M3.5 10L12 3.5 20.5 10v9a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 19z" />
        <path d="M12 16.5c-1.6-1.2-2.8-2.4-2.8-3.6a1.4 1.4 0 012.8-.5 1.4 1.4 0 012.8.5c0 1.2-1.2 2.4-2.8 3.6z" />
      </>
    ),
  },
  {
    label: "Transportation Coordination",
    path: (
      <>
        <path d="M3 13.5l1.8-5A2 2 0 016.7 7h10.6a2 2 0 011.9 1.5l1.8 5V18a1 1 0 01-1 1h-1.5a1 1 0 01-1-1v-1H6.5v1a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
        <path d="M6.5 13.5h2M15.5 13.5h2" />
      </>
    ),
  },
  {
    label: "Emergency Call System",
    path: (
      <>
        <path d="M12 3.5a6 6 0 016 6c0 4.5 1.5 5.5 2 6.5H4c.5-1 2-2 2-6.5a6 6 0 016-6z" />
        <path d="M10 19.5a2 2 0 004 0" />
      </>
    ),
  },
  {
    label: "Secure & Comfortable Environment",
    path: (
      <>
        <path d="M12 21.5s7.5-3.8 7.5-9.5V5.2L12 2.5 4.5 5.2V12c0 5.7 7.5 9.5 7.5 9.5z" />
        <circle cx="12" cy="11.5" r="1.6" />
        <path d="M12 13.1v2.4" />
      </>
    ),
  },
  {
    label: "Family Communication",
    path: (
      <>
        <circle cx="8" cy="8" r="2.6" />
        <circle cx="16.5" cy="9.5" r="2.2" />
        <path d="M2.8 19v-1.2A4.2 4.2 0 017 13.6h2" />
        <path d="M13 19v-1a3.5 3.5 0 013.5-3.5h.5A3.5 3.5 0 0120.5 18v1" />
      </>
    ),
  },
];

export default function OurServices() {
  return (
    <section id="services" className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Our Services" subtitle="Personalized Care for Every Resident" />

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {services.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-4 py-4 border-b"
              style={{ borderColor: "rgba(20,67,44,0.12)" }}
            >
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--forest)", color: "var(--gold-light)" }}
              >
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {s.path}
                </svg>
              </span>
              <span
                className="text-[15px] leading-snug"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}
              >
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
