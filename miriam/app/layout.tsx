import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-[#fafbff]">
        <main className="min-h-screen bg-[#fafbff] relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
