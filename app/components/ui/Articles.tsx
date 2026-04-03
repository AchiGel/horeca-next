"use client";

import { useState } from "react";
import { ArticleType } from "../../types/types";
import BlogCard from "./BlogCard";

const PAGE_SIZE = 6;

export default function Articles({ articles }: { articles: ArticleType[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div className="w-full">
      {articles.length === 0 ? (
        <div className="flex flex-col p-8 lg:px-16 lg:py-16 pt-12">
          სტატიები ვერ მოიძებნა!
        </div>
      ) : (
        <div className="flex flex-col p-8 lg:px-16 lg:py-16 pt-12">
          <h3 className="mb-6 text-2xl md:text-4xl">ყველა სტატია</h3>
          <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((a) => (
              <BlogCard key={a._id} article={a} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleShowMore}
                className="cursor-pointer px-8 py-3 border border-current text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
              >
                მეტის ნახვა
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
