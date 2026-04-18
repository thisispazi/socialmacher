import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://socialmacher.at"),
  title: {
    default: "Socialmacher · Social Media Content für NÖ & Wien",
    template: "%s · Socialmacher",
  },
  description:
    "Wir erstellen wöchentlich fertigen Social Media Content für Ihr Unternehmen in Niederösterreich und Wien. Mehr Sichtbarkeit, weniger Aufwand. 3 Gratis Posts testen.",
  keywords: [
    "Social Media",
    "Content Erstellung",
    "Instagram Posts",
    "Niederösterreich",
    "Wien",
    "Marketing",
    "Socialmacher",
  ],
  authors: [{ name: "iQoon e.U.", url: "https://socialmacher.at" }],
  openGraph: {
    title: "Socialmacher · Social Media Content für NÖ & Wien",
    description:
      "Jede Woche fertige Posts – mehr Sichtbarkeit, weniger Aufwand. 3 Gratis Posts testen.",
    url: "https://socialmacher.at",
    siteName: "Socialmacher",
    locale: "de_AT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
