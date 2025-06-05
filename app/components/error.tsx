export default function NotFound() {
    return (
      <div className="min-h-screen bg-[#031e2b] text-[#3E423A] flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md">
            <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">
              The page you&aposre looking for doesn&apost exist. It might have been removed
              or the URL might be incorrect.
            </p>
            <button
              className="relative px-6 py-3 text-lg font-semibold text-white bg-[#8B572A] rounded-lg overflow-hidden group"
              onClick={() => (window.location.href = "/")}
            >
              <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-[#8B572A] rounded-lg group-hover:animate-spin-border"></span>
              <span className="relative z-10">Go Back to Homepage</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  