import { PageDescription } from "../types/types";

export default function Title({ page }: { page: PageDescription }) {
  return (
    <div className="mx-10 md:mx-10 lg:mx-24 mt-20 md:mt-28 lg:mt-32">
      <h1 className="mb-6 text-3xl md:text-6xl">{page.title}</h1>
      <span className="text-base md:text-lg">{page.descr}</span>
    </div>
  );
}
