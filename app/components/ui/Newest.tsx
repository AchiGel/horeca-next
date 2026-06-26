import Link from "next/link";
import { dateFormat } from "@/app/lib/utils/dateFormat";
import { ArticleType } from "@/app/types/types";
import SafeImage from "./SafeImage";

export default function Newest({ newest }: { newest: ArticleType }) {
  const formatedDate = dateFormat(newest.createdAt);

  return (
    <div className="self-start px-4 py-4 md:p-10 lg:p-16 pt-12">
      <h2 className="mb-4 md:mb-6 text-xl md:text-2xl lg:text-4xl">
        უახლესი სტატია
      </h2>

      <Link href={`/articles/${newest.slug}`}>
        <div className="flex flex-col items-start bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl rounded-lg max-w-3xl w-full h-full overflow-hidden transition-shadow">
          <div className="w-full h-48 sm:h-64 md:h-80 lg:h-90">
            <SafeImage
              alt={newest.slug}
              src={newest.imageUrl}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 pt-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl leading-snug">
              {newest.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-200">
              {newest.description.slice(0, 200) + "..."}
            </p>
            <p className="text-xs md:text-sm text-gray-400 dark:text-gray-300">
              {formatedDate}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
