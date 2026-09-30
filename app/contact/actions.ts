"use server";

import { CONTACT_INBOX, PHONE_PRIMARY } from "../lib/contact";
import type { ContactState, ContactValues } from "./contact-state";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 100, email: 200, phone: 40, message: 5000 };

const FALLBACK = `Sorry — we couldn't send your message just now. Please call us at ${PHONE_PRIMARY.label} or email ${CONTACT_INBOX}.`;

function esc(v: string) {
  return v.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const read = (k: string, cap: number) =>
    ((formData.get(k) as string | null) ?? "").trim().slice(0, cap);

  // Honeypot: hidden from people, commonly filled in by bots. Accept silently
  // so the bot sees success and doesn't retry, but send nothing.
  if (((formData.get("company") as string | null) ?? "").trim()) {
    return { status: "sent", message: "", firstName: "" };
  }

  const firstName = read("firstName", MAX.name);
  const lastName = read("lastName", MAX.name);
  const email = read("email", MAX.email);
  const phone = read("phone", MAX.phone);
  const relationship = read("relationship", MAX.name);
  const tourDate = read("tourDate", 20);
  const message = read("message", MAX.message);

  const values: ContactValues = { firstName, lastName, email, phone, relationship, tourDate, message };

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!firstName) fieldErrors.firstName = "Please enter your first name.";
  if (!lastName) fieldErrors.lastName = "Please enter your last name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — no email was sent.");
    return { status: "error", message: FALLBACK, values };
  }

  const rows: [string, string][] = [
    ["Name", `${firstName} ${lastName}`],
    ["Email", email],
    ["Phone", phone || "—"],
    ["They are a", relationship || "—"],
    ["Preferred tour date", tourDate || "—"],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message || "(no message)",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#2c2c2c;line-height:1.5">
      <h2 style="color:#5f9624;margin:0 0 16px">New enquiry from the website</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:16px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#555">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <div style="padding:12px 16px;background:#faf5e9;border-left:3px solid #5f9624;white-space:pre-wrap">${esc(message) || "<em>(no message)</em>"}</div>
      <p style="margin-top:16px;color:#888;font-size:12px">Reply directly to this email to reach ${esc(firstName)}.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Oakridge Manor Living <website@oakridgemanorliving.com>",
        to: [CONTACT_INBOX],
        reply_to: email,
        subject: `Website enquiry — ${firstName} ${lastName}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      console.error(`[contact] Resend responded ${res.status}: ${await res.text()}`);
      return { status: "error", message: FALLBACK, values };
    }
  } catch (err) {
    console.error("[contact] Could not reach Resend:", err);
    return { status: "error", message: FALLBACK, values };
  }

  return { status: "sent", message: "", firstName };
}
