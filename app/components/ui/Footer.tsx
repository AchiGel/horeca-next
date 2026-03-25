import { footerData } from "@/app/constants/footerData";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-slate-600 lg:p-6 px-8 py-12 text-white">
      <div className="max-w-360 w-full mx-auto">
        <div className="flex md:flex-row flex-col justify-between mb-10 pb-10 border-white border-b">
          <div className="flex gap-10">
            <div>
              <h3 className="mb-6 font-semibold text-lg">გამოგვყევით:</h3>
              <ul className="flex flex-col gap-4 text-sm">
                {footerData.map((item) => (
                  <a
                    key={item.id}
                    href="https://www.facebook.com/hrcgeo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-blue-500 transition-colors"
                  >
                    {<item.icon />}
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 pt-4 border-white border-t">
          <h4 className="text-gray-300 text-sm">
            ©{" "}
            <a
              href="https://github.com/AchiGel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Archil Gelashvili
            </a>
          </h4>
        </div>
      </div>
    </footer>
  );
}
