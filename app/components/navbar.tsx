// import Link from "next/link";
// import Image from "next/image";

// export function Navbar() {
//   return (
//     <nav className="bg-[#2F4F4F] text-white py-4 px-6 flex justify-between items-center">
//       {/* Logo */}
//       <div>
//         <Link href="/">
//           <Image
//             src="/dw-logo.png"
//             alt="Legal Drafts Logo"
//             width={40}
//             height={35}
//             className="rounded-[25%] border-2 border-green-700 cursor-pointer"
//           />
//         </Link>
//       </div>

//       <div className="flex space-x-4">
//         <Link href="/login">
//           <button className="bg-[#2f3f4f] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#558e8e] hover:text-stone-800 hover:border-[#1c232b]">
//             Login
//           </button>
//         </Link>
//         <Link href="/signup">
//           <button className="bg-[#2f3f4f] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#558e8e] hover:text-stone-800 hover:border-[#1c232b]">
//             Sign Up
//           </button>
//         </Link>
//         <Link href="/profile">
//           <button className="bg-[#2f3f4f] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#558e8e] hover:text-stone-800 hover:border-[#1c232b]">
//             profile
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }
'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  // Check if user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    window.location.href = "/"; // Redirect to homepage after logout
  }

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
        {isAuthenticated ? (
          <>
            <Link href="/profile">
              <button className="bg-[#2f3f4f] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#558e8e] hover:text-stone-800 hover:border-[#1c232b]">
                Profile
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-[#FF6347] border-amber-50 border-2 font-bold text-white py-2 px-4 rounded hover:bg-[#B22222]"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
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
