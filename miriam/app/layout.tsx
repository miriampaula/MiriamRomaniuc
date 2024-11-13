import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // Adjust path as needed
import "./globals.css";

export const metadata: Metadata = {
  title: "Miriam Romaniuc",
  description: "Personal Portfolio Web Developer/Designer Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fbfbfd]">
        {/* <Navbar />*/}


        <main className="min-h-screen pt-16 p-10 bg-[#fbfbfd] relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
