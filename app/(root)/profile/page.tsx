"use client";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#031e2b] text-[#3E423A]">
      <header className="bg-[#2f3f4f] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">User Profile</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Profile Header Section */}
        <section className="bg-transparent text-white text-center rounded-lg p-6">
          
          <h1 className="text-3xl font-semibold mt-4 text-[#8ab1c7]">
            John Doe
          </h1>
          <p className="text-lg text-gray-50">john.doe@example.com</p>
        </section>

        <section className="mt-8 bg-[#2f3f4f] text-white rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Download the zip file here.
          </h2>
        </section>
        
      </main>
    </div>
  );
}
