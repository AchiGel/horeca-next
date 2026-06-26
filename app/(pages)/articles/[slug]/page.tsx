import SafeImage from "@/app/components/ui/SafeImage";
import { getSingleArticle, getAllArticles } from "@/app/lib/api/api";
import { Metadata } from "next";
import SimilarArticlesCarousel from "@/app/components/ui/SimilarArticlesCarousel";

interface Props {
  params: Promise<{ slug: string }>;
}

function renderParagraph(p: string, key: number) {
  if (p.startsWith("h2/")) {
    return (
      <h2 key={key} className="text-xl md:text-2xl font-semibold mt-4 md:mt-6">
        {p.slice(3)}
      </h2>
    );
  }

  if (p.startsWith("h3/")) {
    return (
      <h2 key={key} className="text-lg md:text-xl font-semibold mt-4 md:mt-6">
        {p.slice(3)}
      </h2>
    );
  }

  if (p.startsWith("B/")) {
    return (
      <p key={key} className="text-base md:text-lg font-bold">
        {p.slice(2)}
      </p>
    );
  }

  if (p.startsWith("I/")) {
    return (
      <p key={key} className="text-base md:text-lg italic">
        {p.slice(2)}
      </p>
    );
  }

  return (
    <p key={key} className="text-base md:text-lg">
      {p}
    </p>
  );
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

  const similarArticles = allArticles.filter(
    (a) =>
      a.slug !== slug &&
      a.categories.some((cat) => singleArticle.categories.includes(cat)),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 mx-auto p-6 md:p-16 pt-24 md:pt-32 max-w-4xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          {singleArticle.title}
        </h1>
        <p className="text-sm text-gray-500">
          {singleArticle.minutesRead} წუთის საკითხავი
        </p>
        <div className="w-full h-100">
          <SafeImage
            alt={singleArticle.slug}
            src={singleArticle.imageUrl}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-lg md:text-xl italic">{singleArticle.description}</p>
        {singleArticle.body.map((p, index) => renderParagraph(p, index))}
      </div>

      {/* Similar Articles Section */}
      {similarArticles.length > 0 && (
        <section className="mx-auto p-6 md:p-16 max-w-4xl border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
            მსგავსი სტატიები
          </h2>
          <SimilarArticlesCarousel articles={similarArticles} />
        </section>
      )}
    </div>
  );
}
