export default function PostsSkeleton() {
  return (
    <div className="flex flex-col p-8 lg:px-16 lg:py-16 pt-12">
      <div className="h-9 w-48 bg-gray-200 rounded animate-pulse mb-6" />

      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-lg overflow-hidden"
          >
            <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-lg" />

            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded" />

            <div className="h-6 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />

            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
