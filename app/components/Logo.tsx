import Image from "next/image";
import Link from "next/link";

// Full lockup: tree, roofline, wordmark and tagline. Cropped from
// public/Oakridgemanor-logo.png (transparent padding removed, artwork untouched).
// The artwork is navy + green, drawn for a light ground — always place it on a
// light surface, never directly on the forest-green sections.
const LOGO = { src: "/Oakridgemanor-logo-trim.png", width: 1142, height: 736 };

export default function Logo({
  className = "h-16 w-auto",
  sizes = "100px",
  href = "/",
  eager = false,
}: {
  /** Set the height here (e.g. "h-16 w-auto"); width follows the logo's aspect ratio. */
  className?: string;
  /** Rendered width hint for the srcset, e.g. "110px". */
  sizes?: string;
  href?: string | null;
  /** Use for above-the-fold placements (navbar, hero). */
  eager?: boolean;
}) {
  const img = (
    <Image
      src={LOGO.src}
      alt={href ? "" : "Oakridge Manor Living — Assisted Living with Compassion"}
      width={LOGO.width}
      height={LOGO.height}
      sizes={sizes}
      loading={eager ? "eager" : undefined}
      className={className}
    />
  );

  if (!href) return img;

  return (
    <Link href={href} className="flex-shrink-0 inline-flex" aria-label="Oakridge Manor Living — home">
      {img}
    </Link>
  );
}
