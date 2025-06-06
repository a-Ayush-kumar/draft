'use client';

import { SessionProvider } from "next-auth/react";
import { Navbar } from "../navbar";

export function SessionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}
