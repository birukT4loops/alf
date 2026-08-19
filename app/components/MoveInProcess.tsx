import Link from "next/link";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Schedule a Personal Tour",
    desc: "Meet our team and experience our beautiful home.",
    icon: (
      <>
        <path d="M3.5 10L12 3.5 20.5 10v9a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 19z" />
        <path d="M9.5 20.5V14h5v6.5" />
      </>
    ),
  },
  {
    title: "Comprehensive Care Assessment",
    desc: "We learn about your loved one's health, preferences and care needs.",
    icon: (
      <>
        <rect x="5" y="3.5" width="14" height="17" rx="1.8" />
        <path d="M9 3.5V2.2h6v1.3" />
        <path d="M8.5 10h7M8.5 14h7" />
      </>
    ),
  },
  {
    title: "Personalized Care Plan",
    desc: "Together we develop an individualized plan tailored to the resident.",
    icon: (
      <>
        <path d="M12 20.5l-1.3-1.2C6 15.1 3 12.4 3 9.1 3 6.4 5.1 4.3 7.8 4.3c1.5 0 3 .7 3.9 1.8.9-1.1 2.4-1.8 3.9-1.8 2.7 0 4.8 2.1 4.8 4.8 0 3.3-3 6-7.7 10.2L12 20.5z" />
      </>
    ),
  },
  {
    title: "Admission & Move-In",
    desc: "We guide you through paperwork and prepare everything before move-in day.",
    icon: (
      <>
        <path d="M6 3.5h9l3.5 3.5v13.5H6z" />
        <path d="M14.5 3.5V7H18" />
        <path d="M9 12h6M9 16h4" />
      </>
    ),
  },
  {
    title: "Welcome Home",
    desc: "Residents receive a warm welcome, orientation and ongoing support from our caring team.",
    icon: (
      <>
        <circle cx="8.5" cy="14" r="4" />
        <path d="M11.8 11.8l7.5-7.5M17 6.6l2 2M15 8.6l2 2" />
      </>
    ),
  },
];

export default function MoveInProcess() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Our Move-In Process" />

        <ol className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col items-center text-center">
              <span className="relative">
                <span
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--forest)", color: "var(--gold-light)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </span>
                <span
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#fff",
                    fontFamily: "var(--font-open-sans), Arial, sans-serif",
                  }}
                >
                  {i + 1}
                </span>
              </span>
              <h3
                className="text-[11px] font-bold uppercase tracking-[0.16em] mt-5 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--forest)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mt-2 max-w-[210px]"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
              >
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-14">
          <Link href="/contact" className="btn-primary">
            Start With a Personal Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
