/** The brochure's rule–heart–rule divider that sits under every section title. */
export default function Ornament({
  color = "var(--gold)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="block w-14 h-px" style={{ backgroundColor: color, opacity: 0.55 }} />
      <svg width="13" height="13" viewBox="0 0 24 24" fill={color} className="flex-shrink-0">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span className="block w-14 h-px" style={{ backgroundColor: color, opacity: 0.55 }} />
    </div>
  );
}
