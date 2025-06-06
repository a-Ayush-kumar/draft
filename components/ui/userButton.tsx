import { FaFileArchive } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Loader } from "lucide-react";
import { useEffect } from "react";

export default function UserButton() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirect if no session, but do it inside useEffect
  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/sign-in");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <Loader className="size-8 mr-4 float-right animate-spin" />;
  }

  if (!session) {
    return null; // Prevent rendering before redirect happens
  }

  return (
    <div className="min-h-screen bg-[#031e2b] text-[#3E423A]">
      <header className="bg-[#2f3f4f] text-white py-4 text-center">
        <h1 className="text-2xl font-bold">User Profile</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Profile Header Section */}
        <section className="bg-white text-[#031e2b] text-center rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-semibold text-[#2f4f4f]">
            {session.user?.name || "Guest"}
          </h1>
          <p className="text-lg">{session.user?.email || "No email available"}</p>

          <button
            onClick={() => signOut()}
            className="bg-[#8B572A] text-white my-3 p-4 rounded-lg hover:bg-[#6f4429] transition-all duration-300"
          >
            <span className="text-xl font-bold">Log Out</span>
          </button>
        </section>

        {/* Zip File Download Section */}
        <section className="mt-8 bg-white text-[#031e2b] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl text-center font-bold mb-4">
            Download the zip file here
          </h2>
          <a
            href="https://drive.google.com/file/d/1Yxn5VnjhVwj238voWI9ofgULsx7zyMLw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2"
          >
            <FaFileArchive className="size-9 text-[#8B572A]" />
            <button className="bg-[#8B572A] text-white p-4 rounded-lg hover:bg-[#6f4429] transition-all duration-300">
              <span className="text-xl font-bold">Download Zip File</span>
            </button>
          </a>
        </section>
      </main>
    </div>
  );
}
