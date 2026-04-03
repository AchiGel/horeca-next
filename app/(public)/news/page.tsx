import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ახალი ამბები",
};

export default async function NewsPage() {
  return (
    <CategoryPage
      category="news"
      description="მიმდინარე ამბები და სიახლეები HoReCa სფეროში"
    />
  );
}
