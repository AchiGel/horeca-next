import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ტრენდები",
};

export default async function TrendsPage() {
  return (
    <CategoryPage
      category="trends"
      description="აქტუალური ტრენდები Horeca სამყაროში"
    />
  );
}
