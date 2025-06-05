import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";


export const metadata: Metadata = {
  title: "Legal Drafts",
  description: "Your end-to-end solution to all legal documentation needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#031e2b] text-[#3E423A]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
