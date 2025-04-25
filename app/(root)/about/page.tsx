export default function About() {
  // throw new Error("This is a test error to check error handling.");
  return (
    <div className="min-h-screen bg-[#031e2b] text-[#3E423A]">
      <header className="bg-[#2f3f4f] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">About Digital Wakil</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Who We Are</h2>
          <p className="text-lg text-center">
            Legal Drafts is your trusted partner in providing seamless
            documentation solutions. With 2500+ ready-to-use legal drafts, we
            aim to simplify your legal processes and elevate your efficiency.
          </p>
        </section>

        <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-center">
            Our mission is to empower individuals, businesses, and legal
            professionals by delivering meticulously crafted legal drafts that
            guarantee accuracy, clarity, and reliability.
          </p>
        </section>

        <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Why Choose Us?</h2>
          <ul className="list-disc pl-8 text-lg">
            <li className="mb-2">
              <span className="font-semibold">Comprehensive Collection:</span>{" "}
              2500+ legal drafts tailored for every requirement.
            </li>
            <li className="mb-2">
              <span className="font-semibold">User-Friendly Formats:</span> Easy
              to customize and implement.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Time-Saving:</span> Instant access
              to expertly crafted documents.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Trusted Accuracy:</span> Verified
              by legal professionals.
            </li>
          </ul>
        </section>

        <div className="flex justify-center mt-8">
          <button className="relative px-6 py-3 text-lg font-semibold text-white bg-[#8B572A] rounded-lg overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-[#8B572A] rounded-lg group-hover:animate-spin-border"></span>
            <span className="relative z-10">Learn More About Us</span>
          </button>
        </div>

        <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md mt-8">
          <h2 className="text-4xl font-bold mb-4 text-center">What We Offer</h2>
          <ul className="list-disc pl-8 text-lg">
            <li className="mb-2">
              <span className="font-semibold">Custom Legal Drafts:</span> Tailored
              solutions for unique legal needs.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Contract Templates:</span>{" "}
              Ready-to-use templates for various agreements.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Legal Consultation:</span> Expert
              advice to guide your legal journey.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Document Review:</span> Ensure
              accuracy and compliance in your drafts.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Business Agreements:</span>{" "}
              Comprehensive solutions for corporate needs.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Property Documents:</span>{" "}
              Hassle-free drafting for real estate transactions.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Employment Contracts:</span> Clear
              and concise agreements for employers and employees.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Power of Attorney:</span> Reliable
              and legally sound documentation.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Will Drafting:</span> Secure your
              legacy with professionally crafted wills.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Non-Disclosure Agreements:</span>{" "}
              Protect your confidential information effectively.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
