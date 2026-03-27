import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-gray-500">გვერდი არ მოიძებნა!</p>
      <Link href="/" className="text-blue-600 hover:underline">
        მთავარ გვერდზე დაბრუნება
      </Link>
    </div>
  );
}
