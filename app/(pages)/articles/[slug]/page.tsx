import SafeImage from "@/app/components/ui/SafeImage";
import { getSingleArticle, getAllArticles } from "@/app/lib/api/api";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const singleArticle = await getSingleArticle(slug);

  const imageUrl =
    singleArticle.imageUrl ?? "https://www.horecageorgia.ge/og-logo.png";

  return {
    title: singleArticle.title,
    description: singleArticle.description,

    openGraph: {
      title: singleArticle.title,
      description: singleArticle.description,
      url: `https://www.horecageorgia.ge/articles/${slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: singleArticle.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: singleArticle.title,
      description: singleArticle.description,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const [singleArticle, allArticles] = await Promise.all([
    getSingleArticle(slug),
    getAllArticles(),
  ]);

  const similarArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <div>
      <div className="flex flex-col gap-4 mx-auto p-6 md:p-16 pt-24 md:pt-32 max-w-4xl">
        <h1 className="text-3xl">{singleArticle.title}</h1>
        <div className="w-full h-100">
          <SafeImage
            alt={singleArticle.slug}
            src={singleArticle.imageUrl}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-xl italic">{singleArticle.description}</p>
        {singleArticle.body.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      {/* Similar Articles Section */}
      {similarArticles.length > 0 && (
        <section className="mx-auto p-6 md:p-16 max-w-4xl border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">მსგავსი სტატიები</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {similarArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col gap-2"
              >
                <div className="w-full aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <SafeImage
                    alt={article.slug}
                    src={article.imageUrl}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-medium leading-snug group-hover:underline line-clamp-2">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {article.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
