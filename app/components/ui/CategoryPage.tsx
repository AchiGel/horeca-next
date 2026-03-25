import { Suspense } from "react";
import Title from "./Title";
import CategoryArticles from "./CategoryArticles";
import PostsSkeleton from "./PostsSkeleton";

interface Props {
  category: string;
  description: string;
}

export default function CategoryPage({ category, description }: Props) {
  return (
    <div>
      <Title
        page={{
          title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
          descr: description,
        }}
      />
      <Suspense fallback={<PostsSkeleton />}>
        <CategoryArticles category={category} />
      </Suspense>
    </div>
  );
}
