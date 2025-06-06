import React from "react";

export default function FAQ() {
    return (
      <div className="min-h-screen bg-[#031e2b] text-[#3E423A]">
        <header className="bg-[#2f3f4f] text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold">FAQs</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md mb-8">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-center">
              Get answers to the most common questions about our legal drafting solutions!
            </p>
          </section>
  
          <div className="space-y-4">
            <div className="bg-[#F8F1E5] text-[#3E423A] border border-[#3E423A] rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">What is included in the 2500+ Legal Drafts Bundle?</h3>
              <p className="text-sm">
                The bundle includes agreements, contracts, affidavits, notices, and much more, tailored for all kinds of legal documentation needs.
              </p>
            </div>
            <div className="bg-[#F8F1E5] text-[#3E423A] border border-[#3E423A] rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">Who can benefit from this bundle?</h3>
              <p className="text-sm">
                The bundle is ideal for legal professionals, entrepreneurs, business owners, and individuals looking for quick and reliable legal documentation.
              </p>
            </div>
            <div className="bg-[#F8F1E5] text-[#3E423A] border border-[#3E423A] rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">Can these drafts be customized?</h3>
              <p className="text-sm">
                Yes, all the drafts are customizable to fit your specific requirements and preferences.
              </p>
            </div>
            <div className="bg-[#F8F1E5] text-[#3E423A] border border-[#3E423A] rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you offer customer support?</h3>
              <p className="text-sm">
                Absolutely! Our team is always available to assist you with any questions or concerns regarding the bundle.
              </p>
            </div>
            <div className="bg-[#F8F1E5] text-[#3E423A] border border-[#3E423A] rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">How can I purchase the bundle?</h3>
              <p className="text-sm">
                You can purchase the bundle directly from our website by clicking the Buy Now button and following the checkout process.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
  