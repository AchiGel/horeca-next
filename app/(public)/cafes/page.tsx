import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "კაფეები",
};

export default async function CafesPage() {
  return (
    <CategoryPage
      category="cafes"
      description="ამბები და სიახლეები კაფეების შესახებ"
    />
  );
}
