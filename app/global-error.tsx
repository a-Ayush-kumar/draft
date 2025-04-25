'use client';

// export default function GlobalError({
//     error,
//     reset,
// }: {
//     error: Error & { digest?: string };
//     reset: () => void;
// }) {
//     return (
//         <html>
//             <body>
//                 <h1>Something went wrong</h1>
//                 <p>{error.message}</p>
//                 <button onClick={reset}>Try again</button>
//             </body>
//         </html>
//     );
// }

export default function GlobalError() {
    return (
      <div className="min-h-screen bg-[#031e2b] text-[#3E423A] flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="bg-[#FAF3E3] text-[#3E423A] rounded-lg p-6 shadow-md">
            <h1 className="text-5xl font-bold mb-4">Unexpected Error</h1>
            <p className="text-lg mb-6">
              Something went wrong. Please try refreshing the page or contact support if the issue persists.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="relative px-6 py-3 text-lg font-semibold text-white bg-[#8B572A] rounded-lg overflow-hidden group"
                onClick={() => window.location.reload()}
              >
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-[#8B572A] rounded-lg group-hover:animate-spin-border"></span>
                <span className="relative z-10">Refresh Page</span>
              </button>
              <button
                className="relative px-6 py-3 text-lg font-semibold text-[#3E423A] bg-transparent border-2 border-[#8B572A] rounded-lg overflow-hidden group"
                onClick={() => (window.location.href = "/")}
              >
                <span className="absolute inset-0 w-full h-full bg-[#8B572A] bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition"></span>
                <span className="relative z-10">Go to Homepage</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  