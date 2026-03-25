import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "სასტუმროები",
};

export default async function HotelsPage() {
  return (
    <CategoryPage
      category="hotels"
      description="ამბები და სიახლეები სასტუმროების შესახებ"
    />
  );
}
