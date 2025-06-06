
import  Link  from "next/link"; // Ensure React Router is installed and used for routing
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#2F4F4F] text-white py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <Image
            src="/dw-logo.png"
            alt="Legal Drafts Logo"
            width={75}
            height={35}
            className="rounded-[25%] border-2 border-green-700"
          />
        </div>
        <p>© 2025 Legal Drafts. All rights reserved.</p>
        <nav className="mt-2">
          <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4"> <li>
              <Link href="/" className="text-[#FFD700] hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[#FFD700] hover:underline">
                About Us
              </Link>
            </li>
            
            <li>
              <Link href="privacy-policy" className="text-[#FFD700] hover:underline">
                Privacy Policy
              </Link>
            </li>
            
            <li>
            <Link
              href="/FAQs"
              className="text-[#FFD700] hover:underline"
            >
              FAQs
            </Link>
            </li>
            <li>
            <Link
              href="https://ayush-portflio.netlify.app/"
              target="_blank"
              className="text-[#FFD700] hover:underline"
            >
              Developer's Contact
            </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
