import type { Metadata } from "next";
import Header from "@/lib/components/Header";
import Footer from "@/lib/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROOTS-AI™",
  description: "ROOTS-AI Educational Wellness Assessment",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
