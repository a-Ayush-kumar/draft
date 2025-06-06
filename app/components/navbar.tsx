'use client';

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-[#2F4F4F] text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src="/dw-logo.png"
            alt="Legal Drafts Logo"
            width={40}
            height={35}
            className="rounded-[25%] border-2 border-green-700 cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex space-x-4">
        {status === "loading" ? (
          <p className="text-white">Loading...</p>
        ) : session ? (
          <>
            <Link href="/profile">
              <button className="bg-[#2f3f4f] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#558e8e] hover:text-stone-800 hover:border-[#1c232b]">
                Profile
              </button>
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-[#FF6347] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#B22222]"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <button className="bg-[#2f3f4f] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#558e8e] hover:text-stone-800 hover:border-[#1c232b]">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-[#2f3f4f] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#558e8e] hover:text-stone-800 hover:border-[#1c232b]">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
