import Image from "next/image";
import { Cards, Customer } from "../components/cards";
import { Feedback, Sdraft } from "../components/feedback";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#031e2b] text-[#3E423A]">
      <header className="bg-[#2f3f4f] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">LEGAL DDRATT - Ultimate Collection of 3000+ Legal Draft</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="bg-transparent justify-center text-center text-white hover:bg-opacity-90  rounded-lg p-6">
          <h1 className="text-5xl font-bold mb-4  text-[#558e8e]">
            2500+ Essential Legal Drafts Collection:
          </h1>
          <h1 className="text-3xl font-semibold mb-4 text-[#8ab1c7]">
            Your Comprehensive Solution{" "}
            <span className="underline">to Effortless Documentation</span> and{" "}
            <span className="underline">Legal Mastery!</span>
          </h1>
          <p className="text-lg text-gray-50 text-center">
            Grab the 2500+ Ultimate Legal Drafts Bundle NOW and Take Your
            Documentation to New Heights of Excellence!
          </p>
        </section>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <Image
            src="/legal2.png"
            alt="Additional Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg border-2 border-[#8ab1c7] mb-4 md:mb-0 md:mr-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="bg-[#558e8e] text-gray-50 p-4 rounded-lg shadow-md hover:bg-opacity-90">
              <h3 className="text-lg font-semibold">Access On Mobile And PC</h3>
            </div>
            <div className="bg-[#558e8e] text-gray-50 p-4 rounded-lg shadow-md hover:bg-opacity-90">
              <h3 className="text-lg font-semibold">
                Over 10,167+ Copies Sold
              </h3>
            </div>
            <div className="bg-[#558e8e] text-gray-50 p-4 rounded-lg shadow-md hover:bg-opacity-90">
              <h3 className="text-lg font-semibold">
                Streamline your legal process
              </h3>
            </div>
            <div className="bg-[#558e8e] text-gray-50 p-4 rounded-lg shadow-md hover:bg-opacity-90">
              <h3 className="text-lg font-semibold">Save Time and Effort</h3>
            </div>
            <div className="bg-[#558e8e] text-gray-50 p-4 rounded-lg shadow-md hover:bg-opacity-90 sm:col-span-2">
              <h3 className="text-lg font-semibold">
                Over 2500 meticulously crafted legal drafts at your fingertips!
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="relative px-6 py-3 text-lg font-semibold text-white bg-[#8B572A] rounded-lg overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-[#8B572A] rounded-lg group-hover:animate-spin-border"></span>
            <span className="relative z-10">
              Get the Limited Edition Bundle Now
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <span className="text-gray-50 text-xl text-center">
            Register for the bundle and get access to those now at 90% discount.
          </span>
        </div>
      </main>
      <section className="text-[#3E423A] p-6 mt-8 shadow-md">
        <h2 className="bg-[#FAF3E3] text-center text-4xl font-bold  text-[#3E423A] rounded-lg p-6 shadow-md mb-8">
          why you need this bundle ?
        </h2>
         <Cards />
        
      </section>
      <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6  shadow-md mb-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          whom is this bundle for ?
        </h2>

        <Customer />
      </section>
      <section className="container mx-auto px-4 py-8">
        <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-center">
            See how our satisfied customers are enjoying the Legal Drafts
            Bundle!
          </p>
        </section>
        <div className="cards-container">
          <div className="flex flex-row justify-center items-center mt-8">
            <Feedback />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="relative px-6 py-3 text-lg font-semibold text-white bg-[#8B572A] rounded-lg overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-[#8B572A] rounded-lg group-hover:animate-spin-border"></span>
            <span className="relative z-10">Grab the deal now</span>
          </button>
        </div>
        <section className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md mt-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Sample Drafts</h2>
          <p className="text-lg text-center mb-6">
            Take a look at some of the sample drafts included in the bundle.
          </p>
          <div>
            <Sdraft />
          </div>
        </section>
      </section>
    </div>
  );
}
