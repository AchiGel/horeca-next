import Articles from "./Articles";
import { getArticlesByCategory } from "@/app/lib/api/api";

export default async function CategoryArticles({
  category,
}: {
  category: string;
}) {
  const articles = await getArticlesByCategory(category);
  return <Articles articles={articles} />;
}
