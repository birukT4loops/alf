import Image from "next/image";
import Link from "next/link";

/** Oakridge Manor Living lockup: the gold oak mark plus the engraved wordmark. */
export default function Logo({
  size = "md",
  href = "/",
}: {
  size?: "sm" | "md" | "lg";
  href?: string | null;
}) {
  const mark = { sm: 44, md: 58, lg: 84 }[size];
  const name = { sm: "text-xl", md: "text-2xl", lg: "text-4xl" }[size];
  const sub = { sm: "text-[9px]", md: "text-[10px]", lg: "text-xs" }[size];

  const lockup = (
    <span className="flex items-center gap-3">
      <Image
        src="/LOGOmain.png"
        alt=""
        width={mark}
        height={Math.round((mark * 2) / 3)}
        className="flex-shrink-0 object-contain"
        style={{ width: mark, height: "auto" }}
      />
      <span className="block leading-none">
        <span
          className={`block text-white ${name} font-semibold tracking-[0.06em]`}
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          OAKRIDGE
        </span>
        <span
          className={`block ${sub} font-semibold tracking-[0.3em] mt-1`}
          style={{
            fontFamily: "var(--font-open-sans), Arial, sans-serif",
            color: "var(--gold-light)",
          }}
        >
          MANOR LIVING
        </span>
      </span>
    </span>
  );

  if (!href) return <span className="inline-flex">{lockup}</span>;

  return (
    <Link href={href} className="flex-shrink-0 inline-flex" aria-label="Oakridge Manor Living — home">
      {lockup}
    </Link>
  );
}
