import CategoryPage from "@/app/components/ui/CategoryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ინტერვიუები",
};

export default async function InterviewsPage() {
  return (
    <CategoryPage
      category="interviews"
      description="ინტერვიუები HoReCa სფეროს წარმომადგენლებთან"
    />
  );
}
