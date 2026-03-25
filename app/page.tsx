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
      {data && (
        <>
          <Newest newest={data[data.length - 1]} />
          <Articles articles={data} />
        </>
      )}
    </div>
  );
}
