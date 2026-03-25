import { ArticleType } from "../../types/types";
import BlogCard from "./BlogCard";

export default function Articles({ articles }: { articles: ArticleType[] }) {
  return (
    <div>
      {articles.length === 0 ? (
        <div className="flex flex-col p-8 lg:px-16 lg:py-16 pt-12">
          სტატიები ვერ მოიძებნა!
        </div>
      ) : (
        <div className="flex flex-col p-8 lg:px-16 lg:py-16 pt-12">
          <h3 className="mb-6 text-2xl md:text-4xl">ყველა სტატია</h3>
          <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <BlogCard key={a._id} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
