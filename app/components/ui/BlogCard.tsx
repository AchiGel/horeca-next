import Link from "next/link";
import { dateFormat } from "@/app/lib/utils/dateFormat";
import { ArticleType } from "@/app/types/types";
import SafeImage from "./SafeImage";

export default function BlogCard({ article }: { article: ArticleType }) {
  const formatedDate = dateFormat(article.createdAt);

  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="flex flex-col items-start gap-3 bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl rounded-lg h-full overflow-hidden transition-shadow">
        <div className="h-60 w-full">
          <SafeImage alt={article.slug} src={article.imageUrl} />
        </div>

        <div className="flex flex-col gap-4 p-6 pt-2">
          <h1 className="text-2xl">
            {article.title.length > 50
              ? article.title.split("").splice(0, 40).join("") + "..."
              : article.title}
          </h1>
          <p>{formatedDate}</p>
        </div>
      </div>
    </Link>
  );
}
