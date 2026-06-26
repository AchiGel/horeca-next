import Link from "next/link";
import { dateFormat } from "@/app/lib/utils/dateFormat";
import { ArticleType } from "@/app/types/types";
import SafeImage from "./SafeImage";

export default function BlogCard({ article }: { article: ArticleType }) {
  const formatedDate = dateFormat(article.createdAt);
  const truncated =
    article.title.length > 50
      ? article.title.slice(0, 40).split(" ").slice(0, -1).join(" ") + "..."
      : article.title;

  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="flex flex-col items-start gap-3 bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl rounded-lg h-full overflow-hidden transition-shadow">
        <div className="h-40 sm:h-48 md:h-56 lg:h-60 w-full">
          <SafeImage
            alt={article.slug}
            src={article.imageUrl}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4 pt-2">
          <h1 className="text-lg md:text-xl lg:text-2xl leading-snug line-clamp-2">
            {truncated}
          </h1>
          <p className="text-xs md:text-sm text-gray-400 dark:text-gray-300">
            {formatedDate}
          </p>
        </div>
      </div>
    </Link>
  );
}
