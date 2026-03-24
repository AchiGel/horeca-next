import Link from "next/link";
import { ArticleType } from "../types/types";
import { dateFormat } from "../utils/dateFormat";
import Image from "next/image";

export default function BlogCard({ article }: { article: ArticleType }) {
  const formatedDate = dateFormat(article.createdAt);

  return (
    <Link href={"/articles/" + article._id}>
      <div className="flex flex-col items-start gap-3 bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl rounded-lg h-full overflow-hidden transition-shadow">
        {article.imageUrl !== null ? (
          <Image
            className="w-full h-60 object-cover"
            src={
              article.imageUrl.endsWith(".jpg")
                ? article.imageUrl
                : article.imageUrl + ".jpeg"
            }
            alt={article.title}
            width={1000}
            height={1000}
            loading="eager"
          />
        ) : (
          <Image
            className="w-full object-cover"
            src="/no-image-available-icon-vector.jpg"
            alt="No Image"
          />
        )}
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
