import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ქეითერინგი",
};

export default async function CateringPage() {
  return (
    <CategoryPage
      category="catering"
      description="ამბები და სიახლეები ქეითერინგის შესახებ"
    />
  );
}
