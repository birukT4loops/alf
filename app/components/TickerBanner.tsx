const SEGMENT =
  "   ★  Schedule a tour today to see why families trust Oakridge Manor Living in Plano, TX   ★  Compassionate assisted living with 24/7 support   ★  Call us: (972) 555-0123   ★  Where comfort, dignity, and care feel like home";

export default function TickerBanner() {
  const items = Array.from({ length: 4 }, (_, i) => (
    <span key={i} className="ticker-segment">
      {SEGMENT}
    </span>
  ));

  return (
    <div
      className="overflow-hidden py-2.5"
      style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
      aria-hidden="true"
    >
      <div className="ticker-track">
        {items}
        {items}
      </div>
    </div>
  );
}
