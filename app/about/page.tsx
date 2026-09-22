import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const whyChoose = [
  { title: "Personalized Care", desc: "Every resident receives an individualized care plan tailored to their health, daily routines, and personal preferences." },
  { title: "Compassionate Caregivers", desc: "Our experienced team is available 24 hours a day to provide assistance, encouragement, and compassionate support whenever it's needed." },
  { title: "Comfortable Living", desc: "Residents enjoy inviting private or semi-private accommodations designed to provide comfort, privacy, and a true sense of home." },
  { title: "Nutritious Dining", desc: "Three freshly prepared meals are served daily, along with healthy snacks and menu options that accommodate dietary needs." },
  { title: "Engaging Community", desc: "Our residents enjoy a vibrant lifestyle filled with activities, friendships, wellness programs, and opportunities to stay active and connected." },
  { title: "Safe Environment", desc: "We provide a secure community where residents can enjoy their independence with confidence, knowing help is always nearby." },
];

const testimonials = [
  "Oakridge Manor Living has been an incredible place for our father. The staff genuinely care, and the community feels like family.",
  "The caregivers are compassionate, attentive, and always willing to help. We couldn't be happier with our decision.",
  "Our loved one has become more active, more social, and truly enjoys living here.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Oakridge Manor Living"
        subtitle="Compassionate Care. Comfortable Living."
        image="patio"
      />

      {/* Welcome */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-badge mb-5">Welcome</p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            Welcome to Oakridge Manor Living
          </h2>
          <p
            className="text-base leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            At Oakridge Manor Living, we believe assisted living should be more than just receiving care — it should be about enjoying life in a supportive, engaging, and comfortable environment.
          </p>
          <p
            className="text-base leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Our community is thoughtfully designed for older adults who value their independence but appreciate having compassionate assistance available whenever they need it. From personalized care plans to engaging daily activities and nutritious meals, every aspect of our community is focused on enhancing quality of life.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            We take pride in creating meaningful relationships with our residents and their families, providing care that respects each person&apos;s unique needs, preferences, and lifestyle.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg" style={{ height: "400px" }}>
            <Image
              src={IMAGES.livingRoom}
              alt="The living room at Oakridge Manor Living, with fireplace and built-in shelving"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="section-badge mb-4">Our Mission</p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
            >
              Caring with Compassion. Living with Dignity.
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              Our mission is to provide exceptional assisted living services that promote independence, dignity, and well-being while creating a safe and welcoming environment where every resident feels valued and at home.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-badge mb-4">Our Promise</p>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
            >
              Why Choose Oakridge Manor Living
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded flex flex-col gap-3"
                style={{ backgroundColor: "var(--off-white)", borderTop: "3px solid var(--gold)" }}
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resident Lifestyle */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-badge mb-4">Resident Lifestyle</p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
            >
              Live Independently with Confidence
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              At Oakridge Manor Living, residents enjoy the freedom to spend each day their way while receiving personalized support whenever needed.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              Whether participating in community activities, relaxing with friends, enjoying hobbies, or spending time with family, our residents experience a lifestyle built around comfort, connection, and well-being.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg" style={{ height: "400px" }}>
            <Image
              src={IMAGES.careRoom}
              alt="A resident care room at Oakridge Manor Living"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Family Support */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-badge mb-5">Family Support</p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
          >
            Peace of Mind for Families
          </h2>
          <p
            className="text-base leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Choosing an assisted living community is an important decision, and we understand the trust families place in us.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            We believe in open communication, compassionate care, and building lasting relationships with both residents and their loved ones. Families can feel confident knowing their loved one is receiving attentive, respectful, and professional care every day.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-badge mb-4">Testimonials</p>
            <h2
              className="text-3xl md:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
            >
              What Families Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((quote, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded flex flex-col gap-4"
                style={{ borderLeft: "3px solid var(--gold)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: "var(--gold)" }}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
                </svg>
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <h2
          className="text-3xl md:text-4xl font-semibold text-white mb-5"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Experience the Oakridge Manor Living Difference
        </h2>
        <p
          className="text-white text-base max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          Whether you&apos;re exploring options for yourself or someone you love, we&apos;re here to answer your questions and help you make an informed decision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-gold">
            Schedule a Tour
          </Link>
          <Link href="/contact" className="btn-outline-dark" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
