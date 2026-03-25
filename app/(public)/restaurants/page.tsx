import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "რესტორნები",
};

export default async function RestaurantsPage() {
  return (
    <CategoryPage
      category="restaurants"
      description="ამბები და სიახლეები რესტორნების შესახებ"
    />
  );
}
