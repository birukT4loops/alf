This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form email

The contact form posts to a Server Action (`app/contact/actions.ts`) that emails
**sam.fereja@oakridgemanorliving.com** through [Resend](https://resend.com).
The recipient is set in `app/lib/contact.ts`.

Until the environment variables are set, the form shows visitors a message
asking them to call or email instead — it never silently drops an enquiry.

1. Create an API key at <https://resend.com/api-keys>.
2. Verify `oakridgemanorliving.com` at <https://resend.com/domains> (add the DNS
   records they give you), so mail can be sent *from* the domain.
3. Copy `.env.example` to `.env.local` and fill in:

   ```
   RESEND_API_KEY=re_...
   CONTACT_FROM="Oakridge Manor Living <website@oakridgemanorliving.com>"
   ```

4. Add the same two variables to the hosting provider (on Vercel:
   Settings → Environment Variables), then redeploy.

Before the domain is verified you can test with Resend's sandbox sender,
`CONTACT_FROM="Oakridge Manor Living <onboarding@resend.dev>"`, which only
delivers to the address that owns the Resend account.

Replies go to the visitor's own address, so staff can answer straight from the
email. The form also carries a hidden honeypot field to absorb bot spam.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# alf
