import Image from "next/image";
import { IMAGES } from "../lib/images";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: keyof typeof IMAGES;
}

export default function PageHeader({ title, subtitle, image = "houseExterior" }: PageHeaderProps) {
  return (
    <section className="relative w-full" style={{ minHeight: "320px" }}>
      <Image
        src={IMAGES[image]}
        alt={title}
        fill
        preload
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(27,42,74,0.6) 0%, rgba(27,42,74,0.75) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-20 px-6 text-center">
        {subtitle && (
          <p
            className="text-white/70 text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            {subtitle}
          </p>
        )}
        <h1
          className="text-4xl md:text-5xl font-semibold text-white"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
