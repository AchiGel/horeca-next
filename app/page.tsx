import { getAllArticles } from "./api/api";
import Newest from "./components/Newest";
import Posts from "./components/Posts";
import Title from "./components/Title";

export default async function Home() {
  const data = await getAllArticles();
  console.log(data);
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
          <Posts posts={data} />
        </>
      )}
    </div>
  );
}
