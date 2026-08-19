import Ornament from "./Ornament";

/** Brochure heading rhythm: engraved small-caps title, calligraphic subtitle, gold ornament. */
export default function SectionHeading({
  title,
  subtitle,
  tone = "light",
  align = "center",
}: {
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const onDark = tone === "dark";
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      <h2
        className="display-caps text-3xl md:text-4xl lg:text-[2.75rem]"
        style={{ color: onDark ? "#ffffff" : "var(--forest)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="serif-italic text-xl md:text-2xl mt-2"
          style={{ color: onDark ? "var(--gold-light)" : "var(--gold-deep)" }}
        >
          {subtitle}
        </p>
      )}
      <Ornament
        color={onDark ? "var(--gold-light)" : "var(--gold)"}
        className={`mt-5 ${centered ? "" : "justify-start"}`}
      />
    </div>
  );
}
