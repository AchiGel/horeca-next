import Link from "next/link";
import { dateFormat } from "@/app/lib/utils/dateFormat";
import { ArticleType } from "@/app/types/types";
import SafeImage from "./SafeImage";

export default function Newest({ newest }: { newest: ArticleType }) {
  const formatedDate = dateFormat(newest.createdAt);

  return (
    <div className="self-start p-8 lg:px-16 lg:py-16 pt-12">
      <h2 className="mb-6 text-2xl md:text-4xl">უახლესი სტატია</h2>

      <Link href={`/articles/${newest.slug}`}>
        <div className="flex flex-col items-start bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl rounded-lg max-w-3xl h-full overflow-hidden transition-shadow">
          <div className="w-full h-90">
            <SafeImage alt={newest.slug} src={newest.imageUrl} />
          </div>

          <div className="flex flex-col gap-4 p-6 pt-2">
            <h2 className="text-3xl">{newest.title}</h2>
            <p>{newest.description.slice(0, 200) + "..."}</p>
            <p>{formatedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
