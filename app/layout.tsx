import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/footer";
import { Toaster } from "sonner";
import { SessionWrapper } from "./components/ui/sessionWrapper";

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
        <SessionWrapper children={undefined}/>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
