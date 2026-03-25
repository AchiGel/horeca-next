import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "მენეჯმენტი",
};

export default async function ManagementPage() {
  return (
    <CategoryPage
      category="management"
      description="ამბები და სიახლეები მენეჯმენტის შესახებ"
    />
  );
}
