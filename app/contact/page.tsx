"use client";

import { useActionState } from "react";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { PHONE_PRIMARY, PHONE_SECONDARY, CONTACT_INBOX } from "../lib/contact";
import { IMAGES } from "../lib/images";
import { sendContactMessage } from "./actions";
import { initialContactState } from "./contact-state";

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialContactState);
  const errors = state.fieldErrors ?? {};
  const prior = state.values;
  const fieldStyle = (name: keyof typeof errors) => ({
    borderColor: errors[name] ? "#b3261e" : "#ddd",
    fontFamily: "var(--font-open-sans), Arial, sans-serif",
    color: "var(--text-dark)",
  });

  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd Love to Hear From You" />

      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="section-badge mb-4">Get In Touch</p>
            <h2
              className="text-3xl font-semibold mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
            >
              Schedule a Tour or Ask a Question
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              Fill out the form below and a member of our team will reach out within one business day.
            </p>

            {state.status === "sent" ? (
              <div className="p-8 text-center border" style={{ borderColor: "var(--gold)", backgroundColor: "#fdf9f3" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4" style={{ color: "var(--gold)" }}>
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}>
                  Thank You{state.firstName ? `, ${state.firstName}` : ""}!
                </h3>
                <p className="text-sm" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}>
                  We&apos;ve received your message and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5" noValidate>
                {/* Honeypot — hidden from people, bots fill it in */}
                <input
                  type="text" name="company" tabIndex={-1} autoComplete="off"
                  aria-hidden="true" className="hidden"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[["firstName", "First Name", "text", true], ["lastName", "Last Name", "text", true]].map(([name, label, type, req]) => (
                    <div key={String(name)} className="flex flex-col gap-1.5">
                      <label htmlFor={String(name)} className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>
                        {String(label)} {req && "*"}
                      </label>
                      <input
                        id={String(name)} name={String(name)} type={String(type)} required={Boolean(req)}
                        defaultValue={prior?.[String(name) as "firstName" | "lastName"] ?? ""}
                        aria-invalid={Boolean(errors[String(name) as keyof typeof errors])}
                        className="border px-4 py-3 text-sm outline-none"
                        style={fieldStyle(String(name) as keyof typeof errors)}
                      />
                      {errors[String(name) as keyof typeof errors] && (
                        <span className="text-xs" style={{ color: "#b3261e" }}>{errors[String(name) as keyof typeof errors]}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>Email Address *</label>
                  <input id="email" name="email" type="email" required defaultValue={prior?.email ?? ""} aria-invalid={Boolean(errors.email)} className="border px-4 py-3 text-sm outline-none" style={fieldStyle("email")} />
                  {errors.email && <span className="text-xs" style={{ color: "#b3261e" }}>{errors.email}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>Phone Number</label>
                    <input id="phone" name="phone" type="tel" defaultValue={prior?.phone ?? ""} className="border px-4 py-3 text-sm outline-none" style={{ borderColor: "#ddd", fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="relationship" className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>I Am A…</label>
                    <select id="relationship" name="relationship" defaultValue={prior?.relationship ?? ""} className="border px-4 py-3 text-sm outline-none bg-white" style={{ borderColor: "#ddd", fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>
                      <option value="">Select…</option>
                      <option>Prospective Resident</option>
                      <option>Family Member</option>
                      <option>Healthcare Professional</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="tourDate" className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>Preferred Tour Date</label>
                  <input id="tourDate" name="tourDate" type="date" defaultValue={prior?.tourDate ?? ""} className="border px-4 py-3 text-sm outline-none" style={{ borderColor: "#ddd", fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>Message</label>
                  <textarea id="message" name="message" rows={4} defaultValue={prior?.message ?? ""} className="border px-4 py-3 text-sm outline-none resize-none" style={{ borderColor: "#ddd", fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }} placeholder="Tell us about your needs or any questions you have…" />
                </div>

                {state.status === "error" && !state.fieldErrors && (
                  <p
                    role="alert"
                    className="text-sm px-4 py-3 border"
                    style={{ borderColor: "#b3261e", backgroundColor: "#fdf4f3", color: "#b3261e", fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
                  >
                    {state.message}
                  </p>
                )}

                <button type="submit" disabled={pending} className="btn-primary self-start" style={{ opacity: pending ? 0.7 : 1 }}>
                  {pending ? "Sending…" : "Send Message"}
                </button>
                <p className="text-xs" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-light)" }}>
                  Your message goes straight to {CONTACT_INBOX}.
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-10">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg" style={{ height: "280px" }}>
              <Image src={IMAGES.office} alt="The office at Oakridge Manor Living" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>

            <div className="flex flex-col gap-6">
              {[
                { label: "Address", value: "2421 London Dr\nPlano, TX 75025", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10m-3 0a3 3 0 106 0 3 3 0 00-6 0" },
                { label: "Phone", value: `${PHONE_PRIMARY.label}\n${PHONE_SECONDARY.label}`, icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" },
                { label: "Email", value: "info@oakridgemanorliving.com", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
                { label: "Office Hours", value: "Monday – Friday: 8am – 6pm\nSaturday – Sunday: 9am – 4pm", icon: "M12 2a10 10 0 100 20A10 10 0 0012 2z M12 6v6l4 2" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--off-white)", color: "var(--gold)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {info.icon.split(" M").map((d, i) => <path key={i} d={i === 0 ? d : "M" + d} />)}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-dark)" }}>{info.label}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-badge mb-4">FAQ</p>
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-green)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { q: "What is assisted living?", a: "Assisted living provides housing, meals, personal care, and support for seniors who need assistance with daily activities while maintaining as much independence as possible." },
              { q: "Is staff available around the clock?", a: "Yes. Our trained caregivers are available 24 hours a day, seven days a week to provide support whenever residents need assistance." },
              { q: "What services are included?", a: "Services include assistance with daily living activities, medication management, housekeeping, laundry, nutritious meals, wellness programs, and recreational activities." },
              { q: "Can residents decorate their rooms?", a: "Absolutely. Residents are encouraged to personalize their living spaces with their own furniture, photographs, and treasured belongings to make their new home comfortable and familiar." },
              { q: "Are family members welcome to visit?", a: "Yes. We encourage family involvement and welcome visits, helping residents maintain meaningful relationships with the people who matter most." },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded"
                style={{ borderLeft: "3px solid var(--gold)" }}
              >
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
