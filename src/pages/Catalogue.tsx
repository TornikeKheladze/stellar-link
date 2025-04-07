import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";
import { catalogues } from "../data/catalogue";
import CatalogueDesc from "../components/catalogue/CatalogueDesc";

const Catalogue = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const catalogue = searchParams.get("catalogue") || "";

  useEffect(() => {
    const element = document.getElementById(catalogue);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }, [catalogue]);

  return (
    <section className="py-9">
      <h1 className="bg-primary lg:w-1/3 w-full mx-auto text-white text-center py-3 text-3xl font-bold mb-5">
        {t("catalogue")}
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 items-center">
          {catalogues.map((item) => (
            <CatalogueDesc key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
