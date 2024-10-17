import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miriam Romaniuc - Software Engineer",
  description: "Personal Portfolio Web Developer/Designer Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f8f9ff]">
        <div className="fixed inset-0 border-[30px] border-white pointer-events-none z-10"></div>

        <main className="min-h-screen  bg-[#f8f9ff] relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
