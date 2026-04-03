import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "გასტრონომია",
};

export default async function GastronomyPage() {
  return (
    <CategoryPage
      category="gastronomy"
      description="ამბები და სიახლეები გასტრონომიის შესახებ"
    />
  );
}
