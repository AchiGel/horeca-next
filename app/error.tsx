"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4 mt-50 mb-50">
      <h2 className="font-bold text-2xl">დაფიქსირდა შეცდომა!</h2>
      {process.env.NODE_ENV === "development" && <p>Digest: {error.digest}</p>}
      <button
        className="cursor-pointer px-8 py-3 border border-current text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
        onClick={reset}
      >
        კიდევ სცადეთ
      </button>
    </div>
  );
}
