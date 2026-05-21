import { getAllArticles } from "./lib/api/api";
import Newest from "./components/ui/Newest";
import Articles from "./components/ui/Articles";
import Title from "./components/ui/Title";

export default async function Home() {
  const data = await getAllArticles();

  return (
    <div className="flex flex-col items-center">
      <Title
        page={{
          title: "Horeca Georgia - მასპინძლობის ინდუსტრია საქართველოში",
          descr: "ისტორია, აქტუალური ამბები, ინოვაციები და ტენდენციები",
        }}
      />
      {data.length > 0 ? (
        <>
          <Newest newest={data[0]} />
          <Articles articles={data} />
        </>
      ) : (
        <div className="mt-20 mb-20">სტატიები ვერ მოიძებნა!</div>
      )}
    </div>
  );
}
