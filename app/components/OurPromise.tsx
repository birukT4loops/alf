const promises = [
  {
    title: "Personalized Care",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.5l-1.3-1.2C6 15.1 3 12.4 3 9.1 3 6.4 5.1 4.3 7.8 4.3c1.5 0 3 .7 3.9 1.8.9-1.1 2.4-1.8 3.9-1.8 2.7 0 4.8 2.1 4.8 4.8 0 3.3-3 6-7.7 10.2L12 20.5z" />
      </svg>
    ),
  },
  {
    title: "Respect & Dignity",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="7" r="3.4" />
        <path d="M3.5 21v-1.5A5.5 5.5 0 019 14h2" />
        <path d="M18 20c-1.6-1.2-2.8-2.4-2.8-3.6a1.4 1.4 0 012.8-.5 1.4 1.4 0 012.8.5c0 1.2-1.2 2.4-2.8 3.6z" />
      </svg>
    ),
  },
  {
    title: "Safety & Security",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11.5 11.2 13.7 15.2 9.7" />
      </svg>
    ),
  },
  {
    title: "Compassion Every Day",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 13.6c-1.7-1.4-3-2.7-3-4a1.5 1.5 0 013-.6 1.5 1.5 0 013 .6c0 1.3-1.3 2.6-3 4z" />
        <path d="M2.5 13.5c1.6-1.5 3.2-1.2 4.6 0L12 17.6l4.9-4.1c1.4-1.2 3-1.5 4.6 0" />
        <path d="M2.5 13.5V19a1.5 1.5 0 001.5 1.5" />
        <path d="M21.5 13.5V19a1.5 1.5 0 01-1.5 1.5" />
      </svg>
    ),
  },
];

export default function OurPromise() {
  return (
    <section style={{ backgroundColor: "var(--forest)" }} className="px-6 py-14">
      <div className="max-w-5xl mx-auto">
        <p
          className="serif-italic text-2xl md:text-3xl text-center mb-10"
          style={{ color: "var(--gold-light)" }}
        >
          Our Promise
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {promises.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-center text-center px-3 ${i > 0 ? "lg:border-l" : ""}`}
              style={{ borderColor: "rgba(215,170,60,0.25)" }}
            >
              <span style={{ color: "var(--gold-light)" }}>{p.icon}</span>
              <h3
                className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-white mt-4 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
              >
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
