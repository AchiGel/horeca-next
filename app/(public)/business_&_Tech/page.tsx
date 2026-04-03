import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ბიზნესი და ტექნოლოგია",
};

export default async function BusinessAndTechPage() {
  return (
    <CategoryPage
      category="business_&_tech"
      description="ამბები და სიახლეები მასპინძლობის ბიზნესისა და ტექნოლოგიების შესახებ"
    />
  );
}
