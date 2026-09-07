import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/lib/components/Header";
import Footer from "@/lib/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROOTS-AI™ - Biological Assessment & Intelligence",
  description:
    "Understand your biological patterns before symptoms emerge. Educational wellness assessment powered by deterministic analysis.",
  applicationName: "ROOTS-AI™ Phase 1 MVP",
  authors: [{ name: "ROOTS AI HEALTH SYSTEMS, Inc." }],
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roots-ai.example.com",
    title: "ROOTS-AI™ - Medicine Before Symptoms™",
    description:
      "Educational biological assessment and reporting. Not a diagnosis, not medical advice.",
    siteName: "ROOTS-AI™",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="description" content={metadata.description as string} />
        <meta name="theme-color" content="#1A2A4A" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload Inter font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-roots-white text-roots-charcoal antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
