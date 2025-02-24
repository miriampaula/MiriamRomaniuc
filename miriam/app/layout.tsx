import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Miriam Romaniuc",
  description: "Personal Portfolio Web Developer/Designer Full-Stack",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fafcff]">
        <main className="min-h-screen bg-[#fafcff] relative z-0">
          {children}
          <Analytics />

        </main>
      </body>
    </html>
  );
}
