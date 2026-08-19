import type { Metadata } from "next";
import { Playfair_Display, Open_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

// The brochure's calligraphic subtitle face
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Oakridge Manor Living | Residential Assisted Living in Allen & Plano, TX",
  description:
    "Compassionate Care. Comfortable Living. A Place to Call Home. Oakridge Manor Living is a boutique residential assisted living home where every resident is treated like family — serving Allen, Plano, McKinney, Frisco and North Dallas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${openSans.variable} ${cormorant.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
