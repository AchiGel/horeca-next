import SafeImage from "@/app/components/ui/SafeImage";
import { getSingleArticle } from "@/app/lib/api/api";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const singleArticle = await getSingleArticle(slug);

  return {
    title: singleArticle.title,
    description: singleArticle.description,

    openGraph: {
      title: singleArticle.title,
      description: singleArticle.description,
      images: [singleArticle.imageUrl ?? "/no-image-available-icon-vector.jpg"],
    },

    twitter: {
      card: "summary_large_image",
      title: singleArticle.title,
      description: singleArticle.description,
      images: [singleArticle.imageUrl ?? "/no-image-available-icon-vector.jpg"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const singleArticle = await getSingleArticle(slug);

  return (
    <div>
      <div className="flex flex-col gap-4 mx-auto p-6 md:p-16 pt-24 md:pt-32 max-w-3xl">
        <h1 className="text-3xl">{singleArticle.title}</h1>
        <div className="w-full h-100">
          <SafeImage alt={singleArticle.slug} src={singleArticle.imageUrl} />
        </div>
        <p className="text-xl italic">{singleArticle.description}</p>
        {singleArticle.body.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}
