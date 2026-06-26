"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SafeImage from "@/app/components/ui/SafeImage";
import { ArticleType } from "@/app/types/types";

export default function SimilarArticlesCarousel({
  articles,
}: {
  articles: ArticleType[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, articles.length]);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card?.offsetWidth ?? el.clientWidth * 0.8;
    const gap = 24; // matches gap-6
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  if (articles.length === 0) return null;

  return (
    <div className="relative">
      {/* Left arrow - desktop only */}
      {canScrollLeft && (
        <button
          type="button"
          aria-label="წინა სტატიები"
          onClick={() => scrollByCard("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Right arrow - desktop only */}
      {canScrollRight && (
        <button
          type="button"
          aria-label="შემდეგი სტატიები"
          onClick={() => scrollByCard("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Scroll container */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            data-card
            className="group flex flex-col gap-2 shrink-0 snap-start basis-[80%] sm:basis-[45%] md:basis-[31%]"
          >
            <div className="w-full aspect-video overflow-hidden rounded-lg bg-gray-100">
              <SafeImage
                alt={article.slug}
                src={article.imageUrl}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm md:text-base font-medium leading-snug group-hover:underline line-clamp-2">
              {article.title}
            </h3>
            {article.minutesRead != null && (
              <p className="text-xs text-gray-400">
                {article.minutesRead} წუთის საკითხავი
              </p>
            )}
            {article.description && (
              <p className="text-sm text-gray-500 line-clamp-2">
                {article.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
