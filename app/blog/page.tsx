import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const posts = [
  { slug: "choosing-assisted-living", title: "5 Signs It May Be Time to Consider Assisted Living", excerpt: "Knowing when to make the transition to assisted living is one of the most important — and emotional — decisions a family faces. Here are five key signs that it may be time to explore your options.", category: "Caregiver Resources", date: "May 15, 2026", image: IMAGES.livingRoom },
  { slug: "dining-well-in-senior-living", title: "Why Exceptional Dining Matters in Senior Living", excerpt: "Nutrition, socialization, and pleasure are at the heart of great dining. Discover how our culinary team crafts menus that nourish both body and soul at Oakridge Manor Living.", category: "Community Life", date: "April 28, 2026", image: IMAGES.diningRoom },
  { slug: "stay-active-at-any-age", title: "How to Stay Active, Engaged, and Joyful at Any Age", excerpt: "From fitness classes to cultural outings and lifelong learning programs, staying active doesn't have to slow down after 65. We share some of our most popular programs.", category: "Wellness", date: "April 10, 2026", image: IMAGES.breakfastNook },
  { slug: "touring-assisted-living", title: "What to Look for When Touring an Assisted Living Community", excerpt: "Touring a senior living community for the first time can feel overwhelming. We've put together a practical checklist of questions and things to observe.", category: "Caregiver Resources", date: "March 22, 2026", image: IMAGES.houseEntrance },
  { slug: "memory-care-difference", title: "Understanding Memory Care: What Sets It Apart", excerpt: "Memory care is more than a secured floor — it's a specialized, compassionate approach to supporting those living with Alzheimer's and dementia.", category: "Memory Care", date: "March 5, 2026", image: IMAGES.houseExterior },
  { slug: "family-involvement-senior-living", title: "Staying Connected: Family Involvement in Senior Living", excerpt: "Moving a loved one to assisted living doesn't mean stepping back — it means stepping in differently. We explore how families stay deeply involved in resident life.", category: "Family & Community", date: "February 18, 2026", image: IMAGES.livingRoom },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Our Blog" subtitle="Insights & Inspiration" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-badge mb-4">From Our Community</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            Stories, Tips &amp; Resources
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Our blog is a resource for families, caregivers, and anyone exploring the world of senior
            living. Browse articles on care, wellness, and community life at Oakridge Manor Living.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="relative" style={{ height: "220px" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2 py-1 text-[10px] uppercase tracking-widest font-semibold text-white" style={{ backgroundColor: "rgba(95,150,36,0.85)" }}>
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs mb-2" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-light)" }}>{post.date}</p>
                <h3 className="text-lg font-semibold mb-3 leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}>{post.title}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1 transition-colors" style={{ color: "var(--gold)" }}>
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ backgroundColor: "var(--off-white)" }}>
        <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}>
          Have a Question We Haven&apos;t Answered?
        </h2>
        <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>Our team is happy to help. Reach out anytime.</p>
        <Link href="/contact" className="btn-primary">Contact Us</Link>
      </section>
    </>
  );
}
