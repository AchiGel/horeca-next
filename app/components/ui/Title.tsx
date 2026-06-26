import { PageDescription } from "@/app/types/types";
import TitleBackground from "@/app/components/ui/TitleBackground";

export default function Title({ page }: { page: PageDescription }) {
  return (
    <div className="relative overflow-hidden">
      <TitleBackground />

      <div className="relative mx-4 md:mx-10 lg:mx-24 mt-24 md:mt-32 lg:mt-36 pb-10 md:pb-16">
        <h1 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white">
          {page.title}
        </h1>
        <span className="block text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {page.descr}
        </span>
      </div>
    </div>
  );
}
